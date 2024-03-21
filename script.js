document.querySelector("h1").addEventListener("click", function() {
	document.getElementsByTagName("p")[0].innerHTML = "true";
})

document.querySelector("button").addEventListener("click", function() {
	document.getElementsByTagName("p")[1].innerHTML = "true";
})

document.querySelector("h3").addEventListener("click", function() {
  g = document.createElement('h6');
  g.innerHTML = "yooo";
  g.setAttribute("id", "sus");
  document.body.appendChild(g);
})
