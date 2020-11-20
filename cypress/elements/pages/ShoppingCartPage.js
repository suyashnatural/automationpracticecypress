/// <reference types="cypress" />

import AuthenticationPage from "./AuthenticationPage"

export default class ShoppingCartPage {

    getProductDescription() {
        return cy.get("td[class='cart_description']")
    }

    getProductTotal() {
        return cy.get("td[class='cart_total']")
    }

    getShippingCharges() {
        return cy.get("#total_shipping")
    }

    getGrandTotal() {
        return cy.get("#total_price_container")
    }

    getProceedToCheckoutBtn() {
        return cy.get("#center_column>p>a:nth-of-type(1)")
    }

    verifyCartInformation() {
        cy.log('verifying the product info added into the cart are correct or not')
        this.getProductDescription()
            .should('contains.text', 'Printed Chiffon Dress')
            .should('contains.text', 'SKU : demo_7')
            .should('contains.text', 'Color : Yellow, Size : S')
        this.getProductTotal()
            .should('contains.text', '$16.40')
        this.getShippingCharges()
            .should('contains.text', '$2.00')
        this.getGrandTotal()
            .should('contains.text', '$18.40')
    }

    proceedToAddressPage() {
        this.getProceedToCheckoutBtn().click()
        const authPage = new AuthenticationPage();
        return authPage;
    }
}