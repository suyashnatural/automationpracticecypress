/// <reference types="cypress" />

import AuthenticationPage from "./AuthenticationPage"
import SummerDressesPage from "./SummerDressesPage";

export default class HomePage {

    openWebsite(website) {
        return cy.visit(website)
    }

    getHomePageHeaderBanner() {
        return cy.get("img[class=img-responsive]")
    }

    getHeaderContactLink() {
        return cy.get(".shop-phone>strong")
    }

    getHeaderContactUsLink() {
        return cy.get("#contact-link>a")
    }

    getHeaderSignInLink() {
        return cy.get(".login")
    }

    getHomePageHeaderLogo() {
        return cy.get("#header_logo>a")
    }

    getAllHeaderInfo() {
        return cy.get(".header-container")
    }

    getAllFooterInfo() {
        return cy.get(".footer-container")
    }

    getFooterSocialBlock() {
        return cy.get("#social_block>ul>li>a")
    }

    getFooterInformationBlock() {
        return cy.get("#block_various_links_footer>ul>li>a")
    }

    getFooterMyAccountBlock() {
        return cy.get(".block_content.toggle-footer>ul>li>a")
    }

    getFooterCategoriesBlock() {
        return cy.get(".tree.dynamized>li>a")
    }

    getFooterStoreInfoBlock() {
        return cy.get("#block_contact_infos>div>ul>li")
    }

    getStorePhoneNumber() {
        return cy.get("#block_contact_infos>div>ul>li:nth-child(2)>span")
    }

    getStoreEmailAddress() {
        return cy.get("#block_contact_infos>div>ul>li:nth-child(3)>span")
    }

    getNewsLetterEmailBox() {
        return cy.get("#newsletter-input")
    }

    getSubmitNewsLetterBtn() {
        return cy.get("button[name='submitNewsletter']")
    }

    getNewsletterAlert() {
        return cy.get(".alert")
    }

    getWomenMenu() {
        return cy.get("a[title='Women']")
    }

    getWomenDressMenu() {
        return cy.get("li[class='sfHover'] a[title='Dresses']")
    }

    getWomenSummerDressMenu() {
        return cy.get("li[class='sfHover'] ul li a[title='Summer Dresses']")
    }

    gotoSignIn() {
        const link = this.header.getSignInLink()
        link.click()
        const authPage = new AuthenticationPage()
        return authPage
    }

    gotoWomensSummerDress(waitTime) {
        this.getWomenMenu().rightclick()
        this.getWomenDressMenu().rightclick()
        this.getWomenSummerDressMenu().wait(waitTime).click()
        const summerDressPage = new SummerDressesPage()
        return summerDressPage
    }
}