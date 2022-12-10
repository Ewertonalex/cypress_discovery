

class SignupPage {   //padrão de projeto Page Object

    go() {
        //cy.viewport(1440, 900) // resolução definida no cypress.config
        cy.visit('/') // url da pagina está no cypress.config
        cy.get('a[href="/deliver"]').click() //clica no botao da pagina inicil
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas') //validar texto do H1
    }

    fillForm(deliver) {
        cy.get('input[name="fullName"]').type(deliver.name)  //instaciando objeto aos campos
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode) //instaciando objeto aos campos de endereço
        cy.get('input[type="button"][value="Buscar CEP"]').click() //clicar no botão de CEP

        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        cy.get('input[name="address"]').should('have.value', deliver.address.street)  // Validando se o valor mostrado em tela confere com o do objeto
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

        cy.contains('.delivery-method li', deliver.delivery_method).click()  //busca de no campo contem o nome moto e se sim clicar
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)  //buscando imagem do objeto no caminho mencionado
    }

    submit() {
        cy.get('form button[type="submit"]').click() // validar click no botão para finalizar cadastro
    }

    modalContentShoulBe(expectedMessage) {
        cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage) // validando mensangem de sucesso
    }

    alertMessageShouldBe(expectedMessage) {
        //cy.get('.alert-error').should('have.text', expectedMessage) //so obtem um unico elemento
        cy.contains('.alert-error', expectedMessage).should('be.visible')
    }


}


export default new SignupPage;