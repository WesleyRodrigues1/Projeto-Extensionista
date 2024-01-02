let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Função para avançar ou retroceder os slides
function currentSlide(n) {
  showSlides(slideIndex = n);
}
// Função principal para exibir os slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
// Verifica se ultrapassou o número de slides
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

// Adicionando funcionalidade de autoavanço
let autoSlide = setInterval(function() {
  plusSlides(1);
}, 3000); // Mude o valor para ajustar o tempo de espera em milissegundos

// Parar a autoavanço quando o mouse entra na área do slideshow
document.querySelector('.slideshow-container').addEventListener('mouseenter', function() {
  clearInterval(autoSlide);
});

// Retomar o autoavanço quando o mouse sai da área do slideshow
document.querySelector('.slideshow-container').addEventListener('mouseleave', function() {
  autoSlide = setInterval(function() {
    plusSlides(1);
  }, 3000); // Mude o valor para ajustar o tempo de espera em milissegundos
});