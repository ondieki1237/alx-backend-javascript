# JavaScript Promises, Async/Await, and Error Handling

## Resources
To complete this project, make sure to read or watch the following resources:

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promise: An Introduction](https://developers.google.com/web/fundamentals/primers/promises)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

## Learning Objectives
By the end of this project, you should be able to:

- Explain what Promises are, why they are useful, and how to use them.
- Use the `then`, `resolve`, and `catch` methods of Promises.
- Understand and apply the different methods of the `Promise` object.
- Handle errors using `throw` and `try...catch`.
- Use the `await` operator to pause the execution of an async function.
- Write and utilize `async` functions to handle asynchronous operations.

## Requirements
- All your files will be executed on **Ubuntu 18.04 LTS** using **NodeJS 12.11.x**.
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`.
- All files should end with a new line.
- A `README.md` file at the root of the project is mandatory.
- Your code should have the `.js` extension.
- Your code will be tested using **Jest** with the command `npm run test`.
- Your code will be verified against linting rules using **ESLint**.
- All functions must be exported.

## Setup Instructions
1. Install **NodeJS 12.11.x**:

```bash
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
