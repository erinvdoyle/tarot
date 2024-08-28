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
  