document.querySelector("h1").addEventListener("click", function() {
	document.getElementsByTagName("p")[0].innerHTML = "true";
})

document.querySelector("button").addEventListener("click", function() {
	document.getElementsByTagName("p")[1].innerHTML = "true";
})

