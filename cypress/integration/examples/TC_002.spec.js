/// <reference types="cypress" />

import HomePage from '../../elements/pages/HomePage'
import baseFixture from '../../fixtures/baseFixture.json'
import newsletterFixture from '../../fixtures/newletter.json'

describe('Automate Newsletter subscription scenarios', () => {
    // declare the global homepage variable
    let homepage = '';
    let rand = '';

    before(() => {
        homepage = new HomePage();
        homepage.openWebsite(baseFixture.website);
        //generating random text for unique emailId
        rand = eval(newsletterFixture.randomFunction)
    })

    it('validate the default text of the newsletter box', () => {
        homepage.getNewsLetterEmailBox()
            .should('have.attr', 'value', newsletterFixture.defaultText);
    })

    it('validate that user can register with valid email for the newsletter', () => {
        homepage.getNewsLetterEmailBox().clear();
        homepage.getNewsLetterEmailBox().type(rand + newsletterFixture.emailDomain);
        homepage.getSubmitNewsLetterBtn().click();
        homepage.getNewsletterAlert()
            .should('have.text', newsletterFixture.successfulSubscription);
        homepage.getNewsLetterEmailBox()
            .should('have.attr', 'value', newsletterFixture.successMsg)
    })

    it('validate that error message is generated when using duplicate email', () => {
        homepage.getNewsLetterEmailBox().clear();
        homepage.getNewsLetterEmailBox().type(newsletterFixture.subscriptionEmail);
        homepage.getSubmitNewsLetterBtn().click();
        homepage.getNewsletterAlert()
            .should('have.text', newsletterFixture.emailExists);
        homepage.getNewsLetterEmailBox()
            .should('have.attr', 'value', newsletterFixture.emailPresent)
    })

    it('validate that newsletter field considers the leading spaces as invalid input', () => {
        homepage.getNewsLetterEmailBox().clear();
        homepage.getNewsLetterEmailBox().type(newsletterFixture.emailWithLeadingSpaces);
        homepage.getSubmitNewsLetterBtn().click();
        homepage.getNewsletterAlert()
            .should('have.text', newsletterFixture.invalidEmailMsg);
        homepage.getNewsLetterEmailBox()
            .should('have.attr', 'value', newsletterFixture.invalidEmailValue)
    })

    it('validate that newsletter field considers the trailing spaces as invalid input', () => {
        homepage.getNewsLetterEmailBox().clear();
        homepage.getNewsLetterEmailBox().type(newsletterFixture.emailWithTrailingSpaces);
        homepage.getSubmitNewsLetterBtn().click();
        homepage.getNewsletterAlert()
            .should('have.text', newsletterFixture.invalidEmailMsg);
        homepage.getNewsLetterEmailBox()
            .should('have.attr', 'value', newsletterFixture.invalidEmailValue)
    })

    it('validate that user cannot signup to the newsletter when using invalid email', () => {
        homepage.getNewsLetterEmailBox().clear();
        homepage.getNewsLetterEmailBox().type(newsletterFixture.invalidEmail);
        homepage.getSubmitNewsLetterBtn().click();
        homepage.getNewsletterAlert()
            .should('have.text', newsletterFixture.invalidEmailMsg);
        homepage.getNewsLetterEmailBox()
            .should('have.attr', 'value', newsletterFixture.invalidEmailValue)
    })

    it('validate that error message is generated when using blank email', () => {
        homepage.getNewsLetterEmailBox().clear();
        homepage.getNewsLetterEmailBox().type(newsletterFixture.blank);
        homepage.getSubmitNewsLetterBtn().click();
        homepage.getNewsletterAlert()
            .should('have.text', newsletterFixture.invalidEmailMsg);
        homepage.getNewsLetterEmailBox()
            .should('have.attr', 'value', newsletterFixture.invalidEmailValue)
    })
})