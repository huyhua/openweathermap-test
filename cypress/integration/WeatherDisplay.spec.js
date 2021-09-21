import dayjs from 'dayjs'
import { homePage } from '../pages/Home'
import { resultPage } from '../pages/Result'
import { findPage } from '../pages/Find'

const today = dayjs().format('MMM DD')

describe('Open Weather Map', () => {
  beforeEach(() => {
    homePage.visit()
  })

  it('from body', () => {
    homePage.search('Hanoi').selectDropdown(0)

    resultPage.city.should('have.text', 'Ha Noi, VN')
    resultPage.temperature.invoke('text').should('match', /\d{2}°C/)
    // Hour and minute matching is flaky and should only be style matched
    resultPage.date
      .invoke('text')
      .should('match', new RegExp(`^${today}, \\d{2}:\\d{2}(am|pm)`))
  })

  it('from header', () => {
    homePage.searchFromHeader('Hanoi')
    findPage.selectLocation(0)
    resultPage.city.should('have.text', 'Hanoi, VN')
    resultPage.temperature.invoke('text').should('match', /\d{2}°C/)
    // Hour and minute matching is flaky and should only be style matched
    resultPage.date
      .invoke('text')
      .should('match', new RegExp(`^${today}, \\d{2}:\\d{2}(am|pm)`))
  })
})
