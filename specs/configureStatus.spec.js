const { test } = require('@playwright/test')
const { App } = require('../pages/app.page')

test.describe('Login Page', () => {
  // Manufacturer configures status template for part tracking
  test('Review Purchase order', async ({ page }) => {
    const manufacturer = new App(page)
    const loginPage = manufacturer.onLoginPage()
    await loginPage.login()
    await loginPage.reviewPO()
    const statusUpdate = manufacturer.onStatusUpdate()
    await statusUpdate.statusUpdate()
  })

  test.fixme('Manufacturer adds/rearranges new statuses', async ({ page }, testInfo) => {
    testInfo.annotations.push({ type: 'test_key', description: '' })
  })

  test.fixme('Manufacturer cancels edit to statuses', async ({ page }, testInfo) => {
  const manufacturer = new App(page);

    // Xray properties to sync with Test on Jira
    testInfo.annotations.push({ type: 'test_key', description: '' })
  })
})
