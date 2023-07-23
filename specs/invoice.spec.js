const { test } = require('@playwright/test')
const { ReshapeApp } = require('../pages/reshapeApp.page')

test.describe('Draft Invoice', () => {
  test.beforeEach(async ({ page }) => {
    const manufacturer = new ReshapeApp(page)
    const loginPage = manufacturer.onLoginPage()
    await loginPage.login()
  })

  test('Review Purchase order', async ({ page }) => {
    const manufacturer = new ReshapeApp(page)
    const loginPage = manufacturer.onLoginPage()
    await loginPage.onDraftInvoice()
  })

  test('Billing Order', async ({ page }) => {
    const manufacturer = new ReshapeApp(page)
    const loginPage = manufacturer.onPoCheck()
    await loginPage.poCheck()
  })

  test('Shipping Order', async ({ page }) => {
    const manufacturer = new ReshapeApp(page)
    const loginPage = manufacturer.onShippingCheck()
    await loginPage.shippingCheck()
  })
})
