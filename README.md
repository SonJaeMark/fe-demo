# FE Demo

## Overview

This is a small frontend demo application built with vanilla JavaScript and ES modules. It renders a simple login and registration UI, and routes between views using the browser hash (`window.location.hash`).

The app is served from `index.html` and loads the main application from `src/main.js`.

## How It Works

- `index.html` contains a root `<div id="app"></div>` and loads `src/main.js` as an ES module.
- `src/main.js` manages the view routing and renders the current view into the `app` container.
- Views are defined under `src/ui/views/`.
  - `loginView.js` shows the login page.
  - `registrationView.js` shows the registration page.
  - `adminDashboardView.js`, `studentDashboardView.js`, and `registrarDashboardView.js` provide simple dashboard placeholders.
- UI components are in `src/ui/components/`.
  - `customNavbar.js` renders the top navigation.
  - `customInput.js`, `customButton.js`, and `customSelect.js` generate reusable form markup.
- Form markup is returned by modules in `src/ui/module/`.
  - `loginForm.js` returns the login form HTML.
  - `registrationForm.js` returns the registration form HTML.
- Business logic lives in `src/core/`.
  - `loginLogic.js` validates credentials against test account data.
  - `registerLogic.js` stores test accounts and adds new users.

## Test Accounts

Use one of the built-in accounts to log in:

- Admin: `admin` / `admin123`
- Student: `student` / `student123`
- Registrar: `registrar` / `registrar123`

## Navigation

- The app uses hash routing.
- Login view is at `#login`.
- Registration view is at `#register`.
- After a successful login, the app navigates to the dashboard hash for the user role:
  - `#adminDashboard`
  - `#studentDashboard`
  - `#registrarDashboard`

## Running Locally

Because the app uses ES modules, it must be served over HTTP.

From the project root, run a simple local server, for example:

```bash
python -m http.server 8000
```

Then open:

```
http://localhost:8000
```

## Notes

- `src/main.js` listens for `hashchange` and renders the correct view.
- View files attach form submit handlers after rendering so the DOM elements exist.
- This is a demonstration project intended for simple login/registration flow testing.
