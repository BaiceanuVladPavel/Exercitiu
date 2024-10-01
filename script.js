function checkAnswer(correctAnswer, nextLevel) {
    const userAnswer = document.getElementById('answer').value.trim();
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        alert('Corect! Te îndrepți spre următorul nivel.');
        window.location.href = nextLevel;
    } else {
        alert('Răspuns greșit! Încearcă din nou.');
    }
}
