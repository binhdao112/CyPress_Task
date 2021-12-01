class Element_LogIn{
    usernameInput(){
        return cy.get("input[name='userName']")
    }
     passwordInput(){
         return cy.get("input[name='password']")
     }
     loginSubmit(){
         return cy.get("input[name='submit']")
     }
     signoffButton(){
         return cy.get('td>a[href="index.php')
     }
     ThankText(){
         return cy.get('font > b')
     }
     SuccessText(){
         return cy.get('h3')
     }
     FailText(){
         return cy.get('td>span')
     }
}
export default Element_LogIn