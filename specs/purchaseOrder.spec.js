// @ts-check

const { test } = require('@playwright/test')
const { App } = require('../pages/app.page')

test('Logged in as Manufacturer', async ({ page }, testInfo) => {
  const manufacturer = new App(page)
  await manufacturer.onLoginPage().login()
})

test.fixme('Manufacturer reviews PO information',
  async ({ page }, testInfo) => {
    const manufacturer = new App(page)
    await manufacturer.onOrderDetailPage().clickReviewPurchaseOrder()

    // Xray properties to sync with Test on Jira
    testInfo.annotations.push({ type: 'test_key', description: 'TR-159' })
  })

test.fixme('Manufacturer reviews buyer info in PO',
  async ({ page }, testInfo) => {
     const manufacturer = new App(page)
    await manufacturer.onOrderDetailPage().clickReviewPurchaseOrder()
    await manufacturer.onPurchaseOrderPage().clickAcceptOrder()

    // Xray properties to sync with Test on Jira
    testInfo.annotations.push({ type: 'test_key', description: 'TR-157' })
  })

test.fixme('Manufacturer reviews parts info in PO',
  async ({ page }, testInfo) => {
    // Xray properties to sync with Test on Jira
    testInfo.annotations.push({ type: 'test_key', description: '' })
  })
