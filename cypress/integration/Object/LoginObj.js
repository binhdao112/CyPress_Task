import Login_Element from './Element/Element_LogIn';
class Login {
    constructor(){
        this.elementpage= new Login_Element()
    }
    visitLogin() {
        cy.visitHome()
        cy.get('a[href="login.php"]').click()
    }
    enterUsername(value) {
        this.elementpage.usernameInput().type(value);
        return this
    }
    enterPassword(value) {
        this.elementpage.passwordInput().type(value);
        return this
    }
    submitLogin(){
        this.elementpage.loginSubmit().click();
        return this
    }
    verifyTextLoginSuccess(){
        this.elementpage.SuccessText().should('contain.text',"Login Successfully")
        return this
    }
    verifyTextLoginThank(){
        this.elementpage.ThankText().should('contain.text',"Thank you for Loggin.")
        return this
    }
    verifyTextSignOff(){
        this.elementpage.signoffButton().should('contain.text',"SIGN-OFF")
        return this
    }
    verifyEmtyUsernameInput() {
        this.elementpage.usernameInput().should('have.value','')
        return this
    }
    verifyNOTEmtyUsernameInput(element) {
        this.elementpage.usernameInput().should('not.have.value', '')
        return this
    }
    verifyEmtyPasswordInput() {
        this.elementpage.passwordInput().should('have.value','')
        return this
    }
    verifyNOTEmtyPasswordInput(element) {
        this.elementpage.passwordInput().should('not.have.value', '')
        return this
    }
    verifyVisibleLogin(){
        this.elementpage.loginSubmit().should('be.visible')
        return this
    }
    verifyTextLoginFail(){
        this.elementpage.FailText().should('contain.text',"Enter your userName and password correct")
        return this
    }
}
export default Login