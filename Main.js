const icon = document.getElementById("icon");
const menulist = document.getElementById("inimenu");

icon.addEventListener("click", () => {
  menulist.classList.toggle("hidden");
});
