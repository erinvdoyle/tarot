/* Tutorial Credit: W3 Schools: How TO - Toggle Hide and Show */

/**
 * Toggle button displays the Tarot Reading div on click
 */

function displayReading() {
    var x = document.getElementById("tarot-reading");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  /**
   * Toggle button displays quiz instructions on click
   */

  function displayInstructions() {
    var x = document.getElementById("quiz-instructions");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }
  

  /* JS for Quiz guided by:
   Tutorial from Code with Farraz: "Build a Quiz Application with HTML, CSS, and JavaScript" 
   Web Dev Simplified: Build a Quiz App with JavaScript https://youtu.be/riDzcEQbX6k 
   Brian Design: How to Make a Quiz App using HTML CSS Javascript - Vanilla Javascript Project for Beginners Tutorial https://www.youtube.com/watch?v=f4fB9Xg2JEY */


  /* Array of quiz questions and answers */

  const questions = [
    {
        question: "What is the number of the Fool card in the Major Arcana?",
        options: ["0", "1", "2", "3"],
        answer: 0
    },
    {
        question: "Which Major Arcana card represents new beginnings and adventures?",
        options: ["The Magician", "The High Priestess", "The Fool", "The Empress"],
        answer: 2
    },
    {
        question: "What does the High Priestess symbolize?",
        options: ["Action and movement", "Intuition and mystery", "Wealth and abundance", "Conflict and struggle"],
        answer: 1
    },
    {
        question: "Which card is known for representing balance and harmony?",
        options: ["The Lovers", "Justice", "The Chariot", "The Wheel of Fortune"],
        answer: 1
    },
    {
        question: "What is the primary theme of The Tower card?",
        options: ["Love and relationships", "Success and achievement", "Spiritual enlightenment", "Sudden upheaval and chaos"],
        answer: 3
    },
    {
        question: "Which Major Arcana card is often associated with transformation and rebirth?",
        options: ["The Death card", "The Hanged Man", "The Emperor", "The Star"],
        answer: 0
    },
    {
        question: "What does The Empress card primarily represent?",
        options: ["Authority and control", "Wisdom and knowledge","Nurturing and fertility", "Illusions and deception"],
        answer: 2
    },
    {
        question: "Which card signifies a journey or movement towards a goal?",
        options: ["The Chariot", "The Hermit", "The Moon", "The Devil"],
        answer: 0
    },
    {
        question: "What does The Devil card often symbolize?",
        options: ["Freedom and liberation", "Hope and inspiration", "Wisdom and insight", "Temptation and materialism"],
        answer: 3
    },
    {
        question: "Which Major Arcana card is associated with introspection and solitude?",
        options: ["The Hanged Man", "The Hermit", "The Fool", "The Emperor"],
        answer: 1
    },
    {
        question: "What does The Lovers card represent in a reading?",
        options: ["Choices and duality", "Conflict and struggle", "Wealth and prosperity", "Spiritual enlightenment"],
        answer: 0
    },
    {
        question: "Which card signifies the end of a cycle and the beginning of a new one?",
        options: ["The Wheel of Fortune", "The Sun", "The World", "The Moon"],
        answer: 2
    },
    {
        question: "What does The Emperor card symbolize?",
        options: ["Chaos and disorder", "Authority and structure", "Intuition and feelings", "Creativity and inspiration"],
        answer: 1
    },
    {
        question: "Which Major Arcana card is often associated with hope and healing?",
        options: ["The Moon", "The Sun", "The Star", "The Hanged Man"],
        answer: 2
    },
    {
        question: "What is the meaning of The Hanged Man?",
        options: ["Stagnation and delay", "Sacrifice and new perspectives", "Action and movement", "Conflict and resolution"],
        answer: 1
    },
    {
        question: "Which card is often seen as a sign of good fortune and destiny?",
        options: ["The Wheel of Fortune", "The Sun", "The Fool", "The Magician"],
        answer: 0
    },
    {
        question: "What does The Moon card represent?",
        options: ["Clarity and truth", "Authority and control", "Conflict and struggle", "Illusion and intuition"],
        answer: 3
    },
    {
        question: "Which card is known for its association with spiritual enlightenment and wisdom?",
        options: ["The High Priestess", "The Hierophant", "The Emperor", "The Lovers"],
        answer: 0
    },
    {
        question: "What does The Sun card symbolize?",
        options: ["Illumination and success", "Confusion and uncertainty", "Fear and anxiety", "Control and authority"],
        answer: 0
    },
    {
        question: "Which Major Arcana card represents the concept of fate and cycles?",
        options: ["The World", "The Wheel of Fortune", "The Chariot", "The Fool"],
        answer: 1
    }
];
 
/* Variables for score and index of question from questions array */

let currentQuestionIndex = 0;
let score = 0;

/* Variables for quiz functionality */

const questionsElement = document.getElementById('questions');
const answersElement = document.getElementById('answers');
const nextQuestionButton = document.getElementById('next-question-button');
const pointsElement = document.getElementById('points');
const tarotQuizElement = document.getElementById('tarot-quiz');
/*const tarotQuizInstructions = document.getElementById('quiz-instructions');*/

/** 
 * Toggle button displays quiz on click  
*/

function displayQuiz() {
    const quizInstructions = document.getElementById("quiz-instructions");
    quizInstructions.style.display = "none";
    tarotQuizElement.style.display = 'flex';
    currentQuestionIndex = 0;
    score = 0;
    nextQuestionButton.classList.add('hidden');
    pointsElement.classList.add('hidden');
    showQuestion();
}

/**
 * Resets answers for the next question when Next Question button is clicked
 */

function resetState() {
    nextQuestionButton.classList.add('hidden');
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild);
    }
}

/**
 * Displays the question to be answered
 */

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionsElement.innerText = currentQuestion.question;

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectOption(index));
        answersElement.appendChild(button);
    });
}

/**
 * Increments point tally on correct and incorrect questions as each question is answered
 */
/* Tutorial for playing a sound with JavaScript: https://sabe.io/blog/javascript-play-sound-audio */

function selectOption(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const correctIndex = currentQuestion.answer;

    const correctAudio = new Audio('assets/media/correct.mp3');
    const incorrectAudio = new Audio('assets/media/incorrect.mp3');


    Array.from(answersElement.children).forEach((button, index) => {
        button.disabled = true;
        if (index === correctIndex) {
            button.classList.add('correct');
            button.style.backgroundColor = 'green';
        } else {
            button.classList.add('incorrect');
            button.style.backgroundColor = '#ed786c'; 
        }
    });

    if (selectedIndex === correctIndex) {
        score++;
        correctAudio.play();
        pointsElement.style.backgroundColor = 'green';
    } else {
        incorrectAudio.play();
        pointsElement.style.backgroundColor = '#ed786c';
    }

    pointsElement.innerText = `Your Score: ${score} out of ${currentQuestionIndex + 1}`;
    pointsElement.classList.remove('hidden');

    nextQuestionButton.classList.remove('hidden');
}

nextQuestionButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});


/** Displays Final Score */

function showScore() {
    resetState();
    questionsElement.innerText = 'Quiz Complete!';
    pointsElement.innerText = `Your final score: ${score} out of ${questions.length}`;
    pointsElement.classList.remove('hidden');
    nextQuestionButton.classList.add('hidden');
}



/** 
 * Allows user to exit out of quiz */

function exitQuiz() {
    tarotQuizElement.style.display = 'none';
    resetState();
}

document.getElementById('quiz-button-back').addEventListener('click', exitQuiz);
