/// <reference types="cypress" />

import HomePage from '../../elements/pages/HomePage'
import baseFixture from '../../fixtures/baseFixture.json'

describe('Verify the checkout journey by adding any product to the cart', () => {

    let homePage = '';
    let authPage = '';
    let summerDressPage = '';
    let productPage = '';
    let cartPage = '';
    let shoppingAddressPage = '';
    let shippingPage = '';
    let paymentPage = '';
    let orderSummaryPage = '';
    let orderConfirmationPage = '';

    before(() => {
        homePage = new HomePage();
        homePage.openWebsite(baseFixture.website);
    })

    it('Add the product ' + baseFixture.productName + ' into the cart, checkout and validate', () => {

        summerDressPage = homePage.gotoWomensSummerDress(baseFixture.waitTime)
        cy.url().should('include', baseFixture.summerDressPageURL)

        cy.log(baseFixture["step-1"])
        productPage = summerDressPage.navigateToChiffonDressPage()
        cy.url().should('include', baseFixture.productPageURL)

        cy.log(baseFixture["step-2"])
        productPage.addProductToCart()
        productPage.verifyProductAddedToCart()
        cartPage = productPage.proceedToCheckout()
        cy.url().should('include', baseFixture.cartPageURL)
        cartPage.verifyCartInformation()
        authPage = cartPage.proceedToAddressPage()

        cy.log(baseFixture["step-3"])
        shoppingAddressPage = authPage.signIntoApplication(baseFixture.userName, baseFixture.password);
        shoppingAddressPage.getSignOutBtn().should('be.visible')
        cy.url().should('include', baseFixture.shoppingPageURL)

        cy.log(baseFixture["step-4"])
        shoppingAddressPage.addCommentForTheOrder(baseFixture.addressComment)
        shippingPage = shoppingAddressPage.gotoCheckout()
        shippingPage.validateShippingPage()

        cy.log(baseFixture["step-5"])
        shippingPage.readTermsOfServieAndClose()
        shippingPage.checkTermsConditionCheckBox()
        paymentPage = shippingPage.proceedToPaymentPage()
        paymentPage.validatePaymentPage()

        cy.log(baseFixture["step-6"])
        if (baseFixture.paymentMethod === 'bank') {
            orderSummaryPage = paymentPage.payByBankWire()
            orderSummaryPage.validateOrderSummaryPageViaBankTransfer()

            cy.log(baseFixture["step-7"])
            orderConfirmationPage = orderSummaryPage.confirmMyOrder()
            orderConfirmationPage.validateOrderConfirmationByBank()

        } else if (baseFixture.paymentMethod === 'check') {
            orderSummaryPage = paymentPage.payByCheck()
            orderSummaryPage.validateOrderSummaryPageViaCheck()

            cy.log(baseFixture["step-7"])
            orderConfirmationPage = orderSummaryPage.confirmMyOrder()
            orderConfirmationPage.validateOrderConfirmationByCheck()
        }
    })
})