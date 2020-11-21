# AutomationPracticeCypress
Project to automate the website "http://automationpractice.com/" using cypress.io and javascript and implemented using Page-Objects design pattern

## Steps to run this project at your local system

## Step-1: clone this repo to a local directory
- "with ssl" -->
git@github.com:suyashnatural/automationpracticecypress.git

- "with https" -->
https://github.com/suyashnatural/automationpracticecypress.git

- "with github cli" -->
gh repo clone suyashnatural/automationpracticecypress

## Step-2: cd into the cloned repo
cd automationpracticscypress

## Step-3 : Install Cypress
[Follow these instructions to install cypress](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements)

## Step-4: install the node_modules
npm install

## Step-5: To run the tests in Command Line (CLI) and headless mode (default electron browser)
npm run test

## Crossbrowsers 
## To run the tests in Firefox (supports Firefox 72 or higher)
npm run test-firefox

## To run the tests in Chrome
npm run test-chrome

## Step-6: Test Results - Reports
cypress/reports/mochareports/report.html (Open with any browser)

## Test Results - Videos
cypress/videos/examples

## Successful Test Report
![Alt text](successfulreportsnapshot.png?raw=true "Successful Test Report Snapshot")

---
**NOTE:**
The automation scenarios found bugs, hence "TC_003.spec.js" is failed with custom error thrown to the user.

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