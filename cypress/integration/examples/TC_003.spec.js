/// <reference types="cypress" />

import HomePage from '../../elements/pages/HomePage'
import baseFixture from '../../fixtures/baseFixture.json'
import failuresFixtures from '../../fixtures/expectedFailure.json'

describe('Automate Women > Dresses > Summer Dresses listing page', () => {
    let homePage = '';
    let summerDressPage = '';

    before(() => {
        homePage = new HomePage();
        homePage.openWebsite(baseFixture.website);
    })

    it('Navigate to Womens Summer Dress Page', () => {
        summerDressPage = homePage.gotoWomensSummerDress(baseFixture.waitTime)
        cy.url().should('include', 'controller=category')
    })

    it('Validate using the filters and its results', () => {
        summerDressPage.checkGirlyStyleFilter()
        summerDressPage.getLoadingSpinner().should('exist').then(() => {
            throw new Error(failuresFixtures["Expected Filter Error"])
        })
    })

    it('Validate sorting functionality - Price: Lowest first sort', () => {
        //Price: Lowest first sort
        summerDressPage.sortByLowestPriceFirst()
        summerDressPage.getLoadingSpinner().should('exist').then(() => {
            throw new Error(failuresFixtures["Price Sort Error (L->H)"])
        })
    })

    it('Validate sorting functionality - Price: Highest first sort', () => {
        //Price: Highest first sort
        summerDressPage.sortByHighestPriceFirst()
        summerDressPage.getLoadingSpinner().should('exist').then(() => {
            throw new Error(failuresFixtures["Price Sort Error (H->L)"])
        })
    })
    it('Validate sorting functionality - Product Name: A to Z sort', () => {
        //Product Name: A to Z
        summerDressPage.sortByProductNameAtoZ()
        summerDressPage.getLoadingSpinner().should('exist').then(() => {
            throw new Error(failuresFixtures["Name Sort Error (A->Z)"])
        })
    })
    it('Validate sorting functionality - Product Name: Z to A sort', () => {
        //Product Name: Z to A
        summerDressPage.sortByProductNameZtoA()
        summerDressPage.getLoadingSpinner().should('exist').then(() => {
            throw new Error(failuresFixtures["Name Sort Error (Z->A)"])
        })
    })
})