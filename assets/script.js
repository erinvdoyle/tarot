
/* Tarot Reading */

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
 * Play card shuffle sound 
 */

document.getElementById('tarot-deck').addEventListener('click', playShuffleSound);

function playShuffleSound() {
    const shuffleSound = document.getElementById('shuffle-sound');
    shuffleSound.play();
}  

/* Tarot Deck Array */
const tarotDeck = [
    {
      name: "The Hierophant",
      image: "assets/images/cards/hierophant.png",
      meaning: "Seek guidance from wise mentors and authorities. Follow traditions and societal norms. Engage in spiritual practices and rituals. Maintain a sense of order and structure."
    },
    {
      name: "Justice",
      image: "assets/images/cards/justice.png",
      meaning: "Seek fairness, balance and accountability. Make decisions based on logic, reason and ethics. Take responsibility for your actions and their consequences. Karma is at play."
    }, 
    {
      name: "The Lovers",
      image: "assets/images/cards/lovers.png",
      meaning: "Celebrate your intimate relationships and connections. Make choices that align with your values and beliefs. Embrace duality and find balance between opposites. Love and harmony abound."
    },
    {
      name: "Strength",
      image: "assets/images/cards/strength.png",
      meaning: "Tap into your inner courage, compassion and self-control. Face your fears and challenges with bravery and resilience. Tame your wild impulses and find the strength to persevere."
    },
    {
      name: "The Chariot",
      image: "assets/images/cards/thechariot.png",
      meaning: "Harness your willpower and determination to achieve your goals. Maintain control over your emotions and impulses. Overcome obstacles and move forward with confidence. Victory is yours!"
    },
    {
      name: "The Emperor",
      image: "assets/images/cards/theemperor.png",
      meaning: "Take charge of your life and make decisive decisions. Establish boundaries and structures to create order and stability. Use your authority and leadership skills to guide others."
    },
    {
      name: "The Fool",
      image: "assets/images/cards/thefool.png",
      meaning: "You are about to embark on an exciting new adventure! Embrace your inner child and approach life with optimism, curiosity and a sense of wonder. Don't overthink things - just go with the flow and see where your journey takes you."
    },
    {
      name: "The Hermit",
      image: "assets/images/cards/thehermit.png",
      meaning: "Seek solitude and introspection to gain clarity and wisdom. Turn inward to find your own answers and truths. Shine your light to guide others on their path. Solitude and self-reflection are healing."
    },
    {
      name: "The Tower",
      image: "assets/images/cards/thetower.png",
      meaning: "Sudden upheaval, chaos and destruction lead to liberation. Shake up the status quo and break down rigid structures. Unexpected change and revelations are coming. Let go and start anew."
    },
    {
      name: "The World",
      image: "assets/images/cards/theworld.png",
      meaning: "Celebrate your achievements and the completion of a major life cycle. Embrace wholeness, fulfillment and a sense of belonging. Travel, education and cultural exchange are favored. Enjoy a sense of closure and satisfaction."
    },
    {
      name: "The Wheel of Fortune",
      image: "assets/images/cards/wheeloffortune.png",
       meaning: "Embrace the ups and downs of life with grace and acceptance. Fate is on your side as you ride the ever-turning wheel. Good luck and unexpected opportunities are coming your way. Go with the flow."
    } 
  ];

/**
 * Shuffle an array
 */

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Draws the card with flip action and sound effect
 */

function drawCard() {
    const drawAudio = new Audio("assets/media/draw.mp3");
    drawAudio.play();

    const shuffledDeck = shuffleArray(tarotDeck);
    const randomIndex = Math.floor(Math.random() * shuffledDeck.length);
    currentCard = shuffledDeck[randomIndex];

    const cardImage = document.querySelector(".cardFront img");
    const tarotCardElement = document.querySelector(".card");
    
    cardImage.src = currentCard.image;
    const cardName = document.getElementById("card-name");
    cardName.childNodes[0].nodeValue = currentCard.name; 

    tarotCardElement.classList.remove('flipped');

    const drawButton = document.getElementById("draw");
    const redrawButton = document.getElementById("redraw");
    drawButton.style.display = 'none';
    redrawButton.style.display = 'inline-block';

    const shuffleSound = document.getElementById('shuffle-sound');
    shuffleSound.pause();
    shuffleSound.currentTime = 0;
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
const tarotCardElement = document.getElementById('tarot-draw');

/**
 * Toggle buttons displays tarot card on click
 */

function displayCard() {
const tarotInstructions = document.getElementById("tarot-reading");
tarotInstructions.style.display = "none";
tarotCardElement.style.display = 'flex';
}

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
    pointsElement.style.backgroundColor = 'goldenrod';
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

    nextQuestionButton.classList.remove('hidden');
    if (currentQuestionIndex < tenQuestions.length - 1) {
        nextQuestionButton.innerText = "Next"; 
    } else {
        nextQuestionButton.innerText = "Results";
    }
    
    if (!audio.mute) {
        audio.correctAudio.ended = () => {
            nextQuestionButton.disabled = false; 
        };
        audio.incorrectAudio.ended = () => {
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
        questionsElement.innerText = 'Titan of Tarot!';
        resultsBlurb.innerText = "Your tarot knowledge is so impressive, even the cards are taking notes. Shine bright, wise one. Your intuition is sharper than a freshly shuffled deck.";
      } else if (score <= 3) {
        questionsElement.innerText = 'Mystical misfire!';
        resultsBlurb.innerText = "The cards may not have aligned in your favor this time, but everything happens for a reason. Your skills need a little divination dust, but the universe is laughing with you not at you. Promise.";
      } else {
        questionsElement.innerText = 'Average oracle!';
        resultsBlurb.innerText = "You've achieved “Moderately Mystical” status. Not quite a master, but definitely no wandering fool either. Keep your tarot deck close and your curiosity closer.";
      }
    pointsElement.innerText = `Your final score: ${score} out of 10!`;
    resultsContent.style.display = 'flex';
    pointsElement.classList.remove('hidden');
    nextQuestionButton.classList.add('hidden');
}


