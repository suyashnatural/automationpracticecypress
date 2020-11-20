/// <reference types="cypress" />

import HomePage from '../../elements/pages/HomePage'
import baseFixture from '../../fixtures/baseFixture.json'
import headerFooterFix from '../../fixtures/headerFooter.json'

describe('Navigate to multiple pages of the website and automate verification of the header and footer.', () => {
    let homepage = '';

    before(() => {
        homepage = new HomePage();
        homepage.openWebsite(baseFixture.website);
    })

    it('verification of homepage header', () => {
        cy.log('validating the header banner')
        homepage.getHomePageHeaderBanner()
            .should('have.attr', 'src', headerFooterFix.headerBannerLink)

        cy.log('validating the header navigation panel')
        homepage.getHeaderContactLink()
            .should('have.text', headerFooterFix.contactUsNowNumber)
        homepage.getHeaderContactUsLink()
            .should('have.prop', 'href', headerFooterFix.contactUsLink)
            .should('have.attr', 'title', headerFooterFix.contactUsTitle)
            .should('have.text', headerFooterFix.contactUsText)
        homepage.getHeaderSignInLink()
            .should('have.prop', 'href', headerFooterFix.signInLink)
            .should('have.attr', 'title', headerFooterFix.signInTitle)
            .should('contain.text', headerFooterFix.signInText)

        homepage.getHomePageHeaderLogo()
            .should('have.attr', 'title', headerFooterFix.headerLogoTitle)
            .should('have.prop', 'href', headerFooterFix.headerLogoLink)
    })

    it('verification of the homepage footer', () => {

        cy.log('validating the static footer text')
        homepage.getAllFooterInfo().should('contains.text', headerFooterFix.footerStaticText)

        cy.log('validating the categories block')
        homepage.getFooterCategoriesBlock()
            .should('have.length', 1)
            .each(($el, index) => {
                cy.wrap($el).should('contain.text', headerFooterFix.footerCategoriesList[index])
                cy.wrap($el).should('have.attr', 'href', headerFooterFix.footerCategoryLink)
                cy.wrap($el).should('have.attr', 'title', headerFooterFix.footerCategoryTitle)
            })

        cy.log('validating social block')
        homepage.getFooterSocialBlock()
            .should('have.length', 4)
            .each(($el, index) => {
                cy.wrap($el).should('contain.text', headerFooterFix.socialList[index])
                cy.wrap($el).should('have.attr', 'href')
                cy.wrap($el).should('have.attr', 'target', '_blank')
            })

        cy.log('validating the Footer Information block')
        homepage.getFooterInformationBlock()
            .should('have.length', 8)
            .each(($el, index) => {
                cy.wrap($el).should('contain.text', headerFooterFix.footerInfoList[index])
                cy.wrap($el).should('have.attr', 'href')
                cy.wrap($el).should('have.attr', 'title', headerFooterFix.footerInfoList[index])
            })

        cy.log('validating the Footer My Account block')
        homepage.getFooterMyAccountBlock()
            .should('have.length', 4)
            .each(($el, index) => {
                cy.wrap($el).should('contain.text', headerFooterFix.footerMyAccountList[index])
                cy.wrap($el).should('have.attr', 'href')
            })

        cy.log('validating the footer Store information')
        homepage.getFooterStoreInfoBlock()
            .should('have.length', 3)
            .each(($el, index) => {
                cy.wrap($el).should('contain.text', headerFooterFix.footerStoreInfoList[index])
            })
        homepage.getStorePhoneNumber()
            .should('have.text', headerFooterFix.storePhoneNum)
        homepage.getStoreEmailAddress()
            .should('have.text', headerFooterFix.storeEmailAddress)
    })
})