class Login{
visitLogin(){
    cy.visitHome()
    cy.get('a[href="login.php"]').click()
}
fill(element,value){
    const field=cy.get(element).type(value)
    return this
}
submit(element){
    const button=cy.get(element)
    button.click()
}
verify(element,value){
    const field=cy.get(element)
    field.should('contain.text',value)
}
checkemty(element){
    const field=cy.get(element)
    field.should('have.value','')
}
checkNOTemty(element){
    const field=cy.get(element)
    field.should('not.have.value','')
}
visible(element){
    const field=cy.get(element)
    field.should('be.visible')
}
}
export default Login