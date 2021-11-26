class Login{
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
}
export default Login