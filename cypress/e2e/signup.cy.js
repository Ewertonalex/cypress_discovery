/// <reference types="cypress" />
import signup from '../pages/SignupPage'   //importando a classe instaciada SignupPage onde estão as linhas de testes
import SignupFactory from '../factories/SignupFactory'   //importando modulo criado na pasta factories
import SignupPage from '../pages/SignupPage'

describe('Signup', () => {    //Cadastro

    // beforeEach(function() { 
    //     cy.fixture('deliver').then((d) => {   //cypress identifica o aqruivo json la do fixtures so pelo nome dele / then paera pegar o resultado da massa de testes / d = abreviação de deliver
    //         this.deliver = d //this = palavra reservada para criar uma variavel de contexto que é o deliver que recebe o resultado de d que é massa de testes do arquivo.json
    //     })
    // })

    it('User should be deliver', function () { //Usuário deve se tornar um entregador

        var deliver = SignupFactory.deliver() //vai criar massa de teste

        signup.go() // fazendo chamada às funções - ir para página de cadastro
        signup.fillForm(deliver) // chamando a massa de testes
        signup.submit()  // testes de preencher o formulário

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.' //criando constante para diminuir tamanho do texto no teste
        signup.modalContentShoulBe(expectedMessage)  // validar a mensagem de sucesso
    })

    it('Incorrect document', function () {  //CPF incorreto

        var deliver = SignupFactory.deliver() //vai criar massa de teste

        deliver.cpf = '12300e020aa'

        signup.go() // fazendo chamada às funções - ir para página de cadastro
        signup.fillForm(deliver) // chamando a massa de testes
        signup.submit()  // testes de preencher o formulário    
        signup.alertMessageShouldBe('Oops! CPF inválido') //Validar alerta de erro       
    })
    it('Incorrect email', function () {  //Email incorreto

        var deliver = SignupFactory.deliver() //vai criar massa de teste

        deliver.email = 'teste.com.br'

        signup.go() // fazendo chamada às funções - ir para página de cadastro
        signup.fillForm(deliver) // chamando a massa de testes
        signup.submit()  // testes de preencher o formulário    
        signup.alertMessageShouldBe('Oops! Email com formato inválido.') //Validar alerta de erro       
    })

    

    // context('Required fields', function () {
    //     // testes Step by step
    //     const messages = [
    //         { field: 'name', output: 'É necessário informar o nome' },
    //         { field: 'cpf', output: 'É necessário informar o CPF' },
    //         { field: 'email', output: 'É necessário informar o e-mail' },
    //         { field: 'postalcode', output: 'É necessário informar o CEP' },
    //         { field: 'number', output: 'É necessário informar o número do endereço' },
    //         { field: 'delivery_method', output: 'Selecione o método de entrega' },
    //         { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
    //     ]

    //     before(function(){
    //         signup.go()
    //         signup.submit()
    //     })
        
    //     messages.forEach(function(msg){
    //         it(`${msg.field} is required`, function(){
    //             signup.alertMessageShouldBe(msg.output)
    //         })
    //     }) //teste

    // })      
    
    it('Require fields', function () {  //Validando campos obrigatórios

        signup.go()
        signup.submit()
        signup.alertMessageShouldBe('É necessário informar o nome')
        signup.alertMessageShouldBe('É necessário informar o CPF')
        signup.alertMessageShouldBe('É necessário informar o email')
        signup.alertMessageShouldBe('É necessário informar o CEP')
        signup.alertMessageShouldBe('É necessário informar o número do endereço')
        signup.alertMessageShouldBe('Selecione o método de entrega')
        signup.alertMessageShouldBe('Adicione uma foto da sua CNH')

    })

})