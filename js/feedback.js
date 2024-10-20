let selectedRating = 0;

document.querySelectorAll('.star').forEach(star => {
    // Hover effect to progressively highlight stars
    star.addEventListener('mouseover', function() {
        highlightStars(this.getAttribute('data-value'));
    });

    // When the user clicks to select a rating
    star.addEventListener('click', function() {
        selectedRating = this.getAttribute('data-value');
        setSelectedStars(selectedRating); // Save the final selection
    });
});

// Reset the hover effect when mouse leaves the stars
document.querySelector('.stars').addEventListener('mouseout', function() {
    highlightStars(selectedRating); // Re-highlight based on final selection
});

function highlightStars(rating) {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= rating) {
            star.classList.add('hovered');
        } else {
            star.classList.remove('hovered');
        }
    });
}

function setSelectedStars(rating) {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

function submitFeedback() {
    const message = document.getElementById('feedback-message').value;
    if (selectedRating === 0) {
        alert('Please select a star rating');
        return;
    }
    if (message.trim() === "") {
        alert('Please write a feedback message');
        return;
    }
    alert(`Feedback submitted with a rating of ${selectedRating} stars and the message: "${message}"`);
    location.reload(); // Refresh the page after submitting
}
