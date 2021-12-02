class Element_RegisterPage{
    logoImage(){
        return cy.get("[src='images/banner2.gif']")
    }
     registerTag(){
         return cy.get("[width='77'] > [href='register.php']")
     }
     usernameInput(){
         return cy.get("#email")
     }
     passwordInput(){
         return cy.get("[name='password']")
     }
     rePasswordInput(){
         return cy.get("[name='confirmPassword']")
     }
     submit(){
        return cy.get("[name='submit']")
    }
}
export default Element_RegisterPage