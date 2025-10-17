// script.js for image slider

let currentIndex = 0;
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// 슬라이드를 보여주는 함수
function showSlide(index) {
  // 인덱스 범위 확인 및 조정 (무한 루프)
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  // slider의 위치를 transform 속성을 이용해 이동
  const offset = -currentIndex * 100;
  if (slider) {
    slider.style.transform = `translateX(${offset}%)`;
  }
}

// 다음/이전 슬라이드로 이동하는 함수
function moveSlide(direction) {
  showSlide(currentIndex + direction);
}

// 5초마다 자동으로 다음 슬라이드로 이동
// 만약 자동 슬라이드를 원하지 않으면 이 부분을 삭제하거나 주석 처리하세요.
let slideInterval = setInterval(() => {
  moveSlide(1);
}, 5000);

// 페이지가 처음 로드될 때 첫 번째 슬라이드를 보여줌
document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentIndex);
});
