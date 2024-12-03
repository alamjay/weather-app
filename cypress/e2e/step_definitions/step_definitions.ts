import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the weather app", () => {
  cy.visit("localhost:3000");
})