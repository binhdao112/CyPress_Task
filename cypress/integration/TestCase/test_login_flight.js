import Login from '../Object/LoginObj'
describe('Test login', () => {
    const loginObj=new Login()
    
    beforeEach(function (){
        //Get data from suite_data_register_login.json
        cy.fixture("suite_data_login_register").then((item) =>{
            this.demoData=item.data.data_simple
            this.mutiDemoDataSuccess=item.data.muti_data_success
            this.mutiDemoDataFail=item.data.muti_data_fail
        })
    })
    afterEach(() => {
        cy.log("Test success")
        cy.screenshot()
    });
    it('Visit login page', () => {
        loginObj.visitLogin()
        
    })
    // skip test case
    it('Login not data driven', () => {
        // call function from loginObj to fill username, password, submit and verify 
        loginObj.visitLogin()
        loginObj.verifyVisibleLogin()
        loginObj.verifyEmtyUsernameInput()
        loginObj.verifyEmtyPasswordInput()
        loginObj.enterUsername("tutorial")
        loginObj.enterPassword("Test@123")
        loginObj.verifyNOTEmtyUsernameInput()
        loginObj.verifyNOTEmtyPasswordInput()
        loginObj.submitLogin()
        loginObj.verifyTextLoginSuccess()
        loginObj.verifyTextLoginThank()
        loginObj.verifyTextSignOff()
    });
    it('Login with data driven', function() {
        // call function from loginObj to fill username, password, submit and verify 
        loginObj.visitLogin()
        loginObj.verifyVisibleLogin()
        loginObj.verifyEmtyUsernameInput()
        loginObj.verifyEmtyPasswordInput()
        loginObj.enterUsername(this.demoData.valid_user)
        loginObj.enterPassword(this.demoData.valid_pass)
        loginObj.verifyNOTEmtyUsernameInput()
        loginObj.verifyNOTEmtyPasswordInput()
        loginObj.submitLogin()
        loginObj.verifyTextLoginSuccess()
        loginObj.verifyTextLoginThank()
        loginObj.verifyTextSignOff()
    });
    it('Login surcess with muti data driven', function() {
        this.mutiDemoDataSuccess.forEach(element => {
        // call function from loginObj to fill username, password, submit and verify 
        loginObj.visitLogin()
        loginObj.verifyVisibleLogin()
        loginObj.verifyEmtyUsernameInput()
        loginObj.verifyEmtyPasswordInput()
        loginObj.enterUsername(this.demoData.valid_user)
        loginObj.enterPassword(this.demoData.valid_pass)
        loginObj.verifyNOTEmtyUsernameInput()
        loginObj.verifyNOTEmtyPasswordInput()
        loginObj.submitLogin()
        loginObj.verifyTextLoginSuccess()
        loginObj.verifyTextLoginThank()
        loginObj.verifyTextSignOff()
        });

    });
    it('Login fail with muti data driven', function() {
        cy.log(this.demoDataFail)
        this.mutiDemoDataFail.forEach(element => {
        // call function from loginObj to fill username, password, submit and verify 
        loginObj.visitLogin()
        loginObj.verifyVisibleLogin()
        loginObj.verifyEmtyUsernameInput()
        loginObj.verifyEmtyPasswordInput()
        loginObj.enterUsername(element.valid_user)
        loginObj.enterPassword(element.valid_pass)
        loginObj.verifyNOTEmtyUsernameInput()
        loginObj.verifyNOTEmtyPasswordInput()
        loginObj.submitLogin()
        loginObj.verifyTextLoginFail()
            
        });

    });
    it('Login with emty user and password', function() {
        // call function from loginObj to fill username, password, submit and verify 
        loginObj.visitLogin()
        loginObj.verifyVisibleLogin()
        loginObj.verifyEmtyUsernameInput()
        loginObj.verifyEmtyPasswordInput()
        loginObj.submitLogin()
        loginObj.verifyTextLoginSuccess()
        loginObj.verifyTextLoginThank()
        loginObj.verifyTextSignOff()
    });
})