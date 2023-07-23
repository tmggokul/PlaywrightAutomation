const { test } = require('@playwright/test')
const { ReshapeApp } = require('../pages/reshapeApp.page')

test.describe('Login Page', () => {
  // Manufacturer configures status template for part tracking
  test('Review Purchase order', async ({ page }) => {
    const manufacturer = new ReshapeApp(page)
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
  // const manufacturer = new reshapeApp(page);

    // Xray properties to sync with Test on Jira
    testInfo.annotations.push({ type: 'test_key', description: '' })
  })
})
