// @ts-check
const { GenericPage } = require('@shapeways/e2e-test-utils')

/**
 * This class contains helpers that are common
 * to every/most pages in an application/service.
 * (e.g. helpers for the header, footer, navigation, ...)
 *
 * @extends {GenericPage}
 * @type {exports.CommonPage}
 */
exports.CommonPage = class CommonPage extends GenericPage {
  /**
   * @param {import('@playwright/test').Page} page
   * @param {Object} options
   */
  constructor (page, options) { // eslint-disable-line no-useless-constructor
    super(page, options)

    // here you can define additional options common
    // to all pages we're testing
  }

  // here you can define functions/methods that are repeated
  // on all pages we're testing
  //
  // /**
  //  * @returns {Promise<string>}
  //  */
  // async getBackgroundColor () {
  //   const element = await this.page.waitForSelector(this.selector)
  //   return await element.evaluate((el) => {
  //     return window.getComputedStyle(el).getPropertyValue('background-color')
  //   })
  // }
}
