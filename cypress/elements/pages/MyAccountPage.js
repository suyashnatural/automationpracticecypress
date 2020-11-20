import HomePage from "./HomePage"

export default class MyAccountPage {

    getHomePageLink() {
        return cy.get("img[alt='My Store']")
    }

    getSignOutBtn() {
        return cy.get(".logout")
    }

    navigateToHomePage() {
        cy.log('navigating to homepage')
        this.getHomePageLink().click()
        const homePage = new HomePage()
        return homePage
    }
}