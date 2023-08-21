const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlider = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlider].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if (currentSlider == slider.length -1){
    currentSlider = 0
  } else {
    currentSlider++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if (currentSlider == 0) {
    currentSlider = slider.length - 1
  } else {
    currentSlider--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)


function openModal(pageUrl) {
  var modal = window.open(pageUrl, 'poup', 'width=800,height=800');
}

function closeModal(pageUrl) {
  var modal = window.close();
}

window.addEventListener('scroll', function () {
  var botaoTopo = document.getElementById('botaoTopo');
  if (window.scrollY > 200) {
    botaoTopo.classList.add('show');
  } else {
    botaoTopo.classList.remove('show');
  }
});

function voltarTopo() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

