# Angular Calculator

A small Angular calculator demo with a button-based interface and keyboard entry for basic arithmetic expressions.

## Features

- Enter digits and arithmetic operators using the on-screen keypad.
- Calculate addition, subtraction, multiplication, and division.
- Submit an expression with the Enter key.
- Clear the current expression or remove the last character.
- Build with Angular CLI.

## Technology stack

- Angular 16
- TypeScript
- Angular Forms
- Jasmine and Karma test tooling

## Run locally

Prerequisites: Node.js and npm compatible with the project's Angular CLI version.

~~~bash
npm ci
npm start
~~~

Open `http://localhost:4200/`.

## Build and test

~~~bash
npm run build
npm test
~~~

## Implementation note

This is a learning project, not a production calculator. The current component evaluates input with JavaScript `eval()`; replace it with a safe expression parser and add input/error handling before accepting untrusted expressions or using the application in production.

## License

No license file is currently included. Add an explicit license before inviting others to reuse or redistribute this project.
