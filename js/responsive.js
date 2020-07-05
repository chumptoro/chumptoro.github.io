function openModal() {
  document.getElementsByClassName("nav_modal")[0].style.display = "block";
}

function closeModal() {
  document.getElementsByClassName("nav_modal")[0].style.display = "none";
}

window.onload = function() {
	 //var x = document.getElementById("hamburger_dropdown");
	var x = document.getElementsByClassName("hamburger_dropdown_icon")[0];
	x.addEventListener("click", openModal);

	var y = document.getElementsByClassName("clicked_hamburger_dropdown_icon")[0];
	y.addEventListener("click", closeModal);
}
