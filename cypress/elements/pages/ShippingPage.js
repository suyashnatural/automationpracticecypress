/// <reference types="cypress" />

import PaymentPage from "./PaymentPage"

export default class ShippingPage {
    getTermsCheckBox() {
        return cy.get("#cgv")
    }

    getShippingCrumb() {
        return cy.get("span[class='navigation_page']")
    }

    getTermsOfServiceLink() {
        return cy.get("a[class='iframe']")
    }

    getTermsOfServiceLinkCloseBtn() {
        return cy.get("a[title='Close']")
    }

    validateShippingPage() {
        return this.getShippingCrumb().should('contain.text', 'Shipping')
    }

    readTermsOfServieAndClose() {
        this.getTermsOfServiceLink().click()
        this.getTermsOfServiceLinkCloseBtn().click()
        return this
    }

    checkTermsConditionCheckBox() {
        return this.getTermsCheckBox().click()
    }

    getProceedToPaymentPageBtn() {
        return cy.get("button[name='processCarrier']")
    }

    proceedToPaymentPage() {
        this.getProceedToPaymentPageBtn().click()
        const paymentPage = new PaymentPage()
        return paymentPage
    }
}