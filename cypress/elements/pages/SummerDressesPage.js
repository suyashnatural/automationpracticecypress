/// <reference types="cypress" />

import ProductPage from "./ProductPage"

export default class SummerDressesPage {

    getTotalProductsText() {
        return cy.get(".heading-counter")
    }

    getTotalProductBlocks() {
        return cy.get(".ajax_block_product")
    }

    getPrintedChiffonDress() {
        return cy.get("a[title='Printed Chiffon Dress']>img[title='Printed Chiffon Dress']")
    }

    checkGirlyStyleFilter() {
        const girly = cy.get("#layered_id_feature_13").check()
        return girly
    }

    getLoadingSpinner() {
        return cy.get(".product_list>:nth-child(1)>img")
    }

    getSortingFilters() {
        return cy.get("#selectProductSort")
    }

    sortByLowestPriceFirst() {
        return this.getSortingFilters().select("price:asc")
    }

    sortByHighestPriceFirst() {
        return this.getSortingFilters().select("price:desc")
    }

    sortByProductNameAtoZ() {
        return this.getSortingFilters().select("name:asc")
    }

    sortByProductNameZtoA() {
        return this.getSortingFilters().select("name:desc")
    }

    navigateToChiffonDressPage() {
        cy.log('navigating to the product page')
        this.getPrintedChiffonDress().click()
        const productPage = new ProductPage()
        return productPage
    }
}