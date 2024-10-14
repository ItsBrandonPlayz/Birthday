document.addEventListener('DOMContentLoaded', () => {
    const confettiBtn = document.getElementById('confetti-btn');
    const birthdayMusic = new Audio('https://www.soundjay.com/misc/sounds/happy-birthday-music-box-1.mp3');
    let clickCount = 0;
    
    confettiBtn.addEventListener('click', () => {
        clickCount++;
        
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
        
        const hornSound = new Audio('https://www.soundjay.com/misc/sounds/birthday-horn-1.mp3');
        hornSound.play();
        
        // Play birthday music
        birthdayMusic.currentTime = 0; // Reset the audio to the beginning
        birthdayMusic.play();
        
        if (clickCount === 2) {
            showYoutubeLink();
        }
    });
    
    function showYoutubeLink() {
        const linkContainer = document.createElement('div');
        linkContainer.innerHTML = `
            <p>Here's a special video for you, Mom!</p>
            <a href="https://youtube.com/shorts/uoGN1M1nlQ8?si=F4VJWa1zBZKR71At" target="_blank">Click here for your surprise video!</a>
        `;
        linkContainer.style.marginTop = '20px';
        document.querySelector('.container').appendChild(linkContainer);
    }
});
