/// <reference types="cypress" />

import ShoppingCartPage from "./ShoppingCartPage"

export default class ProductPage {
    getModelPhoto() {
        return cy.get("img[id='bigpic']")
    }

    getNextDressSelector() {
        return cy.get("a[title='Next'] span")
    }

    getModelDressViewCloseBtn() {
        return cy.get("a[title='Close']")
    }

    getSummerDressBreadCrumb() {
        return cy.get("div[class='breadcrumb clearfix'] a[title='Summer Dresses']")
    }

    getAddToCartBtn() {
        return cy.get("button[name='Submit']>span")
    }

    getSuceessMsgOnAddingProdToCart() {
        return cy.get("div[class='layer_cart_product col-xs-12 col-md-6']")
    }

    getProceedToCheckOutBtn() {
        return cy.get("a[title='Proceed to checkout']>span")
    }

    addProductToCart() {
        const add = this.getAddToCartBtn().wait(300)
        add.click()
    }

    verifyProductAddedToCart() {
        this.getSuceessMsgOnAddingProdToCart()
            .should('contains.text', 'Product successfully added to your shopping cart')
            .should('contains.text', 'Printed Chiffon Dress')
    }

    proceedToCheckout() {
        const btn = this.getProceedToCheckOutBtn()
        btn.click()
        const cartPage = new ShoppingCartPage()
        return cartPage
    }
}