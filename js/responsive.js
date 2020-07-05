function openModal() {
  document.getElementsByClassName("nav_modal")[0].style.display = "block";

  document.getElementsByClassName("nav_bar")[0].style.filter = "blur(20px)";
  document.getElementsByClassName("content")[0].style.filter = "blur(20px)";
  //document.getElementsByTagName("body")[0].style.overflowY = "hidden";

}

function closeModal() {
  document.getElementsByClassName("nav_modal")[0].style.display = "none";
  document.getElementsByClassName("nav_bar")[0].style.filter = "blur(0px)";
  document.getElementsByClassName("content")[0].style.filter = "blur(0px)";
  //document.getElementsByTagName("body")[0].style.overflowY = "scroll";


}

window.onload = function() {
	 //var x = document.getElementById("hamburger_dropdown");
	var x = document.getElementsByClassName("hamburger_dropdown_icon")[0];
	x.addEventListener("click", openModal);

	var y = document.getElementsByClassName("clicked_hamburger_dropdown_icon")[0];
	y.addEventListener("click", closeModal);
}
