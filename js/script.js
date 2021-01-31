import { years_since } from "./years-since.js";

// Set the current year in the footer
const curDate = new Date();
const qCurrentYear = document.querySelector("#current-year");
qCurrentYear.textContent = curDate.getFullYear();

// How many years have I been brickfilming?
document.querySelector("#years-since").textContent = years_since(2007, 12, 10);
