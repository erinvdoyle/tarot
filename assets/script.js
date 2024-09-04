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
   Brian Design: How to Make a Quiz App using HTML CSS Javascript - Vanilla Javascript Project for Beginners Tutorial https://www.youtube.com/watch?v=f4fB9Xg2JEY 
   Tutorial credit: https://youtu.be/xZXW5SnCiWI 
   https://medium.com/@codepicker57/building-an-interactive-quiz-with-html-css-and-javascript */


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
const resultsContent = document.getElementById('quiz-results');
const resultsBlurb = document.getElementById('results-blurb');


/** 
 * Toggle button displays quiz on click  
*/

function displayQuiz() {
    const quizInstructions = document.getElementById("quiz-instructions");
    quizInstructions.style.display = "none";
    resultsContent.style.display = 'none';
    tarotQuizElement.style.display = 'flex';
    currentQuestionIndex = 0;
    score = 0;
    shuffle(questions);
    pointsElement.classList.add('hidden');
    showQuestion();
}


/** 
 * Allows user to exit out of quiz */

function exitQuiz() {
    tarotQuizElement.style.display = 'none';
    resetState();
}

document.getElementById('quiz-button-back').addEventListener('click', exitQuiz);


/**
 * Chooses ten questions from the questions array at random
 * Tutorial credit: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */

function shuffle(questions) {
    let currentIndex = questions.length;
  
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [questions[currentIndex], questions[randomIndex]] = [
        questions[randomIndex], questions[currentIndex]];
    }
    return questions.slice(0, 10);
  }

let tenQuestions = shuffle(questions);

/**
 * Displays the question to be answered
 */

function showQuestion() {
    resetState();
    const currentQuestion = tenQuestions[currentQuestionIndex];
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
 * Resets answers for the next question when Next Question button is clicked
 */

function resetState() {
    nextQuestionButton.classList.add('hidden');
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild);
    }
    pointsElement.style.backgroundColor = '#fdeca6';
}


/* Tutorial for playing a sound with JavaScript: https://sabe.io/blog/javascript-play-sound-audio */

let audio = {
    mute: false,
    correctAudio: new Audio('assets/media/correct.mp3'),
    incorrectAudio: new Audio('assets/media/incorrect.mp3')
};


/** Mutes or enables audio via toggle button */
/* function code based off of Marcus Eriksson's muteAudio(): https://github.com/worldofmarcus/project-portfolio-2 */ 

function soundOff() {
    let audioIcon = document.getElementById('speaker-icon');
    audio.mute = !audio.mute; 
    audioIcon.classList = audio.mute ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high';
    audio.correctAudio.muted = audio.mute;
    audio.incorrectAudio.muted = audio.mute;
}
    nextQuestionButton.addEventListener('click', () => {
        if (currentQuestionIndex < tenQuestions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            showScore(); 
        }
    });   

/**
 * Increments point tally on correct and incorrect questions as each question is answered
 */


function selectOption(selectedIndex) {
    const currentQuestion = tenQuestions[currentQuestionIndex];
    const correctIndex = currentQuestion.answer;

    Array.from(answersElement.children).forEach((button, index) => {
        button.disabled = true;
        if (index === correctIndex) {
            button.classList.add('correct');
            button.style.backgroundColor = '#9cd883';
        } else {
            button.classList.add('incorrect');
            button.style.backgroundColor = '#ed786c'; 
        }
    });

    if (selectedIndex === correctIndex) {
        score++;
        if (!audio.mute) {
            audio.correctAudio.play();
        }
        pointsElement.style.backgroundColor = '#9cd883';
    } else {
        if (!audio.mute) {
            audio.incorrectAudio.play();
        }
        pointsElement.style.backgroundColor = '#ed786c';
    }

    pointsElement.innerText = `Your Score: ${score} out of ${currentQuestionIndex + 1}`;
    pointsElement.classList.remove('hidden');
    if (currentQuestionIndex < tenQuestions.length - 1) {
        nextQuestionButton.classList.remove('hidden');
        nextQuestionButton.disabled = false; 
    } else {
        showScore();
    }
    
    if (!audio.mute) {
        audio.correctAudio.onended = () => {
            nextQuestionButton.disabled = false; 
        };
        audio.incorrectAudio.onended = () => {
            nextQuestionButton.disabled = false; 
        };
    } else {
        nextQuestionButton.disabled = false;
    }
}

/** Displays Final Score */

function showScore() {
    resetState();
      if (score >= 7) {
        questionsElement.innerText = 'Quiz Complete!';
        resultsBlurb.innerText = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum i";
      } else if (score <= 3) {
        questionsElement.innerText = 'Bad Tarot!';
        resultsBlurb.innerText = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum i";
      } else {
        questionsElement.innerText = 'Doing ok';
        resultsBlurb.innerText = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum i";
      }
    pointsElement.innerText = `Your final score: ${score} out of 10!`;
    resultsContent.style.display = 'flex';
    pointsElement.classList.remove('hidden');
    nextQuestionButton.classList.add('hidden');
}


