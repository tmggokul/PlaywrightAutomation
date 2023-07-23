// @ts-check

const { test } = require('@playwright/test')
const { ReshapeApp } = require('../pages/reshapeApp.page')

test('Manufacturer receives order and reviews details', async ({ browser }, testInfo) => {
  const context = await browser.newContext()
  const page = await context.newPage()

  const manufacturer = new ReshapeApp(page)

  const loginPage = manufacturer.onLoginPage()

  await loginPage.login()

  const orderPage = manufacturer.onOrderDetailPage()
  await orderPage.clickReviewPurchaseOrder()
  // Xray properties to sync with Test on Jira
  testInfo.annotations.push({ type: 'test_key', description: 'TR-137' })
})

test('Manufacturer cancels order', async ({ browser }, testInfo) => {
  const context = await browser.newContext()
  const page = await context.newPage()

  const manufacturer = new ReshapeApp(page)

  const loginPage1 = manufacturer.onLoginPage()

  await loginPage1.login()

  const orderPage1 = manufacturer.onOrderDetailPage()
  await orderPage1.cancelReviewPage()
  // Xray properties to sync with Test on Jira
  testInfo.annotations.push({ type: 'test_key', description: 'TR-139' })
})
test('Manufacturer reviews part details', async ({ browser }, testInfo) => {
  const context = await browser.newContext()
  const page = await context.newPage()

  const manufacturer = new ReshapeApp(page)

  const loginPage2 = manufacturer.onLoginPage()
  await loginPage2.login()

  const orderPage2 = manufacturer.onOrderDetailPage()
  await orderPage2.partDetails()
  // Xray properties to sync with Test on Jira
  testInfo.annotations.push({ type: 'test_key', description: 'TR-138' })
})

test('Manufacturer downloads part file', async ({ page }, testInfo) => {
  // const manufacturer = new reshapeApp(page)

  // Xray properties to sync with Test on Jira
  testInfo.annotations.push({ type: 'test_key', description: 'TR-141' })
})
