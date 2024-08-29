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

  /* JS for Quiz guided by tutorial from Code with Farraz: "Build a Quiz Application with HTML, CSS, and JavaScript" */
  /* Array of quiz questions and answers */

  const questions = [
    {
        question: "What is the number of the Fool card in the Major Arcana?",
        options: ["0", "1", "2", "3"],
        answer: 0
    },
    {
        question: "Which Major Arcana card represents new beginnings and adventures?",
        options: ["The Magician", "The Fool", "The High Priestess", "The Empress"],
        answer: 1
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
        options: ["Love and relationships", "Sudden upheaval and chaos", "Success and achievement", "Spiritual enlightenment"],
        answer: 1
    },
    {
        question: "Which Major Arcana card is often associated with transformation and rebirth?",
        options: ["The Death card", "The Hanged Man", "The Emperor", "The Star"],
        answer: 0
    },
    {
        question: "What does The Empress card primarily represent?",
        options: ["Authority and control", "Nurturing and fertility", "Wisdom and knowledge", "Illusions and deception"],
        answer: 1
    },
    {
        question: "Which card signifies a journey or movement towards a goal?",
        options: ["The Chariot", "The Hermit", "The Moon", "The Devil"],
        answer: 0
    },
    {
        question: "What does The Devil card often symbolize?",
        options: ["Freedom and liberation", "Temptation and materialism", "Hope and inspiration", "Wisdom and insight"],
        answer: 1
    },
    {
        question: "Which Major Arcana card is associated with introspection and solitude?",
        options: ["The Hermit", "The Hanged Man", "The Fool", "The Emperor"],
        answer: 0
    },
    {
        question: "What does The Lovers card represent in a reading?",
        options: ["Choices and duality", "Conflict and struggle", "Wealth and prosperity", "Spiritual enlightenment"],
        answer: 0
    },
    {
        question: "Which card signifies the end of a cycle and the beginning of a new one?",
        options: ["The World", "The Wheel of Fortune", "The Sun", "The Moon"],
        answer: 0
    },
    {
        question: "What does The Emperor card symbolize?",
        options: ["Chaos and disorder", "Authority and structure", "Intuition and feelings", "Creativity and inspiration"],
        answer: 1
    },
    {
        question: "Which Major Arcana card is often associated with hope and healing?",
        options: ["The Star", "The Moon", "The Sun", "The Hanged Man"],
        answer: 0
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
        options: ["Clarity and truth", "Illusion and intuition", "Authority and control", "Conflict and struggle"],
        answer: 1
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
