# Write your resume and pass the PlayWright tests

Welcome to your assignment, your task is to code your resume using plain HTML without any CSS or JavaScript.  You must pass the end-to-end(e2e) playwright tests locateed in thee tests folder [here](./reference/index.html).  
0. Install vscode live code extension, Node and Playwright (see below)
1. Click [here](https://classroom.github.com/a/p-9R0XIT) to accept assignment.  This will make a copy of the assignment that is private and associated with the NJIT-WIS GitHub repository and not your own GitHHub account.
2. Clone the repository to your local computer using vscode.
3. Type npm run install
4. You can run the tests using the command: npm run test


can find example code [here](./reference/index.html)


## Node.js Installation:

1. Visit the official Node.js website: nodejs.org.
2. Download the Node.js installer for your operating system (Windows, macOS, or Linux).
3. Run the downloaded installer and follow the installation instructions.
3. Verify the installation by opening a terminal or command prompt and running the following command:
css

node --version

It should display the installed Node.js version.

## Playwright Installation:

1. Open a terminal or command prompt.
Run the following command to install Playwright and its dependencies:

npm install --save-dev @playwright/test

This command installs the @playwright/test package, which includes Playwright and the necessary testing tools.

2 To install Playwright with Chromium, run the following command:

npx playwright install

This command downloads and installs the Chromium browser used by Playwright for testing.
Setup Complete: