This repository contains an Application and an automated UI testing project Application along with unit test cases - It is a Web application,developed with Angular 7, to show case the earthquake features across the globe using google map, UI testing- Its a UI automated testing application running on Selenium server to run the test scripts using cucumber and nightwatch. Unit test cases written using Jasmine and run through Karma.

Steps to run project and UI testing:

"ng serve" command can use to run the application.

"ng test" command can use to run the unit test cases.

Prerequisite for UI Testing run:

Chrome driver for selenium should be there in lib folder based upon chrome version on target machine.

"npm run e2e-test -- features/earthquakehome.feature" command can be used to run UI Testing project.