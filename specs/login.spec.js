const { test } = require('@playwright/test')
const { ReshapeApp } = require('../pages/reshapeApp.page')

test.describe('Login Page', () => {
  test.beforeEach(async ({ page }) => {
    const manufacturer = new ReshapeApp(page)
    const loginPage = manufacturer.onLoginPage()
    await loginPage.login()
  })

  test('Review Purchase order', async ({ page }) => {
    const manufacturer = new ReshapeApp(page)
    const loginPage = manufacturer.onLoginPage()
    await loginPage.reviewPO()
  })
})
