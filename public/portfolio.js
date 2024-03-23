





//Fonctions pour faire jouer les videos et le scrolling horizontal
document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll(".horizontal-scroll-wrapper .item video");


  // Gestion du défilement horizontal quand on scroll vers le haut ou vers le bas
  // Fonctionne autant pour les laptops que pour les ecrans tactiles  
  let currentIndex = 0;
  let isScrolling = false;
  let touchStartY = 0;

  document.body.addEventListener("wheel", handleWheel);
  document.body.addEventListener("touchstart", handleTouchStart);
  document.body.addEventListener("touchmove", handleTouchMove);

  function handleWheel(e) {
    const deltaY = e.deltaY;

    if (!isScrolling) {
      isScrolling = true;
      handleScroll(deltaY);
      setTimeout(function () {
        isScrolling = false;
      }, 800); // Adjust this value based on the scroll transition duration
    }
  }

  function handleTouchStart(e) {
    touchStartY = e.touches[0].clientY;
  }

  function handleTouchMove(e) {
    const deltaY = e.touches[0].clientY - touchStartY;

    if (!isScrolling) {
      isScrolling = true;
      handleScroll(deltaY);
      setTimeout(function () {
        isScrolling = false;
      }, 800); // Adjust this value based on the scroll transition duration
    }
  }

  function handleScroll(deltaY) {
    if (deltaY > 0 && currentIndex < 5) {
      currentIndex++;
    } else if ((deltaY < 0 && currentIndex > 0) || (currentIndex == 4)) {
      currentIndex--;
    }

    const newIndex = currentIndex + 1; // Nouvel index pour currentSlide 

    if(newIndex < 6){
      currentSlide(newIndex); 
      currentSlideSmall(newIndex);
    }


    const scrollPosition = currentIndex * window.innerWidth;
    document.querySelector(".horizontal-scroll-wrapper").scrollTo({
      left: scrollPosition,
      behavior: "smooth"
    });
  }

});




//Pour se deplacer dans le site avec les boutons et les liens
document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  let isScrolling = false;
  //DEPLACEMENT AVEC LES BOUTONS QUI SONT AU DEBUT DU SITE
  document.querySelectorAll(".mesBoutons a").forEach(function (link) {
      link.addEventListener("click", function (e) {
          e.preventDefault();

          const targetSectionId = this.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetSectionId);

          if (targetSection) {
              const targetIndex = Array.from(targetSection.parentNode.children).indexOf(targetSection) - 1;
              const scrollPosition = (targetIndex -1) * window.innerWidth;

              document.querySelector(".horizontal-scroll-wrapper").scrollTo({
                  left: scrollPosition,
                  behavior: "smooth"
              }); 
              const newIndex = targetIndex; // Nouvel index pour currentSlide

              if(newIndex < 6){
                currentSlide(newIndex); 
                currentSlideSmall(newIndex);
              }
          }
      });
  }); 

  //DEPLACEMENT AVEC LES ELEMENTS DE LA BARRE DE NAVIGATION 
  document.querySelectorAll(".nav-item a").forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetSectionId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetSectionId);

        if (targetSection) {
            const targetIndex = Array.from(targetSection.parentNode.children).indexOf(targetSection) - 1;
            const scrollPosition = (targetIndex -1) * window.innerWidth;

            document.querySelector(".horizontal-scroll-wrapper").scrollTo({
                left: scrollPosition,
                behavior: "smooth"
            });
        }
    });
  });   


  //DEPLACEMENT AVEC LES ELEMENTS DE LA BARRE DE NAVIGATION 
  //POUR LA VERSION DE LA BARRE DE NAVIGATION POUR LES PETITS ECRANS
  document.querySelectorAll(".nav-item-petit a").forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetSectionId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetSectionId);

        if (targetSection) {
            const targetIndex = Array.from(targetSection.parentNode.children).indexOf(targetSection) - 1;
            const scrollPosition = (targetIndex -1) * window.innerWidth;

            document.querySelector(".horizontal-scroll-wrapper").scrollTo({
                left: scrollPosition,
                behavior: "smooth"
            });
        }
    });
  }); 

  //DEPLACEMENT AVEC LES LIENS A LA FIN DU SITE
  document.querySelectorAll(".fin a").forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetSectionId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetSectionId);

        if (targetSection) {
            const targetIndex = Array.from(targetSection.parentNode.children).indexOf(targetSection) - 1;
            const scrollPosition = (targetIndex -1) * window.innerWidth;

            document.querySelector(".horizontal-scroll-wrapper").scrollTo({
                left: scrollPosition,
                behavior: "smooth"
            });
        }
    });
  });  
}); 






// POUR COLORER LES CERCLES QUAND ON CLIQUE DESSUS 
slideIndex = 1; 

// Appel initial pour définir la couleur du premier cercle au chargement de la page
currentSlide(slideIndex); 

// Appel initial pour définir la couleur du premier cercle au chargement de la page
// version navigation pour le mode petit ecran 
currentSlideSmall(slideIndex  + 1);

function currentSlide(n) {
  showSlides(slideIndex = n - 1);
} 

function currentSlideSmall(n){
  showSlidesSmall(slideIndex = n);
}   


function showSlidesSmall(n) {
  let i;
  let slides = document.getElementsByClassName("nav-item-petit");
  let dots = document.getElementsByClassName("nav-link-petit");
  
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  } 

  
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex-1].classList.add("active");
  dots[slideIndex-1].classList.add("active");
}




function currentSlide(n) {
  showSlides(slideIndex = n - 1);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("nav-item");
  let circles = document.getElementsByClassName("nav-circle");

  if (n < 0) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    circles[i].style.backgroundColor = "transparent";
  }
  
  slides[slideIndex].classList.add("active");
  circles[slideIndex].style.backgroundColor = "#362020";
}






