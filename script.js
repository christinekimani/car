    function showSection(sectionId) {
        const sections = document.querySelectorAll('main');
        sections.forEach(section => {
            section.classList.add('hidden');
        });
        document.getElementById(sectionId).classList.remove('hidden');
    }

    function saveQuote() {
        alert('Quote saved! (Functionality not implemented)');
    }


    const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.carousel-item');

let counter = 0;
const size = carouselItems[0].clientWidth;

document.getElementById('nextBtn').addEventListener('click', () => {
    if (counter >= carouselItems.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
