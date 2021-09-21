# Open weather map cypress tests

![Tests](https://github.com/github/docs/actions/workflows/run-tests.yml/badge.svg)

This project is written using Cypress. For the best coding experience and correct style check please use `Visual Studio Code` to review.

The project is written in javascript using page object pattern. While cypress discourages the use of pageobject in favor of app actions, the use of pageobject is simply for demonstration purpose.

Repo is run using git workflows on every commit.

## Prerequisites
- Node is installed [Guide](https://nodejs.org/en/download/package-manager/)
- All packages installed using `npm i`
- Cup of coffee ☕

## Commands
- `npx cypress open` to launch the GUI
- `npm run cy:browser:chrome` to run test in chrome headlessly
- `npm run cy:browser:firefox` to run test in firefox headlessly
