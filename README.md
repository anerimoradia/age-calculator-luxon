# Age Calculator (Vite + Luxon + Flatpickr)

A modern, responsive age calculator built using <b>Vite, Luxon,</b> and <b>Flatpickr</b>.
Users can select their birthdate using a custom JavaScript datepicker and instantly see their exact age in years, months, and days.
This project demostrates working with external npm packages, date manipulation, and UI polish.

## ✨ Features
<ol>
    <li>Custom datepicker using Flatpickr (no default HTML date input) </li>
    <li> Accurate age calculation powered by Luxon </li>
    <li> Clean, responsive UI with a card layout </li>
    <li> Input validation and error handling </li>
    <li> Built with Vite for a fast development experience </li>
</ol>

## 🛠️ Tech Stack
<ul>
    <li> <b>Vite</b> - development environment and bundler </li>
    <li> <b>Luxon</b> - date/time calculations </li>
    <li> <b> Flatpickr</b> - lightweight datepicker </li>
    <li> <b> HTML, CSS, JavaScript </b> </li>
</ul>

## 📘 How it works

<ol>
    <li> The user selects a birthdate using the Flatpickr datepicker </li>
    <li> Luxon parses the selected date </li>
    <li> The app compares it with the current date </li>
    <li> The difference is calculated in: 
        <ul>
            <li> Years </li>
            <li> Months </li>
            <li> Days </li>
        </ul>
    </li>
</ol>

## 📂 Project Structure

```
age-calculator-luxon/
│
├── index.html
├── style.css
├── package.json
├── package-lock.json
├── README.md
│
├── public/
│   └── vite.svg
│
└── src/
    └── main.js
```

## 🚀 Getting Started

1. Install dependencies
    <code> npm install </code>

2. Start the development server
    <code> npm run dev </code>

3. Open the app
    Visit the local URL shown in the terminal - http://localhost:5173

 ## 🧪 Validation Rules
- Birthdate cannot be empty
- Birthdate must match the datepicker format
- Future dates are not allowed
   