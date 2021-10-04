import dayjs from 'dayjs'
import { homePage } from '../pages/Home'
import { resultPage } from '../pages/Result'
import { findPage } from '../pages/Find'

const today = dayjs().format('MMM D')
const cities = require('../fixtures/test_data/city.json')

describe('Verify city temperature', () => {
  beforeEach(() => {
    homePage.visit()
  })

  cities.forEach(([keyword, result]) => {
    it(`with keyword ${keyword}`, () => {
      homePage.searchFromHeader(keyword)
      findPage.selectLocation(0)
      resultPage.city.should('have.text', result)
      resultPage.temperature.invoke('text').should('match', /\d{2}°(C|F)/)
      // Hour and minute matching is flaky and should only be style matched
      resultPage.date
        .invoke('text')
        .should('match', new RegExp(`^${today}, \\d{2}:\\d{2}(am|pm)`))
    })
  })
})
