let navList = document.getElementById("navList");
let navBackdrop = document.getElementById("navBackdrop");
function navButton() {
  console.log("Show");
  navList.classList.add("show");
  navBackdrop.classList.add("show");
}

navBackdrop.addEventListener("click", () => {
  console.log("Unshow");
  navList.classList.remove("show");
  navBackdrop.classList.remove("show");
});
