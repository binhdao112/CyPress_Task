import Element_RegisterPage from "./Element/Element_RegisterPage";
class RegisterObj{
    constructor(){
        this.elementRegisterPage= new Element_RegisterPage();
    }
    visitRegisterPage(){
        cy.visit("/")
        this.elementRegisterPage.logoImage().should('be.visible')
        this.elementRegisterPage.registerTag().click()
    }
    enterUsername(value){
        this.elementRegisterPage.usernameInput().type(value)
        return this
    }
    verifyUsername(value){
        this.elementRegisterPage.usernameInput().should('have.value', value);
        return this
    }
    enterPassword(value){
        this.elementRegisterPage.passwordInput().type(value)
        return this
    }
    verifyPassword(value){
        this.elementRegisterPage.passwordInput().should('have.value', value)
        return this
    }
    enterRePassword(value){
        this.elementRegisterPage.rePasswordInput().type(value)
        return this
    }
    verifyRePassword(value){
        this.elementRegisterPage.rePasswordInput().should('have.value',value)
        return this
    }
    submitRegister(){
        this.elementRegisterPage.submit().click();
        return this
    }
    verifyAfterRegister(value){
        cy.contains(value)
        return this
    }



}
export default RegisterObj