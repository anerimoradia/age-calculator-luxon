import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { DateTime } from "luxon";

flatpickr("#birthdate", {
  dateFormat: "d/m/Y",
  maxDate: "today",
});
console.log("JS loaded");

const form = document.getElementById("age-form");
const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.getElementById("birthdate").value.trim();
  console.log("Input:", input);

  if (!input) {
    result.textContent = "Please select your birthdate.";
    result.style.color = "red";
    return;
  }

  const birthDate = DateTime.fromFormat(input, "d/M/yyyy");
  console.log("Parsed:", birthDate.toISO());

  // Invalid format
  if (!birthDate.isValid) {
    result.textContent = "Invalid date format. Please use the datepicker.";
    result.style.color = "red";
    return;
  }

  // Future date
  if (birthDate > DateTime.now()) {
    result.textContent = "Birthdate cannot be in the future.";
    result.style.color = "red";
    return;
  }

  const now = DateTime.now();
  const diff = now.diff(birthDate, ["years", "months", "days"]).toObject();

  result.style.color = "#333";
  result.textContent = `You are ${Math.floor(diff.years)} years, ${Math.floor(diff.months)} months, and ${Math.floor(diff.days)} days old.`;
  
 
});