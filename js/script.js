document.addEventListener('DOMContentLoaded', function() {
    const magicButton = document.getElementById('magicButton');
    const magicText = document.getElementById('magicText');
    const starContainer = document.getElementById('starContainer');

    magicButton.addEventListener('click', function() {
        if (magicText.style.display === 'none') {
            magicText.style.display = 'block';
        } else {
            magicText.style.display = 'none';
        }
        createStars();
    });

    function createStars() {
        for (let i = 0; i < 500; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.left = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 2}s`;
            starContainer.appendChild(star);

            setTimeout(() => {
                star.remove();
            }, 10000);
        }
    }
});
