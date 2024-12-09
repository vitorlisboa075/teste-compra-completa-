/// <reference types="Cypress" />
import  Produtos  from "../support/page_objects/produtos.page";


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */
  });

  beforeEach(() => {
      cy.visit('produtos/')
  });

it('teste', () => {
  Produtos.deveFazerLogin()
  Produtos.deveCompletarCheckout()
});

  it.only('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    Produtos.deveFazerLogin()
  
  cy.fixture('produtos').then(dados =>{

  Produtos.deveBucarProduto(dados[1].nomeProduto)
  Produtos.deveFazerCompra( 
    dados[1].cor,
    dados[1].tamanho ,
    dados[1].quantidade,
    )
  cy.fixture('produtos').then(dados =>{
  Produtos.deveBucarProduto(dados[2].nomeProduto)
  Produtos.deveFazerCompra( 
    dados[2].cor,
    dados[2].tamanho ,
    dados[2].quantidade,
    )
  cy.fixture('produtos').then(dados =>{
  Produtos.deveBucarProduto(dados[0].nomeProduto)
  Produtos.deveFazerCompra( 
    dados[0].cor,
    dados[0].tamanho ,
    dados[0].quantidade,
    )
  cy.fixture('produtos').then(dados =>{
  Produtos.deveBucarProduto(dados[3].nomeProduto)
  Produtos.deveFazerCompra( 
    dados[3].cor,
    dados[3].tamanho ,
    dados[3].quantidade,
     )
  Produtos.deveCompletarCheckout()
  cy.visit('carrinho/')
  cy.get('.checkout-button').click()
  cy.get('#terms').click()
  cy.get('#place_order').click().wait(9000)
  cy.get('.woocommerce-notice').should('contain','Obrigado. Seu pedido foi recebido.')
});

});
 
});    


});

});