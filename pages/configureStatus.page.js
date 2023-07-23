// eslint-disable-next-line no-unused-vars
const { expect } = require('@playwright/test')

class ConfigureStatus {
  constructor (page) {
    this.page = page
    this.configureStatus = page.getByText('Configure Status').first()
    this.dropDown = page.locator('//html[1]/body[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/span[1]')
    this.deleteStatus = page.locator('.ti-trash')
    this.addNewStatus = page.locator('.new-task-btn')
    this.defaultStatusesCheckbox = page.locator('.mr-1')
    this.updateStatusBtn = page.locator('.status-btn')
    this.msgBuyer = page.locator('.message-btn')
    this.newStatus = page.locator('.new-status-btn')
    this.inputText = page.locator('.mb-1')
    this.saveStatus = page.locator('.btn-block')
    this.successMsg = page.locator('.toast-message')
  }

  async statusUpdate () {
    await this.dropDown.click()
    await this.configureStatus.click()
    await this.newStatus.click()
    await this.inputText.click()
    await this.inputText.type('Inprogress')
    await this.saveStatus.click()
    await expect(this.successMsg).toContainText('Status added')
  }

  async messageBuyer () {
    await this.msgBuyer.click()
  }
}
module.exports = { ConfigureStatus }
