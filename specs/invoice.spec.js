const { test } = require('@playwright/test')
const { App } = require('../pages/app.page')

test.describe('Draft Invoice', () => {
  test.beforeEach(async ({ page }) => {
    const manufacturer = new App(page)
    const loginPage = manufacturer.onLoginPage()
    await loginPage.login()
  })

  test('Review Purchase order', async ({ page }) => {
    const manufacturer = new App(page)
    const loginPage = manufacturer.onLoginPage()
    await loginPage.onDraftInvoice()
  })

  test('Billing Order', async ({ page }) => {
    const manufacturer = new App(page)
    const loginPage = manufacturer.onPoCheck()
    await loginPage.poCheck()
  })

  test('Shipping Order', async ({ page }) => {
    const manufacturer = new App(page)
    const loginPage = manufacturer.onShippingCheck()
    await loginPage.shippingCheck()
  })
})
