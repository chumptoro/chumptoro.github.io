// function changeNavLinkColor() {
// 	var nav_link_collection = document.getElementsByClassName('nav_link');
// 	for (var i = 0; i < nav_link_collection.length; i++) {
// 	 	if (nav_link_collection[i].href == window.location.href) {
// 	 		alert("the nav link " + nav_link_collection[i].href + " is black and the widnow is " + window.location.href);
// 	 		nav_link_collection[i].classList.add("nav_link_chosen");
// 	 	} 
// 	 	else {
// 	 		nav_link_collection[i].classList.remove("nav_link_chosen"); 
// 	 		alert("the nav link " + nav_link_collection[i].href + " and the windnow is " + window.location.href);
// 	 	}
// 	}
// };

function changeNavLinkColor(event) {
	var nav_link_collection = document.getElementsByClassName('nav_link');
	for (var i = 0; i < nav_link_collection.length; i++) {
	 		nav_link_collection[i].classList.remove("nav_link_chosen"); 
	 		alert("the nav link " + nav_link_collection[i].href + " and the window link is " + window.location.href);
	}
	alert(event.target);
	//event.target.classList.add("nav_link_chosen");
};

window.onload = function() {

console.log("site is up and ready.");



var nav_link_collection = document.getElementsByClassName('nav_link');
for (var i = 0; i < nav_link_collection.length; i++) {
    nav_link_collection[i].addEventListener('click', changeNavLinkColor(event));
}



};
