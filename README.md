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

### Running the tests in VS Code via the Playwright extension

For quick and easy execution of tests in VS Code, we recommend to use the [VS Code Playwright extension (`ms-playwright.playwright`)](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright).

Once you have installed the VS Code Playwright test extension, open the *Test* view and click the `Run Tests` button on the top toolbar or the `Run Test` button for a particular test.
It uses the default configuration with chromium as test profile by default.

To run the tests headful, simply enable the checkbox `Show browser` in the Playwright section of the *Test* view.

### Running the tests headless via CLI

To start the tests run `yarn ui-tests`.
This will start the tests in a headless state.

To only run a single test file, the path of a test file can be set with `yarn ui-tests <path-to-file>` or `yarn ui-tests -g "<partial test file name>"`.
See the [Playwright Test command line documentation](https://playwright.dev/docs/intro#command-line).

### Running the tests headful via CLI

If you want to observe the execution of the tests in a browser, use `yarn ui-tests-headful` for all tests or `yarn ui-tests-headful <path-to-file>` to only run a specific test.

### Debugging the tests via the VS Code Playwright extension

To debug Playwright tests, open the *Test* view in VS Code and click the `Debug Tests` button on the top toolbar or the `Debug Test` for a particular test.
It uses the default configuration with chromium as test profile by default.

For more information on debugging, please refer to the [Playwright documentation](https://playwright.dev/docs/debug).

### UI Mode - Watch and Trace Mode

For an advanced test development experience, Playwright provides the so-called *UI Mode*. To enable this, simply add the flag `--ui` to the CLI command.

```bash
yarn ui-tests --ui
```

For more information on the UI mode,  please refer to the [Playwright announcement of the UI mode](https://playwright.dev/docs/release-notes#introducing-ui-mode-preview).

### Test report

To get an exhaustive test report via the Allure framework, first execute the tests and then run

```bash
yarn ui-tests-report
```

This generates an Allure test report and opens it in your default browser.
To only generate the report, you can run `yarn ui-tests-report-generate`.

## Advanced Topics

There are many more features, configuration and command line options from Playwright that can be used.
These range from grouping and annotating tests, further reporters, to visual comparisons, etc.
For more information refer to the [Playwright documentation](https://playwright.dev/docs/intro).
