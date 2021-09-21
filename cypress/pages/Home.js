class HomePage {
  get searchContainer() {
    return cy.get('.search-container input')
  }

  get dropDown() {
    return cy.get('.search-dropdown-menu')
  }

  get searchButton() {
    return cy.get('.button-round')
  }

  visit() {
    cy.intercept('**/data/2.5/find*').as('cityData')

    cy.visit('/')
    cy.get('.owm-loader').should('not.exist')
    return this
  }

  search(location) {
    this.searchContainer.click().type(location)
    this.searchButton.click()
    return this
  }

  selectDropdown(index) {
    cy.wait('@cityData')
    this.dropDown.children().eq(index).click()
  }
}

export const homePage = new HomePage()
