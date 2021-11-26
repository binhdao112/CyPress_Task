
describe('Verify Register Account', () => {

    beforeEach(function () {
        cy.fixture("element_register").then((demoElement) => {
            this.demoElement = demoElement
        })
    })

    beforeEach(function () {
        cy.fixture("data_register_login").then((demoData) => {
            this.demoData = demoData
        })
    })

    //get data
    beforeEach(function () {
        cy.fixture("array_data_login_register").then((item) =>{
            this.item=item;
        })
    })
    it('Visit The Page ', function () {
        cy.visitHome()
        cy.get(this.demoElement.logo).should('be.visible');
    })
    

    // Test Case
    it('Test Case 1: Register With Valid User', function () {
        cy.get(this.demoElement.reg_btn).click();
        cy.get(this.demoElement.user).type(this.demoData.valid_user).should('have.value', this.demoData.valid_user);
        cy.get(this.demoElement.pass).type(this.demoData.valid_pass);
        cy.get(this.demoElement.re_pass).type(this.demoData.valid_re_pass);
        cy.get(this.demoElement.submit_btn).click();
        cy.contains(this.demoData.valid_user)
    })
    it('Register with muti data', function () {
        this.item.forEach(element => {
            cy.visitHome()
            cy.get(this.demoElement.logo).should('be.visible');
            cy.get(this.demoElement.reg_btn).click();
            cy.get(this.demoElement.user).type(element.valid_user).should('have.value', element.valid_user);
            cy.get(this.demoElement.pass).type(element.valid_pass);
            cy.get(this.demoElement.re_pass).type(element.valid_re_pass);
            cy.get(this.demoElement.submit_btn).click();
            cy.contains(element.valid_user)
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
