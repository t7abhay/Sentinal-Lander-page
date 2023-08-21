document.addEventListener('DOMContentLoaded', function() {
    const emojiCount = 50;
    const emojis = ['🎉', '😄', '🚀', '🌟', '❤️', '😊', '🎈', '🐱', '🍕', '🚲', '🍦', '🌺', '🌞', '🍓', '🎵', '🍭', '🍂', '🎓', '🏄‍♂️', '🎁', '🌍', '🐶', '🏆', '🍔', '🍀', '🎮', '🌹', '⚡️', '🍒', '📚', '🌄', '🚢', '🐰', '🎤', '🚁', '🍎', '🐢', '🎃', '🍒', '🌼', '🎊', '🌴', '🍁', '🍌', '🍂', '🌈', '🏀'];

    const emojisContainer = document.querySelector('.emojis-container');
    const distanceThreshold = 150;

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

        emojis.forEach((emoji, index) => {
            const distance = Math.sqrt(
                Math.pow(mouseX - emojisContainer.offsetWidth / 2, 2) +
                Math.pow(mouseY - emojisContainer.offsetHeight / 2, 2)
            );

            if (distance < distanceThreshold) {
                emojis[index] = '🌊'; // Change to wave emoji when cursor is near
            } else {
                emojis[index] = '🎉'; // Change back to original emoji
            }
        });

        updateEmojis();
    });

    function updateEmojis() {
        emojisContainer.innerHTML = emojis.map(emoji => `<span class="emoji">${emoji}</span>`).join('');
    }
});
