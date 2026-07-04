// Theme toggle effect - Theme changes from light to dark and to light mode on clicking on theme toggle button
const themeToggleButton = document.querySelector(".theme-toggle-button");
themeToggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");

if (document.body.classList.contains("dark")){
  localStorage.setItem("theme", "dark");
}else{
  localStorage.setItem("theme", "light");
}
});

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){
  document.body.classList.add("dark");
}

