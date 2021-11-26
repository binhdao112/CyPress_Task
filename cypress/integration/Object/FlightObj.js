class BookFlight{
visitBookFlight(){
    cy.visitHome()
    cy.get('a[href="reservation.php"]').click()      
}
checkradio(element,value){
    const checkbox=cy.get(element)
    checkbox.check(value)
    return this
}
selection(element,value){
    const checkbox=cy.get(element)
    checkbox.select(value)
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
visible(element){
    const field=cy.get(element)
    field.should('be.visible')
}
}
export default BookFlight