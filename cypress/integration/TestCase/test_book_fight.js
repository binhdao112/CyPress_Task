import BookFlight from '../Object/FlightObj'

describe('Test book fight', () => {
    const bookflightObj = new BookFlight()
    //Get data from data_book_flight.json
    beforeEach(function () {
        cy.fixture("data_book_flight").then((demoData) => {
            this.demoData = demoData
        })
        cy.fixture("array_data_book_flight").then((item) => {
            this.item = item;
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
        bookflightObj.visitBookFlight()
        bookflightObj.verifyVisibleBookSubmit()
        //call function from bookflightObj to check radio, select option, submit and verify
        bookflightObj.checkTripTypeRadio("oneway")
        bookflightObj.selectPassCountOption("2")
        bookflightObj.selectFromPortOption("New York")
        bookflightObj.selectFromMonthOption("June")
        bookflightObj.selectFromDayOption("6")
        bookflightObj.selectTOPortOption("London")
        bookflightObj.selectTOMonthOption("12")
        bookflightObj.selectTODayOption("30")
        bookflightObj.checkServiceClassRadio('First')
        bookflightObj.selectAirLineOption("Unified Airlines")
        bookflightObj.submitBookFlight()
        bookflightObj.verifyAfterText()
        bookflightObj.verifyVisibleBackHomebtn()
        cy.screenshot()
        cy.log("success")

    })
    it('Book fight with data driven', function () {
        bookflightObj.visitBookFlight()
        bookflightObj.verifyVisibleBookSubmit()
        //call function from bookflightObj to check radio, select option, submit and verify
        bookflightObj.checkTripTypeRadio(this.demoData.tripType)
        bookflightObj.selectPassCountOption(this.demoData.passCount)
        bookflightObj.selectFromPortOption(this.demoData.fromPort)
        bookflightObj.selectFromMonthOption(this.demoData.fromMonth)
        bookflightObj.selectFromDayOption(this.demoData.fromDay)
        bookflightObj.selectTOPortOption(this.demoData.toPort)
        bookflightObj.selectTOMonthOption(this.demoData.toMonth)
        bookflightObj.selectTODayOption(this.demoData.toDay)
        bookflightObj.checkServiceClassRadio(this.demoData.serviceClass)
        bookflightObj.selectAirLineOption(this.demoData.airLine)
        bookflightObj.submitBookFlight()
        bookflightObj.verifyAfterText()
        bookflightObj.verifyVisibleBackHomebtn()
        cy.screenshot()
        cy.log("success")


    });

    it('Book fight with muti data driven', function () {
        //call function from bookflightObj to check radio, select option, submit and verify
        this.item.forEach(element => {
            bookflightObj.visitBookFlight()
            bookflightObj.verifyVisibleBookSubmit()
            //call function from bookflightObj to check radio, select option, submit and verify
            bookflightObj.checkTripTypeRadio(this.demoData.tripType)
            bookflightObj.selectPassCountOption(this.demoData.passCount)
            bookflightObj.selectFromPortOption(this.demoData.fromPort)
            bookflightObj.selectFromMonthOption(this.demoData.fromMonth)
            bookflightObj.selectFromDayOption(this.demoData.fromDay)
            bookflightObj.selectTOPortOption(this.demoData.toPort)
            bookflightObj.selectTOMonthOption(this.demoData.toMonth)
            bookflightObj.selectTODayOption(this.demoData.toDay)
            bookflightObj.checkServiceClassRadio(this.demoData.serviceClass)
            bookflightObj.selectAirLineOption(this.demoData.airLine)
            bookflightObj.submitBookFlight()
            bookflightObj.verifyAfterText()
            bookflightObj.verifyVisibleBackHomebtn()
            cy.screenshot()
            cy.log("success")
        });




    });
})
