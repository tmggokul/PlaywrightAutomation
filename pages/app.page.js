const { LoginPage } = require('./login.page')
const { OrderDetailPage } = require('./orderDetail.page')
const { PurchaseOrderPage } = require('./purchaseOrder.page')
const { ConfigureStatus } = require('./configureStatus.page')

class ReshapeApp {
  constructor (page) {
    this.page = page

    this.loginPage = new LoginPage(this.page)

    this.orderDetailPage = new OrderDetailPage(this.page)

    this.purchaseOrderPage = new PurchaseOrderPage(this.page)

    this.configureStatus = new ConfigureStatus(this.page)
  }

  onLoginPage () {
    return this.loginPage
  }

  onOrderDetailPage () {
    return this.orderDetailPage
  }

  onPurchaseOrderPage () {
    return this.purchaseOrderPage
  }

  onStatusUpdate () {
    return this.configureStatus
  }

  onPoOrder () {
    return this.purchaseOrderPage
  }

  onDraftInvoice () {
    return this.purchaseOrderPage
  }

  onPoCheck () {
    return this.purchaseOrderPage
  }

  onShippingCheck () {
    return this.purchaseOrderPage
  }
}

module.exports = { ReshapeApp }
