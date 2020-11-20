import MyAccountPage from "./MyAccountPage"
import ShoppingAddressPage from "./ShoppingAddressPage"

export default class AuthenticationPage {

    getEmailAddress() {
        return cy.get("#email")
    }

    getPassword() {
        return cy.get("#passwd")
    }

    getSignInBtn() {
        return cy.get("#SubmitLogin")
    }

    signIntoApplication(username, password) {
        cy.log('signing into the application')
        this.getEmailAddress().type(username)
        this.getPassword().type(password)
        this.getSignInBtn().click()
        const shoppingPage = new ShoppingAddressPage();
        return shoppingPage
    }
}