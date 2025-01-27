
//Menu Script   


function toggleNav(x) {
    x.classList.toggle("change"); // Alterna a classe do botão

    const imgCabecaOnca = document.getElementById("imgCabecaOnca");
    const sidebar = document.getElementById("mySidebar");
    const menuOi = document.getElementById("menuElement");
    const main = document.getElementById("cabecalho");
    const section1 = document.getElementById("section1");

    if (sidebar.style.width === "250px") {
        // Fecha o menu
        sidebar.style.width = "0";
        main.style.marginLeft = "0";
        imgCabecaOnca.style.opacity = 100;
        section1.style.backgroundColor = "#313131";
        menuOi.style.position = "absolute";

    } else {
        // Abre o menu
        sidebar.style.width = "250px";
        imgCabecaOnca.style.opacity = 0;
        section1.style.backgroundColor = "#614C4C";
        menuOi.style.position = "fixed";
        menuOi.style.width = "100%";
    }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
