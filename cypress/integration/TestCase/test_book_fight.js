import BookFlight from '../Object/FlightObj'

describe('test book fight', () => {
    const bookflightObj= new BookFlight()
    //Get data from element_book_flight.json
    beforeEach(function (){
        cy.fixture("element_book_flight").then((element) =>{
            this.element=element
        })
    })
    //Get data from data_book_flight.json
    beforeEach(function (){
        cy.fixture("data_book_flight").then((demoData) =>{
            this.demoData=demoData
        })
    })
    beforeEach(function () {
        cy.fixture("array_data_book_flight").then((item) =>{
            this.item=item;
        })
    })
    it('visit The PAGE', () => {
        // Go to http://demo.guru99.com/test/newtours/reservation.php
        //cy.visit("/reservation.php")
        cy.visitHome()
        cy.get('a[href="reservation.php"]').click()
    })
    // skip test case
    it('Book fight not data driven', () => {
        cy.get('td>input[type="image"][name="findFlights"][src="images/continue.gif"]').should('be.visible')
        // BOOK FIGHT TO TRAVEL FROM NEW YORK TO LONDON FROM 6/6 TO 30/12 OPTION: TYPE: ONEWAY CLASS:FIRST
        cy.get('input[name="tripType"]').check('oneway')
        cy.get('select[name="passCount"]').select("2")
        cy.get('select[name="fromPort"]').select("New York")
        cy.get('select[name="fromMonth"]').select("June")
        cy.get('select[name="fromDay"]').select("6")
        cy.get('select[name="toPort"]').select("London")
        cy.get('select[name="toMonth"]').select("12")
        cy.get('select[name="toDay"]').select("30")
        cy.get('input[name="servClass"]').check('First')
        cy.get('select[name="airline"]').select("Unified Airlines")
        cy.get('input[name="findFlights"]').click()
        cy.contains("After flight finder")
        cy.log("success")

    })
    it('Book fight with data driven', function(){
        bookflightObj.visitBookFlight()
        bookflightObj.visible('td>input[type="image"][name="findFlights"][src="images/continue.gif"]')
        //call function from bookflightObj to check radio, select option, submit and verify
        bookflightObj.checkradio(this.element.radio_tripType,this.demoData.tripType)
        bookflightObj.selection(this.element.selecttion_passCount,this.demoData.passCount)
        bookflightObj.selection(this.element.selection_FromPort,this.demoData.fromPort)
        bookflightObj.selection(this.element.selection_FromMonth,this.demoData.fromMonth)
        bookflightObj.selection(this.element.selection_ToPort,this.demoData.toPort)
        bookflightObj.selection(this.element.selection_ToMonth,this.demoData.toMonth)
        bookflightObj.selection(this.element.selection_ToDay,this.demoData.toDay)
        bookflightObj.checkradio(this.element.radio_ServiceClass,this.demoData.serviceClass)
        bookflightObj.selection(this.element.selection_Airline,this.demoData.airLine)
        bookflightObj.submit(this.element.button_submit)
        bookflightObj.verify('font',"After flight finder - No Seats Avaialble")
        bookflightObj.visible('td > a > img[src="images/home.gif"]')
        cy.log("success")
        
        
    });

    it('Book fight with muti data driven', function(){
        //call function from bookflightObj to check radio, select option, submit and verify
        this.item.forEach(element => {
            bookflightObj.visitBookFlight()
            bookflightObj.visible('td>input[type="image"][name="findFlights"][src="images/continue.gif"]')
            bookflightObj.checkradio(this.element.radio_tripType,element.tripType)
            bookflightObj.selection(this.element.selecttion_passCount,element.passCount)
            bookflightObj.selection(this.element.selection_FromPort,element.fromPort)
            bookflightObj.selection(this.element.selection_FromMonth,element.fromMonth)
            bookflightObj.selection(this.element.selection_ToPort,element.toPort)
            bookflightObj.selection(this.element.selection_ToMonth,element.toMonth)
            bookflightObj.selection(this.element.selection_ToDay,element.toDay)
            bookflightObj.checkradio(this.element.radio_ServiceClass,element.serviceClass)
            bookflightObj.selection(this.element.selection_Airline,element.airLine)
            bookflightObj.submit(this.element.button_submit)
            bookflightObj.verify('font',"After flight finder - No Seats Avaialble")
            bookflightObj.visible('td > a > img[src="images/home.gif"]')
            cy.log("success")
        });

        
        
        
    });
})
