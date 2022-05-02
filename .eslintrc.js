/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    extends: [
        './configs/base.playwright.eslintrc.json',
        './configs/warnings.eslintrc.json',
        './configs/errors.eslintrc.json',
        './configs/ui-tests.eslintrc.json',
        './configs/ui-tests.playwright.eslintrc.json'
    ],
    ignorePatterns: [
        '**/{node_modules,lib}'
    ],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: 'tsconfig.json'
    }
};
