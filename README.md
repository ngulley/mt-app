# Metro Transit App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.13.

## Steps to build and run the application

1. Download and install the latest NodeJS 12.x version

https://nodejs.org/download/release/v12.22.7/

2. Clone the remote project repository

`git clone https://github.com/ngulley/mt-app.git`

3. Change into the local project directory

`cd mt-app`

4. Install the project dependencies

`npm install`

5. Build the code and start a dev server

`ng serve`

6. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Steps to execute provided unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## List of assumptions made during development

1. The application could be used on a wide range of devices: phones, tablets, laptops & desktops. Hence the user interface should be responsive.
2. The application could be used by many users at the same time. Hence the application's code should be served from a CDN instead of from the NodeJS server in order to optimize page load performance.
3. The application could rely on a set of API's that aren't 100% reliable. Hence the application should gracefully handle service exceptions by displaying user friendly error messages.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to generate a production build for the project. The build artifacts will be stored in the `dist/` directory.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
