// script.js for image slider

let currentIndex = 0;
const slider = document.getElementById('slider');
// slides 변수는 페이지 로드 후에 초기화합니다.
let slides = [];
let totalSlides = 0;

// 슬라이드를 보여주는 함수
function showSlide(index) {
  // 슬라이드 요소가 없으면 함수를 종료합니다.
  if (totalSlides === 0) return;

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
let slideInterval = setInterval(() => {
  moveSlide(1);
}, 5000);

// 페이지의 모든 콘텐츠가 로드된 후에 스크립트를 실행합니다.
document.addEventListener('DOMContentLoaded', () => {
  // 이 시점에서 slides 요소를 찾습니다.
  slides = document.querySelectorAll('.slide');
  totalSlides = slides.length;
  
  // 슬라이드가 하나라도 있을 때만 첫 번째 슬라이드를 보여줍니다.
  if(totalSlides > 0) {
    showSlide(currentIndex);
  }
});

