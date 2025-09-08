function toggleMobileMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("hidden");
}


const carouselInner = document.getElementById('carousel-inner');
const totalSlides = carouselInner.children.length;
let index = 0;

function showSlide(i) {
    index = (i + totalSlides) % totalSlides;
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
}
function nextSlide() { showSlide(index + 1); }
function prevSlide() { showSlide(index - 1); }

// Auto-slide (optional)
setInterval(nextSlide, 5000);
    