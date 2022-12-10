// Padrao de projeto Page Object    
    // var signup = new SignupPage()  //criando variavel para instaciar a classe Signup, para ter acesso as funcões

    // before(function() {
    //     cy.log('Tudo aqui é executado uma única vez ANTES de TODOS os casos de testes')
    // })

    beforeEach(() => {
    cy.log('Tudo aqui é executado sempre ANTES de CADA de casos de teste') 
    })  
  
    // after(function() {
    //     cy.log('Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de testes')
    // })

    // afterEach(function() {
    //     cy.log('Tudo aqui é executado sempre DEPOIS de CADA de casos de teste')
    //})