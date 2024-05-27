
document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll('.slide2');
    let thumbnails = document.querySelectorAll('.thumbnail2');
  
    thumbnails.forEach(function(thumbnail, index) {
      thumbnail.addEventListener('click', function() {
        showSlide(index);
      });
    });
  
    let slideIndex = 0;
  
    function showSlide(n) {
      if (n < 0) {
        slideIndex = slides.length - 1;
      } else if (n >= slides.length) {
        slideIndex = 0;
      } else {
        slideIndex = n;
      }
  
      slides.forEach(function(slide) {
        slide.classList.remove('active');
      });
  
      slides[slideIndex].classList.add('active');
  
      // 添加活動狀態的小圖邊框
      thumbnails.forEach(function(thumbnail, index) {
        if (index === slideIndex) {
          thumbnail.classList.add('active-thumbnail');
        } else {
          thumbnail.classList.remove('active-thumbnail');
        }
      });
    }
  
    function autoSlide() {
      showSlide(slideIndex);
      slideIndex++;
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
      setTimeout(autoSlide, 5000); // 每5秒切換一次幻燈片
    }
  
    autoSlide();
  });
  
  
  