class FindPage {
  get resultTable() {
    return cy.get('#forecast_list_ul .table')
  }

  selectLocation(index) {
    this.resultTable.within(() => {
      cy.get('a').filter('[href*="/city"]').eq(index).click()
    })
  }
}

export const findPage = new FindPage()
