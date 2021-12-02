class Element_BookFlightPage {
    tripTypeRadio() {
        return cy.get("input[name='tripType']")
    }
    passCountSelection() {
        return cy.get("select[name='passCount'")
    }
    fromPortsSelection() {
        return cy.get("select[name='fromPort']")
    }
    fromMonthSelection() {
        return cy.get("select[name='fromMonth']")
    }
    fromDaySelection() {
        return cy.get("select[name='fromDay']")
    }
    toPortsSelection() {
        return cy.get("select[name='toPort']")
    }
    toMonthSelection() {
        return cy.get("select[name='toMonth']")
    }
    toDaySelection() {
        return cy.get("select[name='toDay']")
    }
    serviceClassRadio() {
        return cy.get("input[name='servClass']")
    }
    selection_Airline() {
        return cy.get("select[name='airline'")
    }
    bookFlightSubmit() {
        return cy.get("input[name='findFlights'][type='image']")
    }
    afterBookText() {
        return cy.get('font')
    }
    backToHomebutton() {
        return cy.get('td > a > img[src="images/home.gif"]')
    }
}
export default Element_BookFlightPage