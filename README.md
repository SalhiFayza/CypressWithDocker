# ✅ Cypress 🌲 + Cucumber 🥒 + Docker 🐬 + GitHub Actions

End-to-end (E2E) test automation framework using:

- **Cypress**
- **Cucumber** (`cypress-cucumber-preprocessor@4.3.1`)
- **Mochawesome Reporter** (HTML/JSON test reports with screenshots)
- **Docker** (to run Cypress in containerized environments)
- **GitHub Actions** (for CI/CD and artifact uploads)

---

## 📁 Project Structure

```
.
├── cypress/
│ ├── e2e/
│ │ └── features/
│ │ ├── login.feature
│ │ └── step_definitions/
│ │ └── loginSteps.js
│ ├── plugins/
│ │ └── index.js
│ ├── support/
│ │ └── index.js
│ ├── reports/
│ │ └── html/
│ ├── screenshots/
│ └── videos/
├── cypress.config.js
├── Dockerfile
├── package.json
└── .github/
└── workflows/
└── cypress-tests.yml
```

---

## 📦 Installation

```bash
npm install
```

---

## 🚀 Usage

### Open Cypress Test Runner (GUI)
```bash
npm run cy:open
```

### Run Cypress Tests (Headless)
```bash
npm run cy:run
```

---

## 🐳 Docker

### Build Docker Image
```bash
docker build -t cypress-tests .
```

### Run Cypress Tests Inside Docker
```bash
docker run --rm -v $PWD:/app -w /app cypress-tests
```

---

## ⚙️ Cypress Configuration

### `cypress.config.js`

```js
module.exports = {
  e2e: {
    baseUrl: "https://automationexercise.com",
    specPattern: "cypress/e2e/features/**/*.feature",
    supportFile: "cypress/support/index.js",
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos"
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports/html",
    overwrite: false,
    html: true,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true
  },
  chromeWebSecurity: false,
  pageLoadTimeout: 60000
};
```

---

## 🔌 Plugin Setup

### `cypress/plugins/index.js`

```js
const cucumber = require('cypress-cucumber-preprocessor').default;
const mochawesome = require('cypress-mochawesome-reporter/plugin');

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
  mochawesome(on);
  return config;
};
```

---

### `cypress/support/index.js`

```js
require('cypress-mochawesome-reporter/register');
```

---

## ✍️ Sample Test

### `cypress/e2e/features/login.feature`

```gherkin
Feature: Login Page

  Scenario: Visit homepage
    Given I visit the home page
    Then I should see the title
```

### `cypress/e2e/features/step_definitions/loginSteps.js`

```js
const { Given, Then } = require("cypress-cucumber-preprocessor/steps");

Given("I visit the home page", () => {
  cy.visit("/");
});

Then("I should see the title", () => {
  cy.title().should("include", "Automation Exercise");
});
```

---

## 🧪 GitHub Actions CI

### `.github/workflows/cypress-tests.yml`

```yaml
name: Cypress E2E Tests

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  cypress-run:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm install

      - name: Run Cypress tests (headless)
        run: npx cypress run

      - name: Upload test screenshots
        if: failure() || success()
        uses: actions/upload-artifact@v4
        with:
          name: cypress-screenshots
          path: cypress/screenshots

      - name: Upload Mochawesome HTML reports
        if: failure() || success()
        uses: actions/upload-artifact@v4
        with:
          name: mochawesome-report
          path: cypress/reports/html
```

---

## 🐋 Dockerfile

```Dockerfile
FROM cypress/browsers:node-20.11.0-chrome-124-ff-126

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV CYPRESS_BASE_URL=http://localhost:3000

CMD ["npx", "cypress", "run"]
```

---

## 📦 package.json

```json
{
  "name": "testpayment",
  "version": "1.0.0",
  "scripts": {
    "cy:open": "npx cypress open",
    "cy:run": "npx cypress run"
  },
  "devDependencies": {
    "cypress": "^14.5.0",
    "cypress-cucumber-preprocessor": "^4.3.1",
    "cypress-mochawesome-reporter": "^3.8.1"
  },
  "cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true,
    "stepDefinitions": "cypress/e2e/features/step_definitions"
  }
}
```

---

## 📄 License

ISC License

---

## 👤 Author

**Salhi Fayza 🥇**
