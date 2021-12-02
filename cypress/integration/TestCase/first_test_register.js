import RegisterObj from '../Object/RegisterObj'
describe('Verify Register Account', () => {
    const registerObj = new RegisterObj()

    //get data
    beforeEach(function () {
        cy.fixture("suite_data_login_register").then((item) => {
            this.demoData = item.data.data_simple;
            this.mutiDemoDataSuccess = item.data.muti_data_success
        })
    })
    it('Visit The Page ', function () {
        registerObj.visitRegisterPage()
        // cy.visitHome()
        // cy.get(this.demoElement.logo).should('be.visible');
    })


    // Test Case
    it('Test Case 1: Register With Valid User', function () {
        registerObj.enterUsername(this.demoData.valid_user)
        registerObj.verifyUsername(this.demoData.valid_user)
        registerObj.enterPassword(this.demoData.valid_pass)
        registerObj.verifyPassword(this.demoData.valid_pass)
        registerObj.enterRePassword(this.demoData.valid_re_pass);
        registerObj.verifyRePassword(this.demoData.valid_re_pass)
        registerObj.submitRegister()
        registerObj.verifyAfterRegister(this.demoData.valid_user)
        //cy.get(this.demoElement.submit_btn).click();
        //cy.contains(this.demoData.valid_user)
    })
    it('Register with muti data', function () {
        this.mutiDemoDataSuccess.forEach(element => {
            registerObj.visitRegisterPage()
            registerObj.enterUsername(element.valid_user);
            registerObj.verifyUsername(element.valid_user)
            registerObj.enterPassword(element.valid_pass)
            registerObj.verifyPassword(element.valid_pass)
            registerObj.enterRePassword(element.valid_re_pass);
            registerObj.verifyRePassword(element.valid_re_pass)
            registerObj.submitRegister()
            registerObj.verifyAfterRegister(element.valid_user)

        });

    });
    // it('Test Case 2: Register With Empty User',function () {
    //     cy.get(this.demoElement.reg_btn).click();
    //     cy.get(this.demoElement.user).type(this.demoData.valid_user).should('have.value', this.demoData.valid_user);
    //     cy.get(this.demoElement.pass).type(this.demoData.valid_pass);
    //     cy.get(this.demoElement.re_pass).type(this.demoData.valid_re_pass);
    //     cy.get(this.demoElement.submit_btn).click();
    //     cy.contains(this.demoData.user_mess)
    // })

});
