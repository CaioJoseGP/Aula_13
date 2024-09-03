// Barra-Scroll
function updateMaskImage() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const scrollPercentage = Math.min(scrollTop / (document.documentElement.scrollHeight - windowHeight), 1);

    const maskSize = 100 - (scrollPercentage * 100);
    const maskPosition = 100 - (scrollPercentage * 100);

    const maskImage = `linear-gradient(to right, white ${maskSize}%, transparent ${maskPosition}%, transparent ${maskSize}%)`;
    document.querySelector('.rainbow-line').style.maskImage = maskImage;
}

// Menu Fixo
window.addEventListener('scroll', function() {
    const targetElement = document.getElementById('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition < 5) {
        targetElement.classList.remove('menu-fixed');

    } else {
        targetElement.classList.add('menu-fixed');
    }
});

// Calls
window.addEventListener('scroll', updateMaskImage);
window.addEventListener('resize', updateMaskImage);

updateMaskImage();
