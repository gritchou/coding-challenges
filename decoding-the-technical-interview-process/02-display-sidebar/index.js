const sidebar = document.querySelector(".sidebar");
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");

openMenu.addEventListener("click", toggleSidebarVisibility);
closeMenu.addEventListener("click", toggleSidebarVisibility);

function toggleSidebarVisibility() {
	sidebar.classList.toggle("sidebar--visible");
}
