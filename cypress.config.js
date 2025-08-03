const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  pageLoadTimeout: 60000,
  chromeWebSecurity: false,

  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports/html",
    overwrite: false,
    html: true,           
    json: true,
    embeddedScreenshots: true, 
    inlineAssets: true          
  },

  e2e: {
    baseUrl: "https://automationexercise.com",

    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      on("file:preprocessor", cucumber());

      return config;
    },

    specPattern: "cypress/e2e/features/**/*.feature",
    excludeSpecPattern: "**/*.{js,ts}",
    screenshotsFolder: "cypress/screenshots",
  },
});
