document.addEventListener('DOMContentLoaded', function() {
    let applicationCount = 0;
    const countLabel = document.getElementById('count');
    const incrementButton = document.getElementById('incrementButton');
    const emojiLabel = document.getElementById('emoji');

    incrementButton.addEventListener('click', function() {
        applicationCount++;
        countLabel.textContent = `Applications Applied: ${applicationCount}`;
        emojiLabel.classList.remove('hidden');
        setTimeout(function() {
            emojiLabel.classList.add('hidden');
        }, 3000);
    });
});
