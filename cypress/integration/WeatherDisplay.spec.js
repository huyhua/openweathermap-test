import dayjs from 'dayjs'
import { homePage } from '../pages/Home'
import { resultPage } from '../pages/Result'

describe('Open Weather Map', () => {
  it('should display correct info', () => {
    const today = dayjs().format('MMM DD')

    homePage.visit().search('Hanoi').selectDropdown(0)

    resultPage.city.should('have.text', 'Ha Noi, VN')
    resultPage.temperature.invoke('text').should('match', /\d{2}°C/)
    // Hour and minute matching is flaky and should only be style matched
    resultPage.date
      .invoke('text')
      .should('match', new RegExp(`^${today}, \\d{1,2}:\\d{2}(am|pm)`))
  })
})
