import chai from 'chai'
import URL from 'url'

global.expect = chai.expect
function getCurrentRelativeUrl () {
  const urlString = browser.getUrl()
  const urlObject = URL.parse(urlString)
  return urlObject.pathname
}

describe('test of links on main page', () => {
  it('pressing kartor should redirect to "http://www.test.klart.se/kartor/', () => {
    browser.url('http://www.test.klart.se')
    browser.waitForVisible('[data-qa-id="maps-menu-item"]')
    browser.click('[data-qa-id="maps-menu-item"]')
    expect(getCurrentRelativeUrl()).to.have.string('/kartor')
  })

  it('pressing upptäck should redirect to "http://www.test.klart.se/upptäck/', () => {
    browser.url('http://www.test.klart.se')
    browser.waitForVisible('[data-qa-id="explore-menu-item"]')
    browser.click('[data-qa-id="explore-menu-item"]')
    expect(getCurrentRelativeUrl()).to.have.string('/uppt%C3%A4ck/')
  })

  it('pressing skidväder should redirect to "http://www.test.klart.se/skidväder/', () => {
    browser.url('http://www.test.klart.se')
    browser.waitForVisible('[data-qa-id="content-box-1"]')
    browser.click('[data-qa-id="content-box-1"]')
    expect(getCurrentRelativeUrl()).to.have.string('/se/skidv%C3%A4der/')
  })

  it('pressing väderkartor should redirect to "http://www.test.klart.se/väderkartor/', () => {
    browser.url('http://www.test.klart.se')
    browser.waitForVisible('[data-qa-id="content-box-3"]')
    browser.click('[data-qa-id="content-box-3"]')
    expect(getCurrentRelativeUrl()).to.have.string('/se/v%C3%A4derkartor/nederb%C3%B6rd/')
  })
})

describe('test of links on map page', () => {
  it('pressing väderkartor should redirect to "http://www.test.klart.se/se/väderkartor/nederbörd/"', () => {
    browser.url('http://www.test.klart.se/kartor/')
    browser.waitForVisible('[data-qa-id="weather-map-item-1"]')
    browser.click('[data-qa-id="weather-map-item-1"]')
    expect(getCurrentRelativeUrl()).to.have.string('/se/v%C3%A4derkartor/nederb%C3%B6rd/')
  })

  it('pressing kustkartor should redirect to "http://www.test.klart.se/se/kustkartor/"', () => {
    browser.url('http://www.test.klart.se/kartor/')
    browser.waitForVisible('[data-qa-id="weather-map-item-2"]')
    browser.click('[data-qa-id="weather-map-item-2"]')
    expect(getCurrentRelativeUrl()).to.have.string('/kustkartor/')
  })

  it('pressing väderkartor/världen should redirect to "http://www.test.klart.se/europa/v%C3%A4derkartor"', () => {
    browser.url('http://www.test.klart.se/kartor/')
    browser.waitForVisible('[data-qa-id="weather-map-item-3"]')
    browser.click('[data-qa-id="weather-map-item-3"]')
    expect(getCurrentRelativeUrl()).to.have.string('/europa/v%C3%A4derkartor')
  })

  it('pressing väderkartor/världen should redirect to "http://www.test.klart.se/v%C3%A4rlden/v%C3%A4derkartor/nederb%C3%B6rd/"', () => {
    browser.url('http://www.test.klart.se/kartor/')
    browser.waitForVisible('[data-qa-id="weather-map-item-4"]')
    browser.click('[data-qa-id="weather-map-item-4"]')
    expect(getCurrentRelativeUrl()).to.have.string('/v%C3%A4rlden/v%C3%A4derkartor/nederb%C3%B6rd/')
  })
})

describe('test of links on explore page', () => {
  it('pressing väderkartor/världen should redirect to "http://www.test.klart.se/v%C3%A4rlden/"', () => {
    browser.url('http://www.test.klart.se/upptäck/')
    browser.waitForVisible('[data-qa-id="content-box-2"]')
    browser.click('[data-qa-id="content-box-2"]')
    expect(getCurrentRelativeUrl()).to.have.string('/v%C3%A4rlden/')
  })

  it('pressing golfväder should redirect to "http://www.test.klart.se/se/golfv%C3%A4der/"', () => {
    browser.url('http://www.test.klart.se/upptäck/')
    browser.waitForVisible('[data-qa-id="content-box-4"]')
    browser.click('[data-qa-id="content-box-4"]')
    expect(getCurrentRelativeUrl()).to.have.string('/se/golfv%C3%A4der/')
  })

  it('pressing varningar should redirect to "http://www.test.klart.se/se/varningar/"', () => {
    browser.url('http://www.test.klart.se/upptäck/')
    browser.waitForVisible('[data-qa-id="content-box-5"]')
    browser.click('[data-qa-id="content-box-5"]')
    expect(getCurrentRelativeUrl()).to.have.string('/se/varningar')
  })

  it('pressing pollenprognoser should redirect to "http://www.test.klart.se/se/pollenprognoser/"', () => {
    browser.url('http://www.test.klart.se/upptäck/')
    browser.waitForVisible('[data-qa-id="content-box-6"]')
    browser.click('[data-qa-id="content-box-6"]')
    expect(getCurrentRelativeUrl()).to.have.string('/se/pollenprognoser/')
  })
})

describe('test of search on startpage', () => {
  it('search for Boden should redirect to "http://www.test.klart.se/se/norrbottens-l%C3%A4n/v%C3%A4der-boden/"', () => {
    browser.url('http://www.test.klart.se')
    browser.waitForVisible('[data-qa-id="search-field"]')
    browser.setValue('[data-qa-id="search-field"]', 'Boden')
  })
})
