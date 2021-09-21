class ResultPage {
  get city() {
    return cy.get('.current-container h2')
  }

  get temperature() {
    return cy.get('.current-temp .heading')
  }

  get date() {
    return cy.get('.current-container .orange-text')
  }
}

export const resultPage = new ResultPage()
