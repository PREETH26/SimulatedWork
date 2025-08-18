# Login Form

This project is a modern, accessible login form demo built with HTML, CSS, and JavaScript. It features client-side validation, password strength feedback, lockout after failed attempts, and a "remember me" option. The UI is responsive and visually appealing, with a focus on usability and accessibility.

## Features

- **Email and Password Validation:** Real-time feedback for email format and password requirements.
- **Password Strength Meter:** Visual indicator for password strength.
- **Show/Hide Password:** Toggle password visibility.
- **Caps Lock Warning:** Alerts user if Caps Lock is on.
- **Lockout Mechanism:** Locks form for 30 seconds after 5 failed attempts.
- **Remember Me:** Option to remember the user's email.
- **Accessible Markup:** ARIA attributes and keyboard-friendly controls.
- **Responsive Design:** Works well on mobile and desktop.

## How GitHub Copilot Helped

I used GitHub Copilot to accelerate development and improve code quality. Copilot assisted with:

- Writing validation logic for email and password fields.
- Implementing debounce for input events.
- Creating the lockout mechanism using localStorage.
- Generating accessible HTML and ARIA attributes.
- Suggesting CSS for a modern, dark-themed UI.
- Handling UI state updates and error messages.

## Prompts Used

Some of the prompts I used with Copilot include:

- "Create a login form with email and password validation."
- "Add a password strength meter."
- "Implement a lockout after too many failed login attempts."
- "Show a warning if Caps Lock is on."
- "Make the form accessible and responsive."
- "Add a remember me checkbox that saves the email."
- "Style the form with a modern, dark theme."

## Concepts and Code Used

- **HTML5 Semantic Elements:** `<form>`, `<input>`, `<button>`, `<section>`, `<header>`, etc.
- **CSS Custom Properties:** For theming and easy color changes.
- **Responsive Design:** Media queries for mobile support.
- **JavaScript ES6+:** Arrow functions, destructuring, template literals.
- **Debounce Function:** To optimize input event handling.
- **LocalStorage:** To persist lockout state and remembered email.
- **Accessibility:** ARIA roles, live regions, keyboard navigation.
- **Client-side Validation:** Regex for email, password policy checks.
- **UI Feedback:** Error messages, success messages, loading spinners.

## Files

- [`index.html`](index.html): Main HTML structure.
- [`style.css`](style.css): Styles for the form and UI.
- [`script.js`](script.js): All client-side logic and interactivity.
- `image.png`: Logo or decorative image.

---

**Tip:** Try logging in with `demo@app.com` and `Demo@1234`!

---

*This project was built with the help of [GitHub Copilot](https://github.com/features/copilot) to speed up development and ensure