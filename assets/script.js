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
 * Toggle button displays the Tarot Reading div on click
 */

  function displayQuiz() {
    var x = document.getElementById("tarot-quiz");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }

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
    }];
  