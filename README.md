# Test booking flight and login with CyPress
Setup Enviroment:
--------------
* Install NodeJS in [NodeJS Home](https://nodejs.org/)

* In Terminal, use `npm install` to setup Cypress and dependencies

Open and Start test with Cypress:
---------------
* In terminal, use `npm run test` or `npx cypress open` to start CYPRESS ***(:pray::pray:The first time start Cypess can error "Cypress verification timed out.",:fist_right::fist_right: try again, from second time Cypress open normal)*** 


* In UI Cypress, choose **[Running intergration tests]** to start all test or Choose file .js in TestCase  to start only test are selected.



![image](https://user-images.githubusercontent.com/54032190/143527129-0a4b0f16-e5ef-4802-9c65-7c89f02e7743.png)

* In terminal, user `npx cypress run` to run all test with handle mode
* You can change brower in handle mode by using `npx cypress run --browser [brower name]`[with brower name is name brower(chrome, edge, firefox) installed in your system] or using `npm run cypress:run:[brower name]`
  
  **Ex: `npx cypress run --brower chrome` or `npm run cypress:run:chrome`**
  
  You can see them in [Launching Browsers](https://docs.cypress.io/guides/guides/launching-browsers#Browsers).

HTML Report
---------------
* In terminal, use `npx cypress run` to run all test case and create html report 
* You can see report by open file index in ***cypress/reports/***
* In UI in HTML report Cypress:
![image](https://user-images.githubusercontent.com/54032190/144001156-67b41673-f431-473c-8e15-109b090ced24.png)

you can see and apply HTML Report in [HTMP Report CyPress](https://docs.cypress.io/guides/tooling/reporters#Merging-reports-across-spec-files).

Allure Reports
---------------
* In Terminal, use `npm run cy:run` or `npx cypress run --env allure=true` to run all test and create Allure-results
* In terminal, use `npm run posttest` or `npm run allure:report` to generate Allure-reports
* In terminal, use `npm run allure:clear` to clear Allure exist in your System
* UI of Allure report:
![image](https://user-images.githubusercontent.com/54032190/145239429-c8303f8c-88a4-48b5-8f76-5b2c70101a01.png)
you can see and apply Allure Report in Cypress in [Cypress Allure Report](https://github.com/Shelex/cypress-allure-plugin).
