/// <reference types="cypress" />

import ShippingPage from "./ShippingPage"

export default class ShoppingAddressPage {

    getSignOutBtn() {
        return cy.get(".logout")
    }

    getOrderCommentTextBox() {
        return cy.get("textarea[name='message']")
    }

    getProceedToCheckoutBtn() {
        return cy.get("#center_column>form>p>button")
    }

    addCommentForTheOrder(comment) {
        return this.getOrderCommentTextBox().type(comment)
    }

    gotoCheckout() {
        this.getProceedToCheckoutBtn().click()
        const shippingPage = new ShippingPage()
        return shippingPage
    }
}
