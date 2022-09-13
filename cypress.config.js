const { defineConfig } = require('cypress')

module.exports = defineConfig({
    chromeWebSecurity: false,
    retries: 0,
    defaultCommandTimeout: 5000,
    watchForFileChanges: false,
    videosFolder: 'tests/cypress/videos',
    screenshotsFolder: 'tests/cypress/screenshots',
    fixturesFolder: 'tests/cypress/fixture',
    e2e: {
        setupNodeEvents(on, config) {
            return require('./tests/cypress/plugins/index.js')(on, config)
        },
        baseUrl: 'http://laragone.test',
        specPattern: 'tests/cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
        supportFile: 'tests/cypress/support/index.js',
    },
    component: {
        devServer: {
            framework: "vue",
            bundler: "vite",
        },

        viewportWidth: 640,
        viewportHeight: 480,
        specPattern: "tests/cypress/component/**/*.cy.{js,jsx,ts,tsx}",
        supportFile: "tests/cypress/support/component.js",
        indexHtmlFile: "tests/cypress/support/component-index.html"
    },
})
