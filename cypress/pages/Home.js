class HomePage {
  get headerSearchField() {
    return cy.get('#desktop-menu input:visible')
  }

  get bodySearchField() {
    return cy.get('.search-container input')
  }

  get dropDown() {
    return cy.get('.search-dropdown-menu')
  }

  get searchButton() {
    return cy.get('.button-round')
  }

  visit() {
    cy.visit('/')
    cy.get('.owm-loader').should('not.exist')
    return this
  }

  searchFromHeader(location) {
    this.headerSearchField.click().type(location).type('{enter}')
  }

  search(location) {
    this.bodySearchField.click().type(location)
    this.searchButton.click()
    return this
  }

  selectDropdown(index) {
    this.dropDown.children().eq(index).click()
  }
}

export const homePage = new HomePage()
