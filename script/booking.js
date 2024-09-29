document.querySelectorAll('.carda').forEach(card => {
    card.addEventListener('click', function() {
        document.querySelectorAll('.carda').forEach(c => c.classList.remove('clicked'));
        this.classList.add('clicked');
    });
});

document.querySelector('.scroll-button.left').addEventListener('click', function() {
    document.querySelector('.container').scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

document.querySelector('.scroll-button.right').addEventListener('click', function() {
    document.querySelector('.container').scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});


