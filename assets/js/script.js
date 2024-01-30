function showOption() {
    document.querySelector('.item-message').classList.toggle('hidden');
}

AOS.init();

window.addEventListener('scroll', function() {
    document.querySelector('.navbar').classList.toggle('sticky', window.scrollY > 0)
    // let navLinks = document.querySelector('.nav-link')
    // navLinks.forEach(function() {
    //     navLinks.classList.toggle('text-warning', window.scrollY > 0)
    // });
})