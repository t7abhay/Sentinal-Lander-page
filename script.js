document.addEventListener('DOMContentLoaded', function() {
    const emojiCount = 50;
    let emojis = ['🎉', '😄', '🚀', '🌟', '❤️', '😊', '🎈', '🐱', '🍕', '🚲', '🍦', '🌺', '🌞', '🍓', '🎵', '🍭', '🍂', '🎓', '🏄‍♂️', '🎁', '🌍', '🐶', '🏆', '🍔', '🍀', '🎮', '🌹', '⚡️', '🍒', '📚', '🌄', '🚢', '🐰', '🎤', '🚁', '🍎', '🐢', '🎃', '🍒', '🌼', '🎊', '🌴', '🍁', '🍌', '🍂', '🌈', '🏀'];

    const emojisContainer = document.querySelector('.emojis-container');

    for (let i = 0; i < emojiCount; i++) {
        const emoji = document.createElement('span');
        emoji.classList.add('emoji');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = `${Math.random() * 100}vw`;
        emoji.style.top = `${Math.random() * 100}vh`;
        emojisContainer.appendChild(emoji);
    }

    emojisContainer.addEventListener('mousemove', function(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        emojis = emojis.map(emoji => {
            const distance = Math.sqrt(
                Math.pow(mouseX - emojisContainer.offsetWidth / 2, 2) +
                Math.pow(mouseY - emojisContainer.offsetHeight / 2, 2)
            );

            if (distance < 150) {
                return '🌊'; // Change to wave emoji when cursor is near
            } else {
                return emoji;
            }
        });

        updateEmojis();
    });

    function updateEmojis() {
        const emojiElements = emojisContainer.querySelectorAll('.emoji');
        emojiElements.forEach((emojiElement, index) => {
            emojiElement.textContent = emojis[index];
        });
    }
});
