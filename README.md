# AutomationPracticeCypress

# Steps to run this project at your local system?

## clone this repo to a local directory
git@github.com:<<your-username>>/automationpracticecypress.git

## cd into the cloned repo
cd Axelerant

## install the node_modules
npm install

## To run the tests in Command Line (CLI) and headless mode (default electron browser)
npm run test

## Crossbrowsers 
## To run the tests in Firefox (supports Firefox 72 or higher)
npm run test-firefox

## To run the tests in Chrome
npm run test-chrome

## Test Results - Reports
cypress/reports/mochareports/report.html (Open with any browser)

## Test Results - Videos
cypress/videos/examples

## Successful Test Report
![Alt text](successfulreportsnapshot.png?raw=true "Successful Report Snapshot")

---
**NOTE**
The automation scenario found bugs, hence "TC_003.spec.js" is failed with custom error thrown to the user.

---

## Page to Automate
http://automationpractice.com/

## Assumptions
Data on the site is static

## Automation Scenario's covered
1. Navigate to multiple pages of the website and automate verification of the header and footer.
2. Automate Newsletter subscription scenarios. The newsletter subscription is placed in the footer.
3. Automate Women > Dresses > Summer Dresses listing page
    - Apply any one available filter and verify the results
    - Apply sorting options - Price and Product name and verify the results
4. Verify the checkout journey by adding any product to the cart.