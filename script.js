// script.js
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(index) {
  const slider = document.getElementById('slider');
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }
  
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  
  // 활성화된 dot 업데이트
  dots.forEach((dot, i) => {
    dot.classList.remove('active');
    if (i === currentIndex) {
      dot.classList.add('active');
    }
  });
}

function moveSlide(direction) {
  showSlide(currentIndex + direction);
}

function currentSlide(index) {
  showSlide(index);
}

// 자동 슬라이드 (5초마다)
setInterval(() => {
  moveSlide(1);
}, 5000);
```

### **Step 5: 이미지 폴더 준비**

프로젝트 폴더에 `images` 폴더를 만들고, 다음 이미지 파일들을 준비합니다:
- `slide1.jpg`
- `slide2.jpg`
- `slide3.jpg`

### **최종 파일 구조**
```
your-project/
│
├── index.html
├── style.css
├── script.js
└── images/
    ├── slide1.jpg
    ├── slide2.jpg
    └── slide3.jpg
