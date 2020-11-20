/// <reference types="cypress" />

export default class OrderConfirmationPage {
    getOrderStatusCrumb() {
        return cy.get(".cheque-indent")
    }

    getOrderStatusViaCheck() {
        return cy.get(".alert")
    }

    getOrderReferenceNumber() {
        return cy.get(".box")
    }

    validateOrderConfirmationByBank() {
        this.getOrderStatusCrumb().should('contain.text', 'Your order on My Store is complete.')
        const text = this.getOrderReferenceNumber()
            .invoke('text')
            .then((text) => {
                cy.log('Order summary: ' + text)
            })
    }

    validateOrderConfirmationByCheck() {
        this.getOrderStatusViaCheck().should('contain.text', 'Your order on My Store is complete.')
        const text = this.getOrderReferenceNumber()
            .invoke('text')
            .then((text) => {
                cy.log('Order summary: ' + text)
            })
    }
}