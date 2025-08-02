const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
    pageLoadTimeout: 60000,
  chromeWebSecurity: false,

  e2e: {
          baseUrl:'https://automationexercise.com',

    setupNodeEvents(on, config) {
      screenshotOnRunFailure = true;
      require('cypress-mochawesome-reporter/plugin')(on),
        // implement node event listeners here
        on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/features/**/*.feature",
    excludeSpecPattern: '**/*.{js,ts}',

  },


});
