let year = document.getElementById("year") as HTMLSpanElement;
let date: string = new Date().getFullYear().toString();
year.setAttribute("datetime", date);
year.textContent = date;
