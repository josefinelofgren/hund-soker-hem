# Hund Söker Hem
This is a degree project for my education as a Front End Developer at Medieinstitutet. This project aims to create a digital and interactive website for the fictional dog rescue company “Hund Söker Hem”, that allows people to easily find their shelter dog match through a matching system. 

The main purpose of this project is to create a dog rescue website with a solution that goes beyond just presenting available dogs. The solution includes encouraging better communication overall and helping people to match them with the right dogs that fits their lifestyle and preferences.

## Run app live 

Visit: [https://josefinelofgren.github.io/hund-soker-hem](https://josefinelofgren.github.io/hund-soker-hem)

This app is built in React and uses the preprocessor SASS for CSS. The application is deployed at Github Pages. The back end is built in Node.js/Express.js and uses mongoDB Atlas as a database. The back end is hosted at Heroku and you will find the back end application [here](https://github.com/josefinelofgren/hund-soker-hem-backend).

* [Setup](#setup)
    - [install](#install)
    - [test](#test)
    - [build](#build) 

* [Dependencies](#dependencies)

## Setup

### Install

To install all Javascript dependencies, run
```sh
npm i
```

To run the app in development mode, cd into the project directory and run

```sh
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Test

The application contains some E2E tests with Cypress. 

```sh
npm run e2e
```

This launches the test runner.

### Build

```sh
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Dependencies

- react "^17.0.2"
- sass "^1.49.9"
- cypress "^9.5.3",

### Other packages
- create-react-app
- react-router-dom
- react-dom
- react-bootstrap
- bootstrap
- sass
- i18next
- react-i18next
- react-scroll
- redux
