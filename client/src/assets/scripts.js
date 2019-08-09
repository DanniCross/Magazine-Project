let menuEvent = document.getElementById("icon");
let enlaces = document.getElementById("enlaces");
let cont = 0;

menuEvent.addEventListener("click", function() {
  if (cont == 0) {
    enlaces.className = "enlaces dos";
    cont = 1;
  } else {
    enlaces.classList.remove("dos");
    enlaces.className = "enlaces uno";
    cont = 0;
  }
});
