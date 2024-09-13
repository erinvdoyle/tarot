/* Tarot Reading Section */

let isDrawButtonClicked = true;

/**
 * Play card shuffle sound 
/* Tutorial for playing a sound with JavaScript: https://sabe.io/blog/javascript-play-sound-audio */

function playShuffleSound() {
	const shuffleSound = document.getElementById('shuffle-sound');
	shuffleSound.play();

	if (!isDrawButtonClicked) {
		drawCard();
	}
}

/* Tarot Deck Array */
/* Image Credit for all Tarot Cards: freepik.com */

const tarotDeck = [{
		name: "The Hierophant",
		image: "assets/images/cards/hierophant.webp",
		meaning: "Seek guidance from wise mentors and authorities. Follow traditions and societal norms. Engage in spiritual practices and rituals. Maintain a sense of order and structure."
	},
	{
		name: "Justice",
		image: "assets/images/cards/justice.webp",
		meaning: "Seek fairness, balance and accountability. Make decisions based on logic, reason and ethics. Take responsibility for your actions and their consequences. Karma is at play."
	},
	{
		name: "The Lovers",
		image: "assets/images/cards/lovers.webp",
		meaning: "Celebrate your intimate relationships and connections. Make choices that align with your values and beliefs. Embrace duality and find balance between opposites. Love and harmony abound."
	},
	{
		name: "Strength",
		image: "assets/images/cards/strength.webp",
		meaning: "Tap into your inner courage, compassion and self-control. Face your fears and challenges with bravery and resilience. Tame your wild impulses and find the strength to persevere."
	},
	{
		name: "The Chariot",
		image: "assets/images/cards/thechariot.webp",
		meaning: "Harness your willpower and determination to achieve your goals. Maintain control over your emotions and impulses. Overcome obstacles and move forward with confidence. Victory is yours!"
	},
	{
		name: "The Emperor",
		image: "assets/images/cards/theemperor.webp",
		meaning: "Take charge of your life and make decisive decisions. Establish boundaries and structures to create order and stability. Use your authority and leadership skills to guide others."
	},
	{
		name: "The Fool",
		image: "assets/images/cards/thefool.webp",
		meaning: "You are about to embark on an exciting new adventure! Embrace your inner child and approach life with optimism, curiosity and a sense of wonder. Don't overthink things - just go with the flow and see where your journey takes you."
	},
	{
		name: "The Hermit",
		image: "assets/images/cards/thehermit.webp",
		meaning: "Seek solitude and introspection to gain clarity and wisdom. Turn inward to find your own answers and truths. Shine your light to guide others on their path. Solitude and self-reflection are healing."
	},
	{
		name: "The Tower",
		image: "assets/images/cards/thetower.webp",
		meaning: "Sudden upheaval, chaos and destruction lead to liberation. Shake up the status quo and break down rigid structures. Unexpected change and revelations are coming. Let go and start anew."
	},
	{
		name: "The World",
		image: "assets/images/cards/theworld.webp",
		meaning: "Celebrate your achievements and the completion of a major life cycle. Embrace wholeness, fulfillment and a sense of belonging. Travel, education and cultural exchange are favored. Enjoy a sense of closure and satisfaction."
	},
	{
		name: "Wheel of Fortune",
		image: "assets/images/cards/wheeloffortune.webp",
		meaning: "Embrace the ups and downs of life with grace and acceptance. Fate is on your side as you ride the ever-turning wheel. Good luck and unexpected opportunities are coming your way. Go with the flow."
	},
	{
		name: "The Fool REVERSED",
		image: "assets/images/cards/thefoolreversed.webp",
		meaning: "You may be feeling stuck in a rut or afraid to take risks. It's time to break free from your self-imposed limitations and get out of your comfort zone. Shake things up and try something new!"
	},
	{
		name: "The Magician REVERSED",
		image: "assets/images/cards/themagicianreversed.webp",
		meaning: "You may be feeling powerless or lacking in motivation. Avoid trying to manipulate others or using your skills for selfish reasons. Instead, find ways to empower yourself and use your abilities for good."
	},
	{
		name: "The High Priestess REVERSED",
		image: "assets/images/cards/thehighpriestessreversed.webp",
		meaning: "You may be ignoring your intuition or suppressing your emotions. Avoid getting caught up in gossip or spreading secrets. It's time to be more open and honest with yourself and others."
	},
	{
		name: "The Empress REVERSED",
		image: "assets/images/cards/empressreversed.webp",
		meaning: "You may be neglecting your own needs or feeling smothered by others. Avoid being overly controlling or indulgent. It's time to find a healthy balance between giving and receiving."
	},
	{
		name: "The Emperor REVERSED",
		image: "assets/images/cards/theemperorreversed.webp",
		meaning: "You may be feeling like you've lost control or that others are taking advantage of you. Avoid being too rigid or domineering. It's time to be more flexible and collaborative."
	},
	{
		name: "The Hierophant REVERSED",
		image: "assets/images/cards/hierophantreversed.webp",
		meaning: "You may be rebelling against rules and institutions. Avoid blindly following the crowd or being too conventional. It's time to think outside the box and find your own path."
	},
	{
		name: "The Lovers REVERSED",
		image: "assets/images/cards/loversreversed.webp",
		meaning: "You may be experiencing relationship challenges or inner conflicts. Avoid making decisions based on fear or lust. It's time to communicate openly, compromise and find common ground."
	},
	{
		name: "The Chariot REVERSED",
		image: "assets/images/cards/thechariotreversed.webp",
		meaning: "You may be feeling out of control or pulled in different directions. Avoid being overly aggressive or bulldozing your way through challenges. It's time to find balance and work with others."
	},
	{
		name: "Strength REVERSED",
		image: "assets/images/cards/strengthreversed.webp",
		meaning: "You may be feeling weak, timid or lacking in confidence. Avoid being overly aggressive or domineering. It's time to be more gentle, patient and understanding with yourself and others."
	},
	{
		name: "The Hermit REVERSED",
		image: "assets/images/cards/thehermitreversed.webp",
		meaning: "You may be feeling isolated, lonely or disconnected. Avoid withdrawing completely from the world. It's time to reach out to others, share your knowledge and connect in meaningful ways."
	},
	{
		name: "Wheel of Fortune REVERSED",
		image: "assets/images/cards/wheeloffortunereversed.webp",
		meaning: "You may be feeling stuck in a rut or that you have no control over your circumstances. Avoid trying to manipulate the wheel. It's time to be more adaptable and resilient in the face of change."
	},

	{
		name: "Justice REVERSED",
		image: "assets/images/cards/justicereversed.webp",
		meaning: "You may feel that the scales are tipped unfairly in someone else's favor. Avoid being too harsh or rigid in your judgments. It's time to find compromise and see things from a different perspective."
	},

	{
		name: "The Hanged Man REVERSED",
		image: "assets/images/cards/thehangedmanreversed.webp",
		meaning: "You may be feeling stuck, frustrated or unwilling to make sacrifices. Avoid being too stubborn or rigid in your thinking. It's time to let go, be more flexible and see the bigger picture."
	},

	{
		name: "Death REVERSED",
		image: "assets/images/cards/deathreversed.webp",
		meaning: "You may be resisting necessary endings or fearing change. Avoid clinging to the past or denying the inevitable. It's time to let go, grieve losses, and embrace the new."
	},
	{
		name: "Temperance REVERSED",
		image: "assets/images/cards/temperancereversed.webp",
		meaning: "You may be feeling impatient, intolerant or out of balance. Avoid extremes and excess. It's time to slow down, find the middle ground and bring different aspects of yourself into harmony."
	},
	{
		name: "The Devil REVERSED",
		image: "assets/images/cards/thedevilreversed.webp",
		meaning: "You may be in denial about your shadow side or feeling trapped by your own negative thoughts and behaviors. Avoid blaming others for your problems. It's time to take responsibility and find the courage to change."
	},
	{
		name: "The Tower REVERSED",
		image: "assets/images/cards/thetowerreversed.webp",
		meaning: "You may be resisting necessary change or fearing the unknown. Avoid clinging to the past or denying the inevitable. It's time to let go, adapt and rebuild in the aftermath of crisis."
	},
	{
		name: "The Star REVERSED",
		image: "assets/images/cards/thestarreversed.webp",
		meaning: "You may be feeling disillusioned, hopeless or disconnected from your spiritual side. Avoid dwelling on negative thoughts or giving up on your dreams. It's time to nurture your inner light and have faith in the future."
	},
	{
		name: "The Moon REVERSED",
		image: "assets/images/cards/themoonreversed.webp",
		meaning: "You may be feeling paranoid, confused or disconnected from your intuition. Avoid getting caught up in your own fantasies or being misled by others. It's time to face reality, ground yourself and trust your instincts."
	},
	{
		name: "The Sun REVERSED",
		image: "assets/images/cards/thesunreversed.webp",
		meaning: "You may be feeling down, pessimistic or lacking in confidence. Avoid dwelling on failures or comparing yourself to others. It's time to focus on the positives, express your authentic self and spread your sunshine."
	},
	{
		name: "Judgement REVERSED",
		image: "assets/images/cards/judgementreversed.webp",
		meaning: "You may be feeling guilty, ashamed or unwilling to face your past mistakes. Avoid being overly critical of yourself or others. It's time to forgive, let go and move forward with a clean slate."
	},
	{
		name: "The World REVERSED",
		image: "assets/images/cards/theworldreversed.webp",
		meaning: "You may be feeling stuck in a rut, unfulfilled or disconnected from the bigger picture. Avoid getting bogged down in the details or losing sight of your goals. It's time to expand your horizons, learn new things and find a greater sense of purpose."
	},
	{
		name: "The Magician",
		image: "assets/images/cards/themagician.webp",
		meaning: "You have all the tools and abilities you need to manifest your desires. Channel your energy and willpower to make things happen. Stay focused and don't let distractions derail you from your goals."
	},
	{
		name: "The High Priestess",
		image: "assets/images/cards/thehighpriestess.webp",
		meaning: "Trust your intuition and inner wisdom. Listen to the quiet voice within that guides you. Dive deep into your subconscious and explore the mysteries of life. Maintain healthy boundaries."
	},
	{
		name: "The Empress",
		image: "assets/images/cards/empress.webp",
		meaning: "Embrace your feminine energy and creativity. Nurture yourself and others with love and compassion. Enjoy the simple pleasures in life and connect with nature. Abundance and fertility are yours."
	},
	{
		name: "The Hanged Man",
		image: "assets/images/cards/thehangedman.webp",
		meaning: "Surrender, let go and see things from a new angle. Embrace a new perspective and allow things to unfold in their own time. Sacrifice and patience are required. Enlightenment comes through surrender."
	},
	{
		name: "Death",
		image: "assets/images/cards/death.webp",
		meaning: "Endings lead to new beginnings. Let go of what no longer serves you to make room for transformation. Embrace change and the cycle of life. Regeneration and rebirth are at hand."
	},
	{
		name: "Temperance",
		image: "assets/images/cards/temperance.webp",
		meaning: "Blend opposites to create harmony. Find balance, moderation and patience in all things. Combine your skills and resources to create something new. Healing and wholeness are yours."
	},
	{
		name: "The Devil",
		image: "assets/images/cards/thedevil.webp",
		meaning: "Face your fears, addictions and dark impulses. Confront the shadow aspects of yourself and others. Break free from self-imposed limitations and unhealthy attachments. Reclaim your power."
	},
	{
		name: "The Star",
		image: "assets/images/cards/thestar.webp",
		meaning: "Hope, inspiration and healing are on the horizon. Trust that your wishes will be granted as you move forward with optimism. Connect with your higher self and the divine. Serenity and rejuvenation are yours."
	},
	{
		name: "The Moon",
		image: "assets/images/cards/themoon.webp",
		meaning: "Tap into your intuition and subconscious. Face your fears and illusions. Embrace the unknown and the mysteries of life. Creativity and imagination are heightened. Beware of deception."
	},
	{
		name: "The Sun",
		image: "assets/images/cards/thesun.webp",
		meaning: "Bask in the light of joy, success and optimism. Celebrate your accomplishments and share your radiance with others. Embrace your inner child and find pleasure in simple things. Happiness and vitality abound."
	},
	{
		name: "Judgement",
		image: "assets/images/cards/judgement.webp",
		meaning: "Heed the call to awaken, transform and rise again. Take responsibility for your past actions and make amends. Embrace a new life purpose and spiritual calling. Redemption and rebirth are at hand."
	}
];

let currentCard = null;
let resultsContent = null;


/**
 * Shuffle an array
 * Tutorial Credit: https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/ 
 */

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

/* Tutorial Credit: https://code-hl.com/javascript/tutorials/how-to-play-sound-with-javascript */
/* https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript */
/* https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes */

/**
 * Draws the card with flip action and sound effect
 */

const tapMeaning = document.querySelector("#tap-meaning");

function drawCard() {
	drawAudio.play();

	const shuffledDeck = shuffleArray(tarotDeck);
	const randomIndex = Math.floor(Math.random() * shuffledDeck.length);
	currentCard = shuffledDeck[randomIndex];

	const cardImage = document.querySelector(".cardFront img");
	const tarotCardElement = document.querySelector(".card");

	cardImage.src = currentCard.image;
	const cardName = document.getElementById("card-name");
	cardName.childNodes[0].nodeValue = `${currentCard.name}!`;

	tarotCardElement.classList.remove('flipped');

	const tapMeaning = document.querySelector("#tap-meaning");
	tapMeaning.classList.remove('hidden');

	const drawButton = document.getElementById("draw");
	const redrawButton = document.getElementById("redraw");
	drawButton.style.display = 'none';
	redrawButton.style.display = 'inline-block';
	tapMeaning.classList.remove('hidden');

	const shuffleSound = document.getElementById('shuffle-sound');
	shuffleSound.pause();
	shuffleSound.currentTime = 0;

	isDrawButtonClicked = false;
}

document.getElementById('tarot-deck').addEventListener('click', function() {
	if (isDrawButtonClicked) {
		playShuffleSound();
	}
});

document.getElementById("redraw").addEventListener("click", function() {
	playShuffleSound();
});

/**
 * Shows the meaning of the drawn card
 */

function showMeaning() {
	const cardMeaning = document.getElementById("card-meaning");
	const tarotCardElement = document.querySelector(".card");

	if (cardMeaning && currentCard) {
		cardMeaning.textContent = currentCard.meaning;
		cardMeaning.classList.add('show');

		tarotCardElement.classList.add('flipped');
		tapMeaning.classList.add('hidden');


		tarotCardElement.onclick = null;
	}
}

const cardImageElement = document.querySelector(".cardFront img");
if (cardImageElement) {
	cardImageElement.addEventListener("click", showMeaning);
}

/**
 * Toggle buttons displays tarot card on click
 */

function displayCard() {
	const readingDiv = document.getElementById("tarot-reading");
	readingDiv.style.display = "none";
	const drawDiv = document.getElementById("tarot-draw");
	drawDiv.style.display = "flex";
}

document.getElementById("draw").addEventListener("click", drawCard);

document.getElementById("reading-button").addEventListener("click", displayReading);

document.getElementById("tarot-reading-button").addEventListener("click", displayCard);

/**
 * Toggle button displays the Tarot Reading div on click
 *  Tutorial Credit: W3 Schools: How TO - Toggle Hide and Show 
 */

function displayReading() {
	var readingDiv = document.getElementById("tarot-reading");
	readingDiv.style.display = "block";
}

/**
 * Toggle sound on or off
 */

let isSoundOn = true;

const shuffleSound = document.getElementById('shuffle-sound');
const drawAudio = new Audio("assets/media/draw.mp3");

function toggleSound() {
	if (isSoundOn) {
		shuffleSound.muted = true;
		drawAudio.muted = true;
		const volumeIcon = document.getElementById('draw-audio');
		volumeIcon.classList.remove('fa-volume-high');
		volumeIcon.classList.add('fa-volume-xmark');
		isSoundOn = false;
	} else {
		shuffleSound.muted = false;
		drawAudio.muted = false;
		const volumeIcon = document.getElementById('draw-audio');
		volumeIcon.classList.remove('fa-volume-xmark');
		volumeIcon.classList.add('fa-volume-high');
		isSoundOn = true;
	}
}

const audioToggleButton = document.getElementById('draw-audio');
audioToggleButton.addEventListener('click', toggleSound);


/* Tarot Quiz Section */


/* JS for Quiz guided by:
 Tutorial from Code with Farraz: "Build a Quiz Application with HTML, CSS, and JavaScript" 
 Web Dev Simplified: Build a Quiz App with JavaScript https://youtu.be/riDzcEQbX6k 
 Brian Design: How to Make a Quiz App using HTML CSS Javascript - Vanilla Javascript Project for Beginners Tutorial https://www.youtube.com/watch?v=f4fB9Xg2JEY 
 Tutorial credit: https://youtu.be/xZXW5SnCiWI 
 https://medium.com/@codepicker57/building-an-interactive-quiz-with-html-css-and-javascript */

/* Array of quiz questions and answers */

const questions = [{
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
		options: ["Authority and control", "Wisdom and knowledge", "Nurturing and fertility", "Illusions and deception"],
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
const resultsBlurb = document.getElementById('results-blurb');

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

/** 
 * Toggle button displays quiz on click  
 */

function displayQuiz() {
	const quizInstructions = document.getElementById("quiz-instructions");
	quizInstructions.style.display = "none";


	resultsContent = document.getElementById('quiz-results');
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
			questions[randomIndex], questions[currentIndex]
		];
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

/** Mutes or enables audio via toggle button 
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

/** 
 * Displays Final Score */

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

	const playAgainButton = document.getElementById('play-again-button');
	playAgainButton.classList.remove('hidden');
	playAgainButton.onclick = function() {
		resetQuiz();
		playAgainButton.classList.add('hidden');
	};
}

/** 
 * Resets the quiz so that play again button starts quiz anew
 */

function resetQuiz() {
	score = 0;
	currentQuestionIndex = 0;
	tenQuestions = shuffle(questions);
	resultsContent.style.display = 'none';
	tarotQuizElement.style.display = 'flex';
	pointsElement.classList.add('hidden');
	nextQuestionButton.classList.remove('hidden');
	showQuestion();
}