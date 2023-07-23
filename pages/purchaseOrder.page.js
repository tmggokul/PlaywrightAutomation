// eslint-disable-next-line no-unused-vars
const { expect } = require('@playwright/test')

class PurchaseOrderPage {
  constructor (page) {
    this.page = page

    // purchase order page
    this.messageBuyerBtn = page.locator('.order-nav-btn').first()
    this.backToOrder = page.locator('.back-to-order')
    this.acceptOrderBtn = page.locator('.accept-btn')
    this.poOrder = page.locator('.view-btn')
    this.images = page.locator('.mb-3')
    this.draftInvoice = page.getByText('Draft Invoice')
    this.createInvoice = page.getByText('Create Invoice')
  }

  async viewPoOrder () {
    await this.poOrder.click()
  }

  async clickAcceptOrder () {
    await this.acceptOrderBtn.click()
    await this.draftInvoice.click()
    await this.createInvoice.click()
  }

  async draftInvoice () {
    await this.acceptOrderBtn.click()
    await this.draftInvoice.click()
    await expect(this.successMsg).toContainText('Invoice #')
    await expect(this.successMsg).toContainText('Invoice Date')
    await expect(this.successMsg).toContainText('Delivery Date')
    await expect(this.successMsg).toContainText('Payment Term')
    await expect(this.successMsg).toContainText('PO#')
    await expect(this.successMsg).toContainText('PO Date')
    await expect(this.successMsg).toContainText('Preferred Payment Term')

    for (let i = 0; i < 20; i++) {
      await this.myRFQs.nth(i++).click()
      await this.page.goto(process.env.BASE_URL)
    }
  }

  async poCheck () {
    await this.acceptOrderBtn.click()
    await this.draftInvoice.click()
    await expect(this.successMsg).toContainText('Company')
    await expect(this.successMsg).toContainText('Street 1')
    await expect(this.successMsg).toContainText('Street 2')
    await expect(this.successMsg).toContainText('City')
    await expect(this.successMsg).toContainText('State')
    await expect(this.successMsg).toContainText('Contact')
    await expect(this.successMsg).toContainText('Phone')
    await expect(this.successMsg).toContainText('Email')
    await expect(this.successMsg).toContainText('Ship To')

    for (let i = 0; i < 20; i++) {
      await this.myRFQs.nth(i++).click()
      await this.page.goto(process.env.BASE_URL)
    }
  }

  async shippingCheck () {
    await this.acceptOrderBtn.click()
    await this.draftInvoice.click()
    await expect(this.successMsg).toContainText('Company')
    await expect(this.successMsg).toContainText('Street 1')
    await expect(this.successMsg).toContainText('Street 2')
    await expect(this.successMsg).toContainText('City')
    await expect(this.successMsg).toContainText('State')

    for (let i = 0; i < 20; i++) {
      await this.myRFQs.nth(i++).click()
      await this.page.goto(process.env.BASE_URL)
    }
  }
}
module.exports = { PurchaseOrderPage }
