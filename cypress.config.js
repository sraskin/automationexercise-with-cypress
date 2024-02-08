const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "niztax",
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Automation Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    code: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    // Configure your E2E tests here
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    'env': {
      baseUrl:"https://automationexercise.com",
      disableTestIsolation: false,
    },
    //to run the entire folder in interactive mode
    experimentalRunAllSpecs: true,
    testIsolation: Cypress.env('disableTestIsolation') ? false : true
  },
  pageLoadTimeout: 80000,
  watchForFileChanges: false,
  video: false,
  screenshots: false,
  headless: true,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  viewportWidth: 1320,
  viewportHeight: 1080,
})