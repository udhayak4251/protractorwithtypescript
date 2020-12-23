// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter, StacktraceOption } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    "feature/*.feature",
  ],
  capabilities: {
    browserName: 'chrome'
  },
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  directConnect: true,
  framework: 'custom',
  cucumberOpts: {
    // require step definitions
    require: [
      'stepdefinition/*.ts' // accepts a glob
    ]
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
  }
};