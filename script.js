        /** Ouverture du bouton présentation **/
document.addEventListener("DOMContentLoaded", function () {
  // Forcer un état initial propre pour l'animation dès le chargement
window.addEventListener("load", function () {
  const dropdown = document.querySelector('.dropdown');
  dropdown.classList.remove('open', 'close');
});

  const presentationLink = document.getElementById('presentation-link');
  const dropdown = document.querySelector('.dropdown');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  // 🛠 FIX : empêche le menu d'être perçu comme déjà affiché au premier clic
  dropdown.classList.remove('open');
  dropdown.classList.remove('close');
  dropdownMenu.style.display = 'none'; // désactive visuellement
  setTimeout(() => {
    dropdownMenu.style.display = ''; // réactive proprement après le rendu
  }, 0);

  // Événement sur le bouton
  presentationLink.addEventListener('click', function (event) {
    event.preventDefault();

    if (dropdown.classList.contains('open')) {
      dropdown.classList.remove('open');
      dropdown.classList.add('close');
    } else {
      dropdown.classList.add('open');
      dropdown.classList.remove('close');
    }
  });
});
        
        /** Script pour le défilement du texte **/

const scrollZone = document.querySelector('.scroll-zone');
const phrases = document.querySelectorAll('.texte-impact');
const fondFixe = document.querySelector('.fond-fixe-scroll');

window.addEventListener('scroll', () => {
    const rect = scrollZone.getBoundingClientRect();
    const height = window.innerHeight;
  
    // Gestion des phrases
    if (rect.top <= 0 && Math.abs(rect.top) < height * phrases.length) {
      const index = Math.floor(Math.abs(rect.top) / height);
      phrases.forEach((p, i) => {
        p.classList.toggle('active', i === index);
      });
    } else {
      phrases.forEach(p => p.classList.remove('active'));
    }
  
    // Affichage du fond fixe
    if (rect.top <= 0 && rect.bottom > window.innerHeight) {
      fondFixe.style.opacity = 1;
    } else {
      fondFixe.style.opacity = 0;
    }
  });
  
        /** Script pour l'animation des éléments au défilement 3ème page **/

// Sélectionner tous les éléments à observer
const features = document.querySelectorAll('.feature-box');

// Fonction pour vérifier si l'élément est dans la vue
function isElementInView(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= windowHeight && rect.bottom >= 0;
}

// Fonction pour gérer l'animation au scroll
function handleScroll() {
  features.forEach(feature => {
    if (isElementInView(feature)) {
      
      if (!feature.classList.contains('in-view')) {
        feature.classList.add('in-view');
        feature.style.animation = ''; 
      }
    } else {

      feature.classList.remove('in-view');
      feature.style.animation = ''; 
      if (feature.classList.contains('left-slide')) {
        feature.style.animation = 'slideOutLeft 1s forwards'; 
      } else if (feature.classList.contains('right-slide')) {
        feature.style.animation = 'slideOutRight 1s forwards'; 
      }
    }
  });
}

// Écouteur d'événements pour le scroll
window.addEventListener('scroll', handleScroll);

// Appeler la fonction au chargement pour gérer les éléments déjà visibles
handleScroll();


      