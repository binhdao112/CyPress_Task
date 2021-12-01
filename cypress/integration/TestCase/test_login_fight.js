import Login from '../Object/LoginObj'
describe('Test login', () => {
    const loginObj=new Login()
    
    beforeEach(function (){
        //Get data from data_register_login.json
        cy.fixture("data_register_login").then((demoData) => {
            this.demoData= demoData;
        })
        //Get data from array_data_register_login.json
        cy.fixture("array_data_login_register").then((item) =>{
            this.demoDataSuccess=item.data_success
            this.demoDataFail=item.data_fail
        })
    })
    it('Visit login page', () => {
        // Go to http://demo.guru99.com/test/newtours/
        // commands add in command.js in support
        loginObj.visitLogin()
        
    })
    // skip test case
    it('Login not data driven', () => {
        // fill input
        loginObj.visitLogin()
        loginObj.verifyVisibleLogin()
        loginObj.verifyEmtyUsernameInput()
        loginObj.verifyEmtyPasswordInput()
        // call function from loginObj to fill username, password, submit and verify 
        //loginObj.fill(this.element.input_username,this.demoData.valid_user)
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
        loginObj.visitLogin()
        loginObj.verifyVisibleLogin()
        loginObj.verifyEmtyUsernameInput()
        loginObj.verifyEmtyPasswordInput()
        // call function from loginObj to fill username, password, submit and verify 
        //loginObj.fill(this.element.input_username,this.demoData.valid_user)
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
        this.demoDataSuccess.forEach(element => {
        loginObj.visitLogin()
        loginObj.verifyVisibleLogin()
        loginObj.verifyEmtyUsernameInput()
        loginObj.verifyEmtyPasswordInput()
        // call function from loginObj to fill username, password, submit and verify 
        //loginObj.fill(this.element.input_username,this.demoData.valid_user)
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
        this.demoDataFail.forEach(element => {
        loginObj.visitLogin()
        loginObj.verifyVisibleLogin()
        loginObj.verifyEmtyUsernameInput()
        loginObj.verifyEmtyPasswordInput()
        // call function from loginObj to fill username, password, submit and verify 
        //loginObj.fill(this.element.input_username,this.demoData.valid_user)
        loginObj.enterUsername(element.valid_user)
        loginObj.enterPassword(element.valid_pass)
        loginObj.verifyNOTEmtyUsernameInput()
        loginObj.verifyNOTEmtyPasswordInput()
        loginObj.submitLogin()
        loginObj.verifyTextLoginFail()
            
        });

    });
    it('Login with emty user and password', function() {
        loginObj.visitLogin()
        loginObj.verifyVisibleLogin()
        loginObj.verifyEmtyUsernameInput()
        loginObj.verifyEmtyPasswordInput()
        // call function from loginObj to fill username, password, submit and verify 
        //loginObj.fill(this.element.input_username,this.demoData.valid_user)
        loginObj.submitLogin()
        loginObj.verifyTextLoginSuccess()
        loginObj.verifyTextLoginThank()
        loginObj.verifyTextSignOff()
    });
})