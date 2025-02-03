
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




function filtroBtt(){

    const checkbox = document.getElementById("menuCheckBox");
    const middle = document.getElementById("middle");

    
    if (checkbox.style.display === "flex") {
        // Fecha o checkbox
        checkbox.style.display = "none";
        middle.style.marginLeft = "8rem";

    } else {
        // Abre o checkbox
        checkbox.style.display = "flex";
        middle.style.marginLeft = "1.1rem";
    }
}


function toggleNav(x) {
    x.classList.toggle("change"); // animação do Botão

    const menu = document.getElementById("elements");
    const menuA = document.getElementById("menuBar");
    const mediaQuery = window.matchMedia("(max-width: 1020px)");

    
    if (menu.style.paddingBottom === "8rem") {
        // Fecha o menu
        menu.style.paddingBottom = "3rem";
        menu.style.backgroundImage = "url('../img/meioCirculoBranco.svg')";
        menuA.style.display = "none";

    } else {
      // Abre o menu
      
      menuA.style.display = "flex";
      // Ajusta valores com base no @media query

      if (mediaQuery.matches) {// Telas menores
          menu.style.backgroundImage = "url('../img/linguaMeioCirculoBanco.svg')";
          menu.style.backgroundSize = "contain";
          menuA.style.flexDirection = "column";
          menuA.style.width = "1rem"
          menuA.style.backgroundPositionX = "-1";
          menu.style.paddingBottom = "8rem"; 
      } else {// Telas maiores
          menu.style.paddingBottom = "8rem";
          menu.style.backgroundImage = "url('../img/linguaMeioCirculoBanco.svg')";
          menuA.style.backgroundSize = "auto";
      }
  } 
}


//FUNÇÃO BARRA DE PESQUISAR

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

const swiper = new Swiper('.sliderWaper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30, // Ajuste este valor conforme necessário
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
      0: {
          slidesPerView: 'auto' // Ou um número, se preferir
      },
      620: {
          slidesPerView: 'auto' // Ou um número, se preferir
      },
      1024: {
          slidesPerView: 'auto' // Ou um número, se preferir
      }
  }
});
