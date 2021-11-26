import Login from '../Object/LoginObj'
describe('', () => {
    const loginObj=new Login()
    //Get data from element_login.json
    beforeEach(function (){
        cy.fixture("element_login").then((element) =>{
            this.element=element
        })
    })
    //Get data from data_register_login.json
    beforeEach(function () {
        cy.fixture("data_register_login").then((demoData) => {
            this.demoData = demoData
        })
    })
    beforeEach(function () {
        cy.fixture("array_data_login_register").then((item) =>{
            this.item=item;
        })
    })
    it('visit login page', () => {
        // Go to http://demo.guru99.com/test/newtours/
        // commands add in command.js in support
        cy.visitHome()
        cy.get('a[href="login.php"]').click()
        
    })
    // skip test case
    it('Login not data driven', () => {
        // fill input
        loginObj.checkemty("input[name='userName']")
        loginObj.checkemty("input[name='password']")
        cy.get('input[type="submit"]').should('be.visible')
        cy.get('input[name="userName"]').type("tutorial")
        cy.get('input[name="password"]').type("Test@123")
        loginObj.checkNOTemty("input[name='userName']")
        loginObj.checkNOTemty("input[name='password']")
        //submit form
        cy.get('input[name="submit"]').click()
        //verify
        cy.get('h3').should("contain","Login Successfully")
        loginObj.verify("font > b","Thank you for Loggin.")
        loginObj.verify('td>a[href="index.php"]',"SIGN-OFF")
    });
    it('Login with data driven', function() {
        cy.visitHome()
        cy.get('a[href="login.php"]').click()
        cy.get('input[type="submit"]').should('be.visible')
        loginObj.checkemty(this.element.input_pass)
        loginObj.checkemty(this.element.input_username)
        // call function from loginObj to fill username, password, submit and verify 
        loginObj.fill(this.element.input_username,this.demoData.valid_user)
        loginObj.fill(this.element.input_pass,this.demoData.valid_pass)
        loginObj.checkNOTemty(this.element.input_pass)
        loginObj.checkNOTemty(this.element.input_username)
        loginObj.submit(this.element.submit_login)
        loginObj.verify("h3","Login Successfully")
        loginObj.verify("font > b","Thank you for Loggin.")
        loginObj.verify('td>a[href="index.php"]',"SIGN-OFF")
    });
    it('Login surcess with muti data driven', function() {
        this.item.forEach(element => {
            cy.visitHome()
            cy.get('a[href="login.php"]').click()
            cy.get('input[type="submit"]').should('be.visible')
            loginObj.checkemty(this.element.input_username)
            loginObj.checkemty(this.element.input_pass)
            loginObj.fill(this.element.input_username,element.valid_user)
            loginObj.fill(this.element.input_pass,element.valid_pass)
            loginObj.checkNOTemty(this.element.input_pass)
            loginObj.checkNOTemty(this.element.input_username)
            loginObj.submit(this.element.submit_login)
            loginObj.verify("h3","Login Successfully")
            loginObj.verify("font > b","Thank you for Loggin.")
            loginObj.verify('td>a[href="index.php"]',"SIGN-OFF")
        });

    });
    it('Login fail with muti data driven', function() {
        this.item.forEach(element => {
            cy.visitHome()
            cy.get('a[href="login.php"]').click()
            loginObj.checkemty(this.element.input_pass)
            loginObj.checkemty(this.element.input_username)
            cy.get('input[type="submit"]').should('be.visible')
            loginObj.fill(this.element.input_username,element.valid_user)
            loginObj.fill(this.element.input_pass,'12132')
            loginObj.submit(this.element.submit_login)
            loginObj.verify("td>span","Enter your userName and password correct")
            
        });

    });
})