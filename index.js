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


document.getElementById('sendButton').addEventListener('click', function () {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields before sending.");
        return;
    }

    // Redirect to Gmail with prefilled values
    const subject = encodeURIComponent("Contact");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    window.location.href = `https://mail.google.com/mail/?view=cm&to=alok48ax@gmail.com&su=${subject}&body=${body}`;
});


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

