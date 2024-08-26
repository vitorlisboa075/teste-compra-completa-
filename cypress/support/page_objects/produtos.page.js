import  faker  from '@faker-js/faker';
class  Produtos{
   

    addProdutosAoCarrinho(tamanho, cor, quantidade ){
       
    }

   deveFazerLogin(){
        cy.get('[title="Login"]').eq(1).click()
       cy.get('#reg_email').type(faker.internt.em)
    }

    deveBucarProduto(nomeProduto){

    cy.get('[name="s"]').eq(1).type(nomeProduto)
    cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
        
    }

}

export default new Produtos()