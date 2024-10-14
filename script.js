function downloadImage(imageUrl) {
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = 'spike.png'; // Numele fișierului care va fi descărcat
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
function checkAnswers() {
    const correctAnswers = document.getElementById('answers').value;
    const message = document.getElementById('message');
    const minimumCorrect = 5;

    if (correctAnswers >= minimumCorrect) {
        message.style.color = 'green';
        message.textContent = "Glückwunsch! Du bist zum nächsten Level gegangen.";
        window.open('spike.png');
        window.location.href = "Nivel2.html";
        
    } else {
        message.style.color = 'red';
        message.textContent = `Du brauchst mindestens ${minimumCorrect} Richtige Antworten, um zum nächsten Level zu gelangen. `;
    }
}
