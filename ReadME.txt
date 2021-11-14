Cypress is the new standard in front-end testing that every developer and QA engineer needs.It's programmer. Developer-friendly. 

Please use the link docs.cypress.io to know more on how the cypress works.

To open cypress, file navigate to node_modules/.bin and use command cypress open

In order to execute the testcases, it can be done in two ways:

1.Using Command line in folder location node_modules\.bin :

cypress run 

the above command will run all the tests 

If specific js file needs to be run individually use cmd cypress run --spec "Path of specfile.js"

2. We can use cypress dashboard, in terminal enter cypress open and it will open the dashboard and list all the tests in the project

Now select the desired browser and click Run All tests OR click on a individual tests to run it.

Note: By Default Cypress always runs in headless electron browser when triggered in command line. 

In order to get headed browser via cmd use command cypress run --headed
In order to run the tests in specific browser via terminal use command cypress run --browser chrome

Generating cucumber-report: “outputFolder”: “cypress/cucumber-json”,

command: node cucumber-html-report.js