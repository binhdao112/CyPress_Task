import Element_BookFlightPage from './Element/Element_BookFlightPage';
class BookFlight{
    constructor(){
        this.elementBookPage=new Element_BookFlightPage()
    }
visitBookFlight(){
    cy.visitHome()
    cy.get('a[href="reservation.php"]').click()      
}
checkTripTypeRadio(value){
    this.elementBookPage.tripTypeRadio().check(value)
    return this
}
selectPassCountOption(value){
    this.elementBookPage.passCountSelection().select(value)
    return this
}
selectFromPortOption(value){
    this.elementBookPage.fromPortsSelection().select(value)
    return this
}
selectFromMonthOption(value){
    this.elementBookPage.fromMonthSelection().select(value)
    return this
}
selectFromDayOption(value){
    this.elementBookPage.fromDaySelection().select(value)
    return this
}

selectTOPortOption(value){
    this.elementBookPage.toPortsSelection().select(value)
    return this
}
selectTOMonthOption(value){
    this.elementBookPage.toMonthSelection().select(value)
    return this
}
selectTODayOption(value){
    this.elementBookPage.toDaySelection().select(value)
    return this
}
checkServiceClassRadio(value){
    this.elementBookPage.serviceClassRadio().check(value)
    return this
}
selectAirLineOption(value){
    this.elementBookPage.selection_Airline().select(value)
    return this
}
submitBookFlight(){
    this.elementBookPage.bookFlightSubmit().click()
    return this
}
verifyAfterText(){
    this.elementBookPage.afterBookText().should('contain.text',"After flight finder - No Seats Avaialble")
    return this
}
verifyVisibleBackHomebtn(){
    this.elementBookPage.backToHomebutton().should('be.visible')
    return this
}
verifyVisibleBookSubmit(){
    this.elementBookPage.bookFlightSubmit().should('be.visible')
    return this
}

}
export default BookFlight