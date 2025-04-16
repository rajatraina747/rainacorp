document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const images = document.querySelectorAll("#hero-carousel img");
    const totalImages = images.length;
    
    function showNextImage() {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % totalImages;
      images[currentIndex].classList.add("active");
    }
    
    if (totalImages > 0) {
      images[currentIndex].classList.add("active");
      setInterval(showNextImage, 5000);
    }
  });
  