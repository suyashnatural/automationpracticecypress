/// <reference types="cypress" />

import OrderSummaryPage from "./OrderSummaryPage"

export default class PaymentPage {
    getPaymentPageCrumb() {
        return cy.get("span[class='navigation_page']")
    }

    getOrderStepCrumb() {
        return cy.get("ul[id='order_step'] span:nth-child(1)")
    }

    validatePaymentPage() {
        this.getPaymentPageCrumb().should('contain.text', 'Your payment method')
        this.getOrderStepCrumb().should('contain.text', 'Payment')
        return this
    }

    getPaymentByBankWireBtn() {
        return cy.get("a[title='Pay by bank wire']")
    }

    getPaymentByCheck() {
        return cy.get("a[title='Pay by check.']")
    }

    payByBankWire() {
        this.getPaymentByBankWireBtn().click()
        const orderSummaryPage = new OrderSummaryPage()
        return orderSummaryPage
    }

    payByCheck() {
        this.getPaymentByCheck().click()
        const orderSummaryPage = new OrderSummaryPage()
        return orderSummaryPage
    }
}