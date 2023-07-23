const { GenericPage } = require('@shapeways/e2e-test-utils')

/**
 * @class
 * @extends GenericPage<LoginPage>
 */
class LoginPage extends GenericPage {
  constructor (page) {
    super(page, {
      baseURL: process.env.BASE_URL,
      basePath: '/login',
      title: 'Reshape'
    })
    this.signInBtn = page.locator("[type='submit']")
    this.rfqNavigation = page.locator("[name='mnu_rfqs']")
    this.userName = page.locator('#email')
    this.mfgPassword = page.locator('#password')
    this.myRFQs = page.locator("[data-value='RFQs']")
    this.cancelButton = page.locator('.btn-cancel')
    this.backOrder = page.getByText('< Back to Order')
    this.acceptButton = page.locator('.accept-btn').last()
    this.reviewButton = page.locator('//html[1]/body[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/button[1]')
  }

  async login () {
    await this.page.goto(process.env.BASE_URL)
    await this.userName.type(process.env.ADMIN_USER_USERNAME)
    await this.mfgPassword.type(process.env.ADMIN_USER_PASSWORD)
    await this.signInBtn.click()
    await this.page.goto(process.env.BASE_URL)
  }

  async mfgNavBar () {
    await this.myRFQs.nth(2).click()
    await this.page.goto(process.env.BASE_URL)
    for (let i = 3; i < 20; i++) {
      await this.myRFQs.nth(i++).click()
      await this.page.goto(process.env.BASE_URL)
    }
  }

  async reviewPO () {
    await this.reviewButton.click()
    await this.acceptButton.click()
  }
}
module.exports = { LoginPage }
