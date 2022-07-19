# Theia 🎭 Playwright Template

This package uses the [Theia 🎭 Playwright](https://github.com/eclipse-theia/theia/tree/master/examples/playwright) page object model for testing a [Theia](https://github.com/eclipse-theia/theia)-based application.

## Structure of this repository

Your tests should be placed in the folder `tests` and be named `*.test.ts`.
Your custom page objects should go into the folder `page-objects`.
The configuration of playwright is located in the folder `configs`.

## More documentation

- [Getting Started](https://github.com/eclipse-theia/theia/tree/master/examples/playwright/docs/GETTING_STARTED.md)
- [Extensibility](https://github.com/eclipse-theia/theia/tree/master/examples/playwright/docs/EXTENSIBILITY.md)
- [Playwright - GitHub](https://github.com/microsoft/playwright)
- [Playwright - Website](https://playwright.dev)
- [Playwright - Test Runner](https://playwright.dev/docs/intro)
- [Allure test reports](https://github.com/allure-framework/allure2)

## Building

Run `yarn` in the root directory of the repository.

## Executing the tests

### Prerequisites

The Theia application under test already needs to be running.
Please start a Theia application before running the tests.

### Running the tests headless

To start the tests run `yarn ui-tests` in this directory.
This will start the tests in a headless state.
There is also a VS Code task available called `Run all tests`.

To only run a single test file, the path of a test file can be set with `yarn ui-tests <path-to-file>` or `yarn ui-tests -g "<partial test file name>"`.
Please note that you can't use the file extension `.ts` in the expression used in `<path-to-file>`.
Either drop the file extension entirely, or use `.js` instead.
See the [Playwright Test command line documentation](https://playwright.dev/docs/intro#command-line).

#### Examples

```bash
yarn ui-tests # run all tests
yarn ui-tests tests/ # run all test cases in folder tests
yarn ui-tests theia-app # run all test cases that contain theia-app in their path name
```

### Running the tests headful, reporting and debugging

Please check for additional scripts in your `package.json` in order to run tests in headful mode and to generate reports.

To debug a test, open the test file in the code editor and run the `Debug selected test file` configuration inside VS Code.
