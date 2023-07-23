// eslint-disable-next-line no-unused-vars
const { expect } = require('@playwright/test')

class OrderDetailPage {
  constructor (page) {
    this.page = page
    // order detail page
    this.titleCheck = page.locator('.mfg-rfq-status p')
    this.orderCheck = page.locator('.order-nav h3')
    this.orderCheckName = page.locator('.pr-5 span')
    this.cancelOrder = page.locator('text = Decline Order')
    this.selectDrop = page.locator('.modal-body select')
    this.confirmCancel = page.locator('.ml-3')
    this.cancelState = page.locator('.ml-3')
    this.keepOrder = page.locator('.keep-btn')
    this.partCheck = page.locator('.order-review')
    this.partDetail = page.locator('.view-details-toggle')
    this.reviewPurchaseOrderBtn = page.locator("//*[@id='mfg-container']/div[2]/div/div/div[3]/div/button[3]")
    this.confirmCancelMsg = page.locator('.toast-message')
  }

  async clickReviewPurchaseOrder () {
    await this.titleCheck.allTextContents()
    await this.orderCheck.first().textContent()
    await this.orderCheckName.first().textContent()
  }

  async cancelReviewPage () {
    await this.cancelOrder.click()
    await expect(this.cancelState).toBeDisabled()
    await this.selectDrop.click()
    await this.selectDrop.selectOption('Buyer no longer needs')
    await this.keepOrder.click()
    await this.cancelOrder.click()
    await this.selectDrop.click()
    await this.selectDrop.selectOption('Buyer no longer needs')
    await this.confirmCancel.click()
    await expect(this.confirmCancelMsg).toContainText('has been cancelled')
    // await this.cancelOrder.nth(1).click();
  }

  async partDetails () {
    await this.partDetail.first().click()
  }

  async invoiceDetails () {
    await this.partDetail.first().click()
  }
}
module.exports = { OrderDetailPage }
