import {Given, Then, And} from "cypress-cucumber-preprocessor/steps";


Given('I visit EA Site', ()=>{
    cy.visit("http://eaapp.somee.com");
})

Given('I click login link', () => {
    cy.contains('Login').click();
})

And('I login as user with {string} and {string}', (username,password) => {
    cy.get('#UserName').type("admin");
    cy.get('#Password').type("password");
    cy.get('.btn').click();

})