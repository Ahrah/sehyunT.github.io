// script.js for advanced carousel slider

let currentIndex = 0;
const sliderContainer = document.getElementById('slider-container');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateSlider() {
    // 중앙 슬라이드를 계산하기 위한 이동 거리
    const offset = -currentIndex * (slides[0].offsetWidth + 32) + (sliderContainer.parentElement.offsetWidth / 2) - (slides[0].offsetWidth / 2);
    
    sliderContainer.style.transform = `translateX(${offset}px)`;

    // 모든 슬라이드의 active 클래스를 일단 제거
    slides.forEach(slide => slide.classList.remove('active'));

    // 현재 인덱스의 슬라이드에만 active 클래스 추가
    if (slides[currentIndex]) {
        slides[currentIndex].classList.add('active');
    }
}

function moveSlide(direction) {
    currentIndex += direction;

    // 인덱스 범위 조정 (무한 루프)
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    
    updateSlider();
}

// 5초마다 자동으로 다음 슬라이드로 이동
let slideInterval = setInterval(() => {
    moveSlide(1);
}, 5000);

// 페이지 로드 및 창 크기 변경 시 슬라이더 상태 업데이트
window.addEventListener('load', updateSlider);
window.addEventListener('resize', updateSlider);

