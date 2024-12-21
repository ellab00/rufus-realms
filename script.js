

fetch('https://dogapi.dog/api/v2/facts')
    .then(response => response.json())
    .then(data => {
        // Assuming the API returns an array of facts
        dogFactParagraph.textContent = data.facts[0];
    })
    .catch(error => {
        dogFactParagraph.textContent = "Sorry, we couldn't fetch a dog fact right now. Try again later!";
        console.error('Error fetching dog fact:', error);
    });


// Interactive Game: Guess Rufus' favorite activity
function checkAnswer(answer) {
    const correctAnswer = 'Playing fetch';
    const resultParagraph = document.getElementById('game-result');

    if (answer === correctAnswer) {
        resultParagraph.textContent = "Correct! Rufus loves playing fetch!";
        resultParagraph.style.color = 'green';
    } else {
        resultParagraph.textContent = "Oops! That's not it. Try again!";
        resultParagraph.style.color = 'red';
    }
}

