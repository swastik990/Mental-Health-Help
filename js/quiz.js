const question = {
    data: [
        {
            statement: "Have you been feeling down or hopeless lately?",
            answer: true,
            reason: "Feeling down or hopeless is one of the signs of depression."
        },
        {
            statement: "Have you lost interest in activities you once enjoyed?",
            answer: true,
            reason: "Losing interest in activities is a sign of potential mental health concerns."
        },
        {
            statement: "Do you find it hard to concentrate on tasks most of the time?",
            answer: true,
            reason: "Trouble concentrating may be a sign of anxiety or depression."
        },
        {
            statement: "Have you been feeling excessively anxious or worried?",
            answer: true,
            reason: "Constant worrying can indicate an anxiety disorder."
        },
        {
            statement: "Have you been sleeping too much or too little recently?",
            answer: true,
            reason: "Changes in sleep patterns can be linked to mental health issues."
        },
        {
            statement: "Do you feel like you have little control over your life?",
            answer: true,
            reason: "This feeling may be a symptom of anxiety or depression."
        }
    ]
  };
  
  let currentQuestion = 0;
  let score = 0;
  
  function display() {
    let dquestion = document.querySelector(".questiontext");
    dquestion.textContent = question.data[currentQuestion].statement;
  }
  
  function checkAnswer(isYes) {
    const yesButton = document.querySelector(".yes");
    const noButton = document.querySelector(".no");
    const answer = question.data[currentQuestion].answer;
    const hint = document.querySelector(".hint");
  
    if (isYes === answer) {
      yesButton.style.backgroundColor = isYes ? "green" : "red";
      score++;
    } else {
      noButton.style.backgroundColor = isYes ? "red" : "green";
      hint.style.display = "block";
      hint.textContent = question.data[currentQuestion].reason;
    }
  
    disableButtons();
    enableNextQuestion();
  }
  
  function disableButtons() {
    const yesButton = document.querySelector(".yes");
    const noButton = document.querySelector(".no");
  
    yesButton.disabled = true;
    noButton.disabled = true;
  }
  
  function enableNextQuestion() {
    const nextButton = document.querySelector(".nextq");
    nextButton.disabled = false;
  }
  
  function nextQuestion() {
    currentQuestion++;
  
    if (currentQuestion < question.data.length) {
      display();
      resetState();
    } else {
      showFinalScore();
    }
  }
  
  function resetState() {
    const yesButton = document.querySelector(".yes");
    const noButton = document.querySelector(".no");
    const hint = document.querySelector(".hint");
    const nextButton = document.querySelector(".nextq");
  
    yesButton.style.backgroundColor = "#1abc9c";
    noButton.style.backgroundColor = "#e74c3c";
    yesButton.disabled = false;
    noButton.disabled = false;
    nextButton.disabled = true;
    hint.style.display = "none";
    hint.textContent = "";
  }
  
  function showFinalScore() {
    let dquestion = document.querySelector(".questiontext");
    dquestion.textContent = "Assessment Completed!";
    const scoreDisplay = document.createElement("div");
    scoreDisplay.textContent = "Your Score: " + score + "/" + question.data.length;
    dquestion.appendChild(scoreDisplay);
    hideQuiz();
  }
  
  function hideQuiz() {
    const yesButton = document.querySelector(".yes");
    const noButton = document.querySelector(".no");
    const nextButton = document.querySelector(".nextq");
  
    yesButton.style.display = "none";
    noButton.style.display = "none";
    nextButton.style.display = "none";
  }
  
  function init() {
    display();
    document.querySelector(".yes").addEventListener("click", () => checkAnswer(true));
    document.querySelector(".no").addEventListener("click", () => checkAnswer(false));
    document.querySelector(".nextq").addEventListener("click", nextQuestion);
  }
  
  init();
  