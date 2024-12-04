/// <reference types="cypress" />
// @ts-check
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the weather app", () => {
  cy.visit("localhost:3000");
})

When("I type {string} in the search field", (search: string) => {
  cy.intercept("GET", "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=603e94367063c5c7949ba98d72dccbc4", {fixture: "searches/london"}).as("searchRequest")
  cy.intercept("GET", "http://api.openweathermap.org/geo/1.0/direct?q=New&limit=5&appid=603e94367063c5c7949ba98d72dccbc4", {fixture: "searches/new"}).as("searchRequest")
  cy.get("[data-cy=input-search]").type(search)
})

When("I clear the search field", () => {
  cy.wait("@searchRequest")
  cy.get("[data-cy=input-search]").clear()
})

When("I select the first option in the search field", () => {
  cy.intercept("GET", "http://api.openweathermap.org/data/2.5/forecast?lat=51.5073219&lon=-0.1276474&appid=603e94367063c5c7949ba98d72dccbc4&units=metric", {fixture: "forecasts/forecast"}).as("forecast")
  cy.intercept("GET", "https://pollen.googleapis.com/v1/forecast:lookup?key=AIzaSyATZXXMOQdzjJxoD85in2g3hFlqI5O79lA&location.latitude=51.5073219&location.longitude=-0.1276474&days=1", {fixture: "pollen/pollen"}).as("pollen")
  cy.intercept("POST", "https://airquality.googleapis.com/v1/currentConditions:lookup?key=AIzaSyATZXXMOQdzjJxoD85in2g3hFlqI5O79lA", {fixture: "airqualities/airquality"}).as("airQuality")
  cy.intercept("POST", "https://maps.googleapis.com/$rpc/google.internal.maps.mapsjs.v1.MapsJsInternalService/GetViewportInfo", { fixture: "maps/london" }).as("map")
  cy.intercept("GET", "https://maps.googleapis.com/maps/api/mapsjs/gen_204?csp_test=true", {})
  cy.get("[data-cy=suggestion-list]").find("li").first().click()
})

Then("I should see 5 options that appear with {string}", (search: string) => {
  cy.wait("@searchRequest")
  cy.get("[data-cy=suggestion-list]").find("li").each(($suggestion: any) => {
    cy.wrap($suggestion).should("contain.text", search)
  })
})

Then("I should not see the list of suggestion", () => {
  cy.get("[data-cy=suggestion-list]").should("not.exist")
})

Then("I should see the forecast for that location", () => {
  cy.get("[data-cy=forecast-description]").should("have.text", "scattered clouds")
})