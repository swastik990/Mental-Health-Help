// quiz.js

let currentSet = 1; // Track the current question set

// Show the first question set initially
document.getElementById(`set${currentSet}`).style.display = 'block';

function nextSet(next) {
    // Hide the current question set
    document.getElementById(`set${currentSet}`).style.display = 'none';

    // Show the next question set
    currentSet = next;
    document.getElementById(`set${currentSet}`).style.display = 'block';
}

function calculateResults() {
    // Hide question sets and show results
    document.querySelectorAll('.question-set').forEach(set => {
        set.style.display = 'none'; // Ensure all question sets are hidden
    });

    const resultsContainer = document.getElementById('results');
    const resultCards = document.getElementById('result-cards');
    resultCards.innerHTML = ''; // Clear previous results

    // Calculate results based on selected answers
    let score = 0;
    for (let i = 1; i <= 6; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedAnswer) {
            score += parseInt(selectedAnswer.value);
        }
    }

    // Display score and feedback
    let feedback;
    if (score <= 6) {
        feedback = 'You are doing well! Keep it up!';
    } else if (score <= 12) {
        feedback = 'You might want to take a break and reflect.';
    } else {
        feedback = 'Consider seeking professional help for better support.';
    }

    const resultCard = document.createElement('div');
    resultCard.classList.add('result-card');
    resultCard.innerHTML = `<h3>Your Score: ${score}</h3><p>${feedback}</p>`;
    resultCards.appendChild(resultCard);

    resultsContainer.style.display = 'block'; // Show results
}
