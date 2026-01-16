window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    preloader.style.transition = 'opacity 0.4s ease';
    preloader.style.opacity = '0';

    this.setTimeout(() => {
        preloader.style.display = 'none';
    }, 400);
})