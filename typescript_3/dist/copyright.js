"use strict";
let year = document.getElementById("year");
let date = new Date().getFullYear().toString();
year.setAttribute("datetime", date);
year.textContent = date;
