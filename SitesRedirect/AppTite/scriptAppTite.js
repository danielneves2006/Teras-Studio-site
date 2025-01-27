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

    
    if (checkbox.style.display === "flex") {
        // Fecha o checkbox
        checkbox.style.display = "none";

    } else {
        // Abre o checkbox
        checkbox.style.display = "flex";
    }
}


function toggleNav(x) {
    x.classList.toggle("change"); // animação do Botão

    const menu = document.getElementById("elements");
    const menuA = document.getElementById("menuBar");
    const mediaQuery = window.matchMedia("(max-width: 1020px)");

    
    if (menu.style.paddingBottom === "8rem") {
        // Fecha o menu
        menu.style.paddingBottom = "0rem";

        menu.style.backgroundImage = "url('img/meioCirculo.svg')";
        menuA.style.display = "none";

    } else {
      // Abre o menu
      
      menuA.style.display = "flex";
      // Ajusta valores com base no @media query

      if (mediaQuery.matches) {// Telas menores
          menu.style.backgroundImage = "url('img/linguaMeioCirculo.svg')";
          menu.style.backgroundSize = "contain";
          menuA.style.flexDirection = "column";
          menuA.style.width = "1rem"
          menuA.style.backgroundPositionX = "-1";
          menu.style.paddingBottom = "8rem"; 
      } else {// Telas maiores
          menu.style.paddingBottom = "8rem";
          menu.style.backgroundImage = "url('img/linguaMeioCirculo.svg')";
          menuA.style.backgroundSize = "auto";
      }
  } 
    
    
    
    

}

const data = [
    {
     title: "Caipirinha",
     img: "img/imgCaipirinha.png"
    },{
     title: "Chocolate Quente",
     img: "img/imgChocolateQuente.png"
    },{
    title: "Omelete",
    img: "img/imgOmelete.png"
    },{
    title: "Tapioca",
    img: "img/imgTapioca.png"
    },{
    title: "Brigadeiro",
    img: "img/imgBrigadeiro.png"
    },{
    title: "Bala Baiana",
    img: "img/imgBalaBaiana.png"
    },{
    title: "Pizza",
    img: "img/imgPizza.png"
    },{
    title: "Enroladinho",
    img: "img/imgEnrroladinho.png"
    }
    ]
    
    const cardContainer = document.querySelector(".CardContainer");
    const searchInput = document.querySelector("#searchInput");
    const displayData = data=> {
        cardContainer.innerHTML = "";
        data.forEach( e=>{
            cardContainer.innerHTML += `
            <div class = "card">
                <h2>${e.title}</h2>
                <img src="${e.img}">
            </div>
            `
        });
    }
    //window.addEventListener("load", displayData.bind(null,data))
