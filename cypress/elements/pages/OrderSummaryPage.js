/// <reference types="cypress" />

import OrderConfirmationPage from "./OrderConfirmationPage"

export default class OrderSummaryPage {
    getOrderSummaryCrumb() {
        return cy.get("span[class='navigation_page']")
    }

    getOrderSummarySubHeading() {
        return cy.get(".page-subheading")
    }

    getTotalAmountInOrderSummaryPage() {
        return cy.get("#amount")
    }

    getCurrency() {
        return cy.get("div[class='box cheque-box']>p>b")
    }

    validateOrderSummaryPageViaBankTransfer() {
        this.getOrderSummaryCrumb().should('contain.text', 'Bank-wire payment.')
        this.getOrderSummarySubHeading().should('contain.text', 'Bank-wire payment.')
        this.getTotalAmountInOrderSummaryPage().should('contain.text', '$18.40')
        this.getCurrency().should('contain.text', 'Dollar')
    }

    validateOrderSummaryPageViaCheck() {
        this.getOrderSummaryCrumb().should('contain.text', 'Check payment')
        this.getOrderSummarySubHeading().should('contain.text', 'Check payment')
        this.getTotalAmountInOrderSummaryPage().should('contain.text', '$18.40')
        this.getCurrency().should('contain.text', 'Dollar')
    }

    getConfirmOrderBtn() {
        return cy.get("button[class='button btn btn-default button-medium']>span")
    }

    confirmMyOrder() {
        this.getConfirmOrderBtn().click()
        const orderConfirmationPage = new OrderConfirmationPage()
        return orderConfirmationPage
    }
}