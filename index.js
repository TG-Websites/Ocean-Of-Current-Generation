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



function openModal() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoPlayer');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    // Use embed link, not share link
    iframe.src = "https://www.youtube.com/embed/TzfnlPxCZv0?autoplay=1";
}

function closeModal() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoPlayer');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    iframe.src = ""; // Stop video
}

