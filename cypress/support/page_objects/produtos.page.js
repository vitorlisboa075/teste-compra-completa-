import  {fa, faker}   from '@faker-js/faker';

var nome = faker.person.firstName()
var sobrenome = faker.person.lastName ()
var email = faker.internet.email(nome+sobrenome)

class  Produtos{
   

    addProdutosAoCarrinho(tamanho, cor, quantidade ){
       
    }
    

  
   deveFazerLogin(){
    cy.get('[title="Login"]').eq(1).click()
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type('testevitor123')
    cy.get(':nth-child(4) > .button').click()
    }

    deveCompletarCheckout(){
    cy.visit('minha-conta/edit-account/')
    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').type(sobrenome)
    cy.get('.woocommerce-Button').click()
    cy.visit('minha-conta/edit-address/faturamento/')
    cy.get('#billing_address_1').type(faker.location.streetAddress())
    cy.get('#billing_city').type(faker.location.city())
    cy.get('#select2-billing_state-container').type('bahia{enter}')
    cy.get('#billing_postcode').type('46430000')
    cy.get('#billing_phone').type('77998246814')
    cy.get('#select2-billing_country-container').type('brasil{enter}')
    cy.get(':nth-child(2) > .button').click()

    

    }

    deveBucarProduto(nomeProduto){
    cy.get('[name="s"]').eq(1).type(nomeProduto)
    cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()     
    }
  
    deveFazerCompra(tamanho, cor, quantidade){
        cy.get('.button-variable-item-'+tamanho).click()
        cy.get('.button-variable-item-'+cor).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    }

}

export default new Produtos()