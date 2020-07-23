const URL = "http://localhost:3001/"
describe("Page loading ok", () => {
  it("can navigate to the site", () => {
    // this is setup for the actual test
    cy.visit(URL)
    // assert that the site we landed at is the correct one
    cy.url().should("include", "localhost")
  })
})

describe("create a new user with legitimate data", () => {
  it("Submit button should be disabled", () => {
    cy.contains("Submit").should("be.disabled")
  })

  it("can input username", () => {
    cy.get('input[name="first_name"]')
      .type("Michael")
      .should("have.value", "Michael")
    cy.get('input[name="last_name"]').type("Wong").should("have.value", "Wong")
  })

  it("can input Email", () => {
    cy.get('input[name="email"]')
      .type("michael.wong@abc.com")
      .should("have.value", "michael.wong@abc.com")
  })

  it("can input password", () => {
    cy.get('input[name="password"]').type("123abc")
  })

  it("can check the terms", () => {
    cy.get('input[name="terms"]').check().should("be.checked")
  })

  it("Submit button should be enabled", () => {
    cy.contains("Submit").should("not.be.disabled")
  })

  it("can submit and clear the form", () => {
    cy.contains("Submit").click()

    cy.get('input[name="first_name"]').should("have.value", "")
    cy.get('input[name="last_name"]').should("have.value", "")
    cy.get('input[name="email"]').should("have.value", "")
    cy.get('input[name="password"]').should("have.value", "")
    cy.get('input[name="terms"]').should("not.be.checked")

    cy.contains("Submit").should("be.disabled")

    cy.contains("Michael Wong")
    cy.contains("michael.wong@abc.com")
  })
})
