document.addEventListener('DOMContentLoaded', () => {
    const confettiBtn = document.getElementById('confetti-btn');
    const birthdayMusic = new Audio('https://www.soundjay.com/misc/sounds/happy-birthday-music-box-1.mp3');
    
    confettiBtn.addEventListener('click', () => {
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
    });
});
