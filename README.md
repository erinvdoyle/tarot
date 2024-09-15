# **Tarot Card of the Day**
## *Your destiny awaits...*

<p align="center">
  <img src="assets/documentation/amiresp.png">
</p>

[Visit the deployed site](https://erinvdoyle.github.io/tarot)


# **Introduction**

Welcome to **Tarot Card of the Day**, where the mystical meets the whimsical. This fully responsive, interactive website is designed to enchant its visitors with a daily dose of tarot wisdom. Punchy vector images and a bright color scheme keep the look and feel lighthearted and fun, while the 44 different cards in the Tarot Draw section provide a surprise factor and breadth of content to encourage return visits. The quiz offers an opportunity to test one's knowledge and learn more about the meaning of the cards. This site is designed to give the visitor a welcomed distraction (one could say a cosmic GPS for life's little questions!) from their day, one tarot card at a time.

# **Table of Contents**
- [Project](#project)
  - [User Stories](#user-stories)
- [User Experience](#user-experience)
  - [Wireframes](#wireframes)
  - [Site Structure](#site-structure)
  - [Design Choices](#design-choices)
- [Features](#features)
- [Future Features](#future-features)
- [Technologies](#technologies)
  - [Languages](#languages)
- [Testing](#testing)
  - [Code Validation](#code-validation)
  - [Responsiveness](#responsiveness) 
  - [Browser Compatibility](#browser-compatibility)
  - [Additional Testing](#additional-testing)
  - [Bugs](#bugs)
- [Deployment](#deployment)
- [Credits](#credits)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)


# Project 

This website was created for Portfolio Project #2 (JavaScript) for The Code Institute Full Stack Software Developer program.

It is intended for users of all age, race, and gender, from all walks of life. Tarot Card of the Day is for anyone who would enjoy taking a break from the daily grind to engage with their mystical side. Sense of humor required!

## User Stories
   <details>
   <summary>User Stories for Tarot Card of The Day (click)</summary>
 
 - **As a new visitor**, I want:
    - A cleanly designed and intuitive layout so I can easily navigate the site
    - An engaging experience with bright colors and sounds
    - A simple tarot draw that allows me to pick one card to guide my day, week, or specific question
    - The ability to draw more than one card and receive multiple fortunes
    - A quiz with a simple format
    - A quiz that tests my knowledge of tarot cards and helps me to learn more about them
    - A points tally and a results feature that tells me how I've done
    - A button that allows me to exit the quiz or tarot draw when I wish
    - A fully responsive experience so that I can use any of my screens  
   
 - **As a returning visitor**, I want:
    - A random selection of quiz questions so that I can test myself with fresh content
    - A random tarot draw so that I can get a new reading every time I visit

  - **As the owner of the site**, I want:
    - More than one interest point for the visitor: The choice between a tarot reading or a quiz
    - A site that is easily maintained yet continues to offer engagement for new and repeat visitors
    </details>

# User Experience

## Wireframes
<details>
  <summary>This project was planned with Balsamiq Wireframes (click)</summary>
   <p>Mobile</p>
   <img src="assets/documentation/tarotmobilewf.png">
   <p>Tablet</p>
   <img src="assets/documentation/tarottabletwf.png">
    <p>Laptop</p>
   <img src="assets/documentation/tarotlaptopwf.png">
  </details>

The wireframes were created for mobile, tablet, and desktop with a particular focus on mobile-friendly design.  Some changes to text, layout, and color choice have been made as the project evolved due to both accessability and design preference. 

## Site Structure

**Tarot Card of the Day** has two main game areas, as indicated by the bright red *Get Your Reading* and *Take the Quiz* navigation buttons at center screen. A fixed header displays the site logo, and a hero illustration of a Tarot draw takes the bottom screen of the starting area. This image is covered when either of the buttons are clicked. 

Each button clicks to its own game instructions area, which occupies almost the entire viewport on click, starting below the header. Once the visitor has read the instructions for how to play, the game described is accessed through another button click, and the game area replaces the instructions area. The visitor is offered the chance to exit and return to the *Starting Area* throughout each game.

More about each area and all of the features can be found in the [Features](<#features>) section.

- [Starting Area](#<starting-area>)
- [Tarot Draw Instructions Area](#<tarot-draw-instructions-area>)
- [Tarot Draw Area](#<tarot-draw-area>)
- [Tarot Quiz Instructions Area](#<tarot-quiz-instructions-area>)
- [Tarot Quiz Area](#<tarot-quiz-area>)


## Design Choices

### Color Scheme

The color scheme for **Tarot Card of the Day** was inspired by the colors in the hero image. A color picker was used to extract shades of pale yellow, gold, red, teal, and dark blue. Pops of purple and pink accent the color palette and were lifted from the image used for the back of the tarot deck. I chose bold, hand-drawn vector illustrations to lend the site an extra dose of fun and nostalgia suitable for a gamefied tarot draw. While some of the tones are fairly dark, the creamy yellow background provides contrast and readability.

<p align="center">
    <img src="assets/documentation/palette.png" height="150" style="margin-right: 20px;"/>
    <img src="assets/images/tarotbg.webp" height="150" style="margin-right: 20px;"/>
    <img src="assets/documentation/colorcards.png" height="150"/>
</p>

**Hex codes:**
- #fdf4ce ![Static Badge](https://img.shields.io/badge/LemonChiffon-fdf4ce)
- #fdeca6 ![Static Badge](https://img.shields.io/badge/Vanilla-fdeca6)
- #A97E10 ![Static Badge](https://img.shields.io/badge/DarkGoldenrod-A97E10)
- #d96b62 ![Static Badge](https://img.shields.io/badge/IndianRed-d96b62)
- #FF9EA9 ![Static Badge](https://img.shields.io/badge/SalmonPink-FF9EA9)
- #7f75b2 ![Static Badge](https://img.shields.io/badge/Amethyst-7f75b2)
- #385d65 ![Static Badge](https://img.shields.io/badge/DarkSlateGray-385d65)
- #2b464f ![Static Badge](https://img.shields.io/badge/Charcoal-2b464f)


### Typography

- Fonts are provided by Google Fonts. "Uncial Antiqua" has been used for headers and accent text. "Libre Baskerville": All other copy.
    
  <p align="center">
  <img src="assets/documentation/font1.png" height="50px"/>
  </p>
    
- The font "Uncial Antiqua" was chosen to evoke a mystical, fun, and old-time feel, like something one might see at a fair
     
  <p align="center">
  <img src="assets/documentation/font2.png" height="50px"/>
  </p>

- The font "Libre Baskerville" was chosen for readability and contrast so that all pertinent information could be read easily by visitors



# Features

I have aimed to give this site a simple, intuitive interface. Ease of navigation allows the visitor to engage with their game of choice without delay. 

Examples of this site's interactive features include:
 
- Sound toggle buttons
- Sound effects and animations for correct and incorrect answers
- Sound effects and animations througout the tarot draw  to simulate shuffling and drawing cards 
- The option to draw and redraw randomly selected tarot cards 
- A quiz score tally that updates with each answer
- A quiz results blurb determined by the number of points scored
- The option to exit out of whichever game is being played

## Favicon

<p align="center">
  <img src="assets/documentation/favicon.png">
</p>

- The favicon features a pair of cards to indicate the subject matter

## Starting Area

<p align="center">
<img src="assets/documentation/rmstartingarea.png" height="450px"/>
</p>

- The *Starting Area* of the site

### Header

<p align="center">
<img src="assets/documentation/rmheading.png" width="250px"/>
</p>

- The header is in a fixed position and remains static at the top of the page
- It can be clicked at any point to return the visitor back to the starting area

### Hero Image

<p align="center">
<img src="assets/documentation/rmhero.png" height="200px"/>
</p>

- This vector illustration provides the visitor's first impression of **Tarot Card of the Day** and sets the tone and color scheme. It is positioned at the bottom of the starting area and is covered when the user navigates into either of the main game areas

### Main Navigation Buttons

<p align="center">
<img src="assets/documentation/rmmainnav.png" height="200px"/>
</p>

- Stop sign red navigation buttons with a slight gradient grab the visitors attention from center screen. These buttons click to the instructions area for each game

## Tarot Draw Instructions Area

<p align="center">
<img src="assets/documentation/drawinstructions.png" height="450px"/>
</p>

### Instructions

### h3

<p align="center">
<img src="assets/documentation/drawinstructionsh3.png" width="250px"/>
</p>

- Each section features an h3 element to introduce the content below. This one has a gold gradient background as I felt the metallic appearance was reminiscent of gold coins and kept with the feel of tarot

### Instructions content

<p align="center">
<img src="assets/documentation/drawinstructionscontent.png" height="300px"/>
</p>

- The instructions section explains how to play the Tarot Draw game, step by step. The game navigation buttons are replicated for ease of understanding 

### Instructions image

<p align="center">
<img src="assets/documentation/drawinstructionsimage.png" height="200px"/>
</p>

- An image of a tarot mystic keeps the instructions section fun and true to tone. Border radius on the top corners lends visual interest and compliments the hand-drawn style of illustation 

### Navigation button to *Get your Reading!*

<p align="center">
<img src="assets/documentation/drawinstructionsnav.png" width="250px"/>
</p>

- Clicking this button leads to the *Tarot Draw Area*

## Tarot Draw Area

<p align="center">
<img src="assets/documentation/drawsection.png" height="450px"/>
</p>

- The *Tarot Draw Area* of the site

### h3 

<p align="center">
<img src="assets/documentation/drawh3.png" width="250px"/>
</p>

- This header gives the visitor their first direction to play the game: *Tap deck to shuffle!*

### Tarot Deck

<p align="center">
<img src="assets/documentation/drawdeck.png" height="300px"/>
</p>

- The Tarot Deck starting mode features the back of the deck of cards

- When the visitor clicks on the deck, as instructed by the h3 above it, the deck shakes and plays a shuffle sound

<p align="center">
<img src="assets/documentation/drawnav.png" width="250px"/>
</p>

- There are three navigation buttons: The *Sound Toggle*, which can be used at any time, the *Draw* button, which allows the visitor to draw a card, and the *Exit* button, which exits the game and clicks back to the *Starting Area*

<p align="center">
<img src="assets/documentation/drawbutton.png" height="450px"/>
</p>

- When the visitor clicks *Draw*, a magical chime sound plays, and a card is chosen at random and displayed face up
- The *Draw* button is replaced by the *Redraw* button, which allows the visitor to draw a new card if desired
- An h3 banner appears below the card, instructing the visitor to tap the card to read its meaning

<p align="center">
<img src="assets/documentation/drawmeaning.png" height="400px"/>
</p>

- When the card is tapped, the h3 disappears, and the card meaning is revealed

- From this point, the visitor can choose to *Redraw* another card and repeat the same process for a new fortune, or *Exit* back to the starting area

## Tarot Quiz Instructions Area

<p align="center">
<img src="assets/documentation/quizinstructions.png" height="450px"/>
</p>

### h3

<p align="center">
<img src="assets/documentation/quizinstructionsh3.png" width="250px"/>
</p>

### Instructions Content

<p align="center">
<img src="assets/documentation/quizinstructionscontent.png" height="300px"/>
</p>

- Simple, straightforward rules to the game and its navigation

### Navigation Button

<p align="center">
<img src="assets/documentation/quizinstructionsnav.png" width="250px"/>
</p>

- The *Take the quiz!* button clicks into the *Quiz Area*

## Tarot Quiz Area

<p align="center">
<img src="assets/documentation/quizsection.png" height="450px"/>
</p>

### h3

<p align="center">
<img src="assets/documentation/quizh3.png" width="250px"/>
</p>

### Quiz Content

<p align="center">
<img src="assets/documentation/quizcontent.png" height="350px"/>
</p>

- The quiz is laid out with question, answer options, and internal navigation buttons in the same container. Purple with a pink hover was chosen for the answer option background color for cohesion with the *Tarot Draw Area*

- Once the visitor has read the question, they can click on their answer choice

<p align="center">
<img src="assets/documentation/quizanswers.png" height="350px"/>
</p>

- Each answer vibrates when a choice is made, with the correct answer momentarily enlarging and changing to a green background color. The incorrect answers change to a red background with text struck through

<p align="center">
<img src="assets/documentation/quiznext.png" width="250px"/>
</p>

- A *Next* button appears when the answer is revealed so that the visitor may advance to the next question. This button disappears once clicked until the following question is answered so that no questions may be skipped

<p align="center">
<img src="assets/documentation/quizh3score.png" width="250px"/>
</p>

- An h3 banner appears below the quiz container when the visitor chooses their answer to the first question. This banner displays the score and changes background color to green for correct or red for incorrect as it updates the score tally. It resets to its standard background color when the *Next* button is clicked and the visitor advances to the next question

- Once all ten questions have been answered, the final score is displayed and the *Next* button is replaced with the *Results* button (pictured below)

### Navigation Buttons

<p align="center">
<img src="assets/documentation/quiznext.png" width="250px"/>
<img src="assets/documentation/quizresultsbutton.png" width="250px"/>
</p>

- There are four navigation buttons: A *Next* button, which is hidden or displayed based on whether the visitor has answered the question; an *Exit* button, which exits to the *Starting Area* at any time; a *Sound Toggle*; and a *Results* button, which replaces *Next* after all of the questions have been answered  

### Results Section

<p align="center">
<img src="assets/documentation/quizresults1.png" height="300px"/>
<img src="assets/documentation/quizresults1.png" height="300px"/>
<img src="assets/documentation/quizresults3.png" height="300px"/>
</p>

- The results section features a cheeky blurb based on the success (or lack thereof!) of the visitor's quiz results. There are three results options based on points total: 0-3, 4-6, and 7-10


# Future Features
- A glossary or dictionary of each of the Major Arcana cards and their meanings
- A history of a visitor's previous readings
- A multi-card reading option (choices of 3 or 7 with an expanded meaning section)
- An updated quiz with a larger number of questions to draw from
- An expanded tarot reading which draws from a full 78 card deck 

# Technologies

## Languages Used
- [JavaScript](https://www.javascript.com/) - provides the majority of application functionality
- [HTML](https://html.spec.whatwg.org/) - provides the framework and content
- [CSS3](https://www.w3.org/Style/CSS/Overview.en.html) - provides the styling

## Frameworks, Libraries, and Software
- [Am I Responsive](https://ui.dev/amiresponsive) - to check site responsiveness
- [Balsamiq](https://balsamiq.com/wireframes/) - to create first draft wireframes for the site
- [ChatGPT](https://openai.com/chatgpt/) - for initial quiz and tarot copy inspiration which was tweaked for style and tone
- [Code Beautify](https://codebeautify.org) - for final formatting checks
- [Coolors](https://coolors.co/) - to provide the README color palette
- [Font Awesome:](https://fontawesome.com/) - for sound toggle icon
- [Freepik](https://www.freepik.com) - for all of the images
- [Github](https://github.com/) - to host the site
- [Gitpod](https://www.gitpod.io/#get-started) - to create, edit, and deploy the site
- [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/) - to test the website 
- [Google Fonts](https://fonts.google.com/) - for the use of "Uncial Antiqua" and "Libre Baskerville"
- [Icons8](https://icons8.com/) - for playing cards favicon
- [Image Color Picker](https://www.imagecolorpicker.com) - to extract color palette from illustrations
- [JSHint](https://jshint.com/) - for JavaScript validation
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) - to review site performance and accessibility
- [Pixabay](https://www.pixabay.com) - for all site audio
- [Shields.io](https://shields.io/badges) - for README color badges
- [Squoosh](https://squoosh.app/) - for image compression
- [W3C](https://validator.w3.org/) - to validate HTML and CSS
- [Wave Web Accessibility Evaluation Tool](https://wave.webaim.org/) - to test site accessibility

# Testing

## Feature Testing 

<details>
  <summary>Testing the Tarot Draw Area (click)</summary> 
<p align="center">
<img src="assets/documentation/testdraw1.png" height="450px">

- The *Draw* button plays a chime sound when clipped and the top card of the deck changes to the drawn card
- An h3 banner appears below the deck instructing the visitor to tap the card for meaning. It disappears when the deck is tapped

<img src="assets/documentation/testdraw2.png" height="450px">

- The card flips to its card meaning when the deck is tapped

<img src="assets/documentation/testdraw3.png" height="450px">

- The *Redraw* button correctly plays the chime sound and restarts the draw process by selecting a new card

<img src="assets/documentation/testdraw4.png" width="250px">

- The *Sound Toggle* turns sound off and on and the icon changes to reflect its status
</p>
</details>

<details>
  <summary>Testing the Tarot Quiz Instructions Navigation Button (click)</summary> 
<p align="center">
<img src="assets/images/screenshots/">
</p>
</details>

- The "Take the quiz" button naviagtes to the Tarot Quiz Section

<details>
  <summary>Testing the Tarot Quiz Section (Pictured)</summary> 
<p align="center">
<img src="assets/images/screenshots/">
<img src="assets/images/screenshots/">
<img src="assets/images/screenshots/">
<img src="assets/images/screenshots/">
<img src="assets/images/screenshots/">
<img src="assets/images/screenshots/">
<img src="assets/images/screenshots/">

- The question appears with four clickable answers beneath it
- The buttons change color when hovered over
- The answers vibrate when a selection is made. The correct answer changes background color to green and momentarily enlarges. The incorrect answers change background color to red and the text is struck through. The Next button appears to allow advancement to the next question
- The next button disappears until the next question is answered
- The h3 banner beneath the quiz container changes color to red or green based on whether the answer is correct and the points tally is updated. The banner returns to its base background color once the quiz is advanced and until the next question is answered
- The Sound Toggle works to allow the visitor to turn the sound on or off
- The exit button return to use to the starting area
- The Results button appears after the tenth question is answered
- The results blurb corresponds to the number of correct answers as designed

</p>
</details>

### Feature Testing Table

<details>

 <summary>A Table of Feature Tests (click)</summary>

| Feature                     | Test Case                 | Outcome                   |
|-----------------------------|---------------------------|---------------------------|
| Favicon | Load Site | Icon and title appear in tab |
| Header | Click text | Page refreshes |
| Header | Scroll (on mobile and DevTools small screens) | Header remains fixed |
| **Starting Area**  |
| Hero Image | Load page | Image loads quickly |
| Main Navigation Button #1 | Click *Get Your Reading* button | *Tarot Draw Instructions Area* loads|
| Main Navigation Button #2 | Click *Take The Quiz* button | *Tarot Quiz Instructions Area* loads |
| **Tarot Draw Instructions Area**  |
| Tarot Draw Instructions Area | Open Instructions section by clicking *Get Your Reading* button |Section loads and fills viewport below header 
| Tarot Draw Instructions Area | Read content, scroll page on smaller screens | Content is legible and scrolls as intended |
| Tarot Draw Instructions Area | Open Instructions section by clicking *Get Your Reading* button | Image loads properly and is centered on the x-axis |
| Navigation Button to Tarot Draw Area | Click "Get Your Reading!" | *Tarot Draw Area* replaces *Tarot Draw Intructions Area*|
| **Tarot Draw Area**  |
| Tarot Deck | Click or Tap Deck | Shuffle sound plays|
| Tarot Deck | Click or Tap Deck | Deck Shakes |
| *Draw* Button | Click button | Chime sound |
| *Draw* Button | Click button | Tarot card is displayed |
| *Draw* Button | Click button | Lower h3 appears |
| Card Meaning | Tap deck as instructed | Card flips to reveal meaning |
| Card Meaning | Tap deck as instructed | Lower h3 disappears |
| *Redraw* Button | Click button | A new card appears in place of the current card and can now be tapped for its own meaning |
| *Sound Toggle* | Click On and Off through all stages of play | Sound turns on and off as intended |
| *Exit* Button | Click button | Page refreshes and *Tarot Draw Area* is replaced by *Starting Area* |
| **Tarot Quiz Instructions Area** |
| Tarot Quiz Instructions Area | Open Instructions section by clicking *Take the Quiz* button |Area loads and fills viewport below header |
| Tarot Quiz Instructions Area | Read content, scroll page on smaller screens | Content is legible and scrolls as intended |
| Navigation Button to Tarot Quiz Area | Click *Take the quiz!* | *Tarot Quiz Area* replaces *Tarot Quiz Intructions Area*|
| **Tarot Quiz Area**|
|Tarot Quiz Area | Navigate into *Tarot Quiz Area* | Quiz with question, answers, and navigation buttons loads |
| Answer option buttons | Click button to select answer - **incorrect** | Incorrect answers turn red while correct turns green |
| Answer option buttons | Click button to select answer - incorrect | Answer buttons vibrate |
| Answer option buttons | Click button to select answer - incorrect | Incorrect text is struck through |
| Answer option buttons | Click button to select answer - incorrect | Wrong answer buzzer sounds |
| Answer option buttons | Click button to select answer - **correct** | Correct answer turns green while others turn red |
| Answer option buttons | Click button to select answer - correct | Answer buttons vibrate |
| Answer option buttons | Click button to select answer - correct | Correct answer briefly expands |
| Answer option buttons | Click button to select answer - correct | Correct answer buzzer sounds |
| Lower h3 Points Tally | Play quiz | Background color changes to green or red based on correct or incorrect answer |
| Lower h3 Points Tally | Play quiz | Score tally updates with each answer |
| *Next* button | Click button to advance to next question | Button appears once question has been answered |
| *Next* button | Click button to advance to next question | Button advances quiz "onclick" to next question | 
| *Next* button | Click button to advance to next question | Button disappears until current question is answered so that all ten questions must be answered |
| Sound Toggle | Click speaker icon throughout different questions of the quiz | Sound toggles on and off as instructed |
| *Results* button | Answer all ten questions and click button |Button appears after tenth question has been answered and brings visitor to the results area |
| Results | Click *Results* button | Visitor is brought to intended results blurb as determined by points tally |
| *Exit* button | Click button at different stages of play | Button returns visitor to starting area |
</details>

## Code Validation

| W3 Validator | index.html | 
|--------------|------------|
| html         | Pass       |
| CSS          | Pass       |
| JavaScript          | Pass       |

No errors were returned in any of the three code validators

### HTML Validation
- [W3C HTML Validator](https://validator.w3.org/) -
<details>
    <summary>HTML Validation Screenshot (click)</summary>
     <img src="assets/documentation/htmlvalidation.png">
     <p>No errors were returned</p>
  </details>

### CSS Validation
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) -
<details>
    <summary>CSS Validation Screenshot (click)</summary>
     <img src="assets/documentation/cssvalidation.png">
     <p>No errors returned</p>
  </details>

### JavaScript Validation
- [JSHint JavaScript Validator](https://) -
<details>
    <summary>JavaScript Validation Screenshot (click)</summary>
     <img src="assets/documentation/jsvalidation1.png">
     <img src="assets/documentation/jsvalidation2.png">
     <p>No errors returned. Three unused variables were noted, but each of these is a function used in the quiz game</p>
  </details>

## Responsiveness Test
- All pages have been tested for responsiveness through both Chrome and Edge DevTools at the following CSS breakpoints:
    - Mobile S (320px)
    - Mobile M (375px)
    - Mobile L (425px)
    - Tablet (768px)
    - Laptop (1024px)
    - Laptop (1440px)

### Screenshots of each section of the site as tested in Chrome DevTools

<details>
  <summary>Screenshots of the Starting Area (click)</summary>
<img src="assets/images/screenshots/">
</details>

<details>
  <summary>Screenshots of the Tarot Quiz Instructions (click)</summary>
<img src="assets/images/screenshots/">
</details>

<details>
  <summary>Screenshots of the Tarot Quiz (click)</summary>
<img src="assets/images/screenshots/">
</details>

<details>
  <summary>Screenshots of the Tarot Quiz Results (click)</summary>
<img src="assets/images/screenshots/">
</details>

<details>
  <summary>Screenshots of the Tarot Draw Instructions (click)</summary>
<img src="assets/images/screenshots/">
</details>

<details>
  <summary>Screenshots of the Tarot Draw (click)</summary>
<img src="assets/images/screenshots/">
</details>

## Browser Compatibility

| Browser Tested          | Intended Appearance | Intended Responsiveness |
|-------------------------|---------------------|-------------------------|
| Chrome (Mobile/Desktop) | Good                | Good                    |
| Edge (Mobile/ Desktop)  | Good                | Good                    |
| Safari (Mobile)         | Good                | Good                    |


## Additional Testing

### Lighthouse

<details>
  <summary>Lighthouse Test Results (click)</summary> 
<img src="assets/documentation/lighthousemobile.png">
</details>

<details>
  <summary>Lighthouse Test Results (click)</summary> 
<img src="assets/documentation/lighthousedesktop.png">
</details>

### WAVE Testing

<details>
  <summary>WAVE Web Accessibility Evaluation Tool (click)</summary> 
<img src="assets/documentation/wave.png">
<p>After changing the header and navigation buttons to darker colors for better contrast, the site passed the WAVE evaluation with zero contrast errors. One error and two alerts were highlighted:

- The error is due to an "empty" button, which is actually the Sound Toggle for the Tarot Draw section. This button is not empty but uses the Font Awesome speaker icon rather than text 

- The first alert is due to a device dependent event handler. This concerns the shake animation for the tarot deck when clicked. While the deck does shake on mobile screens, this animation does not function with the same reliability as it does on desktop. However, the shuffle sound that accompanies it does play on mobile so I felt justified in leaving the animation as a bonus feature

- The second alert concerns the audio tag for the deck shuffle sound. I have added an aria-label for accessibility to address this alert</p>
</details>

### Accessibility
This website was developed with special consideration for accessibility through the following methods:
- The use of semantic HTML
- Alt text for images
- Appropriate contrast levels between background and foreground features and background colors and text.
- 100% Lighthouse testing scores for Accessibility and SEO on both Mobile and Desktop formats

### Manual Testing

Manual testing has been performed on an iPhone 11 and iPhone 13Pro using Safari and Chrome, as well as on two Windows laptops and a monitor of differing screen sizes. [https://ui.dev/amiresponsive](https://ui.dev/amiresponsive) provided the screenshot for the top of this README and allowed further testing of site responsiveness

<details>
  <summary>Screenshots of each area of the site as tested on Am I Responsive? (click)</summary>
   <img src="assets/images/screenshots/">
   <img src="assets/images/screenshots/">
   <img src="assets/images/screenshots/">
   <img src="assets/images/screenshots/">
</details>
<details>
  <summary>Screenshots of each area of the site as tested on my own device, iPhone 13Pro (click)</summary>
   <img src="assets/images/screenshots/">
   <img src="assets/images/screenshots/">
   <img src="assets/images/screenshots/">
   
</details>
<details>
  <summary>Screenshots of each area of the site as tested on iPhone 11 (click)</summary>
   <img src="assets/images/screenshots/">
   <img src="assets/images/screenshots/">
   <img src="assets/images/screenshots/">
   
</details>

<details>
  <summary>Screenshots of each area of the site as tested on *computer* (click)</summary>
   <img src="assets/images/screenshots/">
   <img src="assets/images/screenshots/">
   <img src="assets/images/screenshots/">
   
</details>

<details>
  <summary>Screenshots of each area of the site as tested on *computer* (click)</summary>
   <img src="assets/images/screenshots/">
   <img src="assets/images/screenshots/">
   <img src="assets/images/screenshots/">
   
</details>

<details>
  <summary>Screenshots of each area of the site as tested on *computer monitor* (click)</summary>
   <img src="assets/images/screenshots/">
   <img src="assets/images/screenshots/">
   <img src="assets/images/screenshots/">
   
</details>

# Bugs

## Solved Bugs
<details>
  <summary>Misplaced Event Listeners (click)</summary>
<img src="assets/documentation/bug1.png">
<p>These errors occurred while writing showMeaning(). This function utilizes CSS flipcards to show the meaning of the displayed card when the deck is tapped. Due to the several sides of card and the overall complexity of the drawCard function, I misplaced the needed event listener and also struggled with selecting the proper element. I worked through these errors through trial and error, using gitpod's port to preview the implementation of the functions</p>
</details>

<details>
  <summary>A missing stylesheet semicolon that affected the layout (click)</summary>
<img src="assets/documentation/bug3.png">
<p>Several hours were spent trying to debug my JavaScript as I failed to recognize an obvious syntactical error in my CSS. I learned the importance of my working tree as I finally retraced each change between commits until I found the culprit: A missed semicolon in the css for the *Tarot Quiz Insructions Area*</p>
</details>

<details>
  <summary>A missing comma in script.js that broke the entire site! (click)</summary>
<p>No image for this one as there was no visible error; the main navigation buttons simply stopped working and neither of the gameplay instructions areas were accessible. I consulted the differences in code between my recent commit and the one before it and realized my mistake. After updating my tarotDeck array in JavaScript, I neglected to place a comma after one of the array items</p>
</details>

## Unsolved Bugs

After implementing the above solutions and running all code through the necessary validators, one console error remains when I view the site through Microsoft Edge 

<details>
  <summary>Uncaught (in promise) Error (click)</summary>
<img src="assets/documentation/bug2.png">
<p>After consulting my mentor, Precious, and searching the error on Stack Overflow, I have come to the conclusion this console error is likely due to a plugin on my browser. It does not show up in incognito mode on my latop, in Microsoft Edge on my second test laptop, or at all on Precious' computer</p>
</details>

There are no further unsolved bugs, but there are a couple elements on mobile screens that do not function entirely as designed. Neither of the issues affect the overall performance of the site or impede gameplay:

- The shake effect when the tarot deck is tapped does not reliably work on Safari or Chrome mobile. A sustained tap usually results in an OS pop up to "Share" or "Save to Photos". Sometimes this can be avoided and the deck shakes properly. The shuffle audio plays as intended

- The glow on the header h2 appears harsher on mobile devices than desktop, which creates slightly more contrast than intended between the text and the background

# Deployment

## To Deploy The Project

<details>
  <summary>How to Deploy (click)</summary> 
<p>

This site was deployed through GitHub repository [/erinvdoyle/tarot](https://github.com/erinvdoyle/tarot)

1. Follow the link above and click the Settings tab in the top navigation bar

![Github Deploy Page 1](assets/documentation/deploy1.png)

2. From there, navigate to the Code and Automation section on the left side of the screen. Click the Pages tab

![Github Deploy Page 2](assets/documentation/deploy2.png)

3. Under the "Build and deployment" header, click the drop down menu "Deploy from a branch," located under Source

![Github Deploy Page 3](assets/documentation/deploy3.png)

4. Under Branch, select "main" with folder "/root". Click Save. Congratulations, your site is now deployed

![Github Deploy Page 4](assets/documentation/deploy4.png)
</p>
</details>

## To Fork The Repository on GitHub

<details>
  <summary>How to fork the Tarot repository (click)</summary>
<p>

To make a copy of a repository, fork it through Github:

1. Find the repository either by using the search bar or by navigating to the URL [/erinvdoyle/tarot](https://github.com/erinvdoyle/tarot)
2. Once on the repository main page, navigate to the "Fork" button in the upper-right corner, between the "Watch"("Unwatch" in the image as I am the repository owner and watcher) and "Star" buttons

![Github Fork](assets/documentation/fork.png)

3. Click the "Fork" button to create a copy of the repository. This copy be altered without affecting the source code
</p>
</details>

## Creating A Local Clone of The Project

<details>
  <summary>How to create a local clone (click)</summary>

<p>
To clone the repository of this site:

1. Click the "Code" button in your forked repository

![Github Clone Page 1](assets/documentation/clone1.png)

2. Copy the repository URL (HTTPS, SSH, or GitHub CLI)
3. Open a terminal (or command prompt) on your computer

 ![Github Clone Page 2](assets/documentation/clone2.png)

4. Type the following command: git clone https://github.com/erinvdoyle/tarot.git to create a local clone

![Github Clone Page 2](assets/documentation/clone3.png)
</p>
</details>



# Credits

## Content

## Technical Content

All tutorials used have been credited throughout the code. Tutorials were consulted as a jumping off point and code was manipulated to perform per my own design and specification

### CSS Tutorials
[Glowing text tutorial from w3 Schools, "How to Create A Glowing Text"](https://www.w3schools.com/howto/howto_css_glowing_text.asp)

[Background image opacity tutorial from Stack Overflow: "Can I set an opacity only to the background image of a div?"](https://stackoverflow.com/questions/7241341/can-i-set-an-opacity-only-to-the-background-image-of-a-div)

[Custom scroll bar tutorial from W3 Schools, "How to Create a Custom Scroll Bar"](https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp)

[Shaking an image tutorial from W3 Schools, "How to Shake an Image with CSS"](https://www.w3schools.com/howto/howto_css_shake_image.asp) 

[Flip Card tutorial from W3 Schools, "How to Create CSS Flip Cards"](https://www.w3schools.com/howto/howto_css_flip_card.asp )

[CSS 2d Transforms tutorial from W3 Schools](https://www.w3schools.com/Css/css3_2dtransforms.asp) 

### JavaScript Tutorials

[Toggle Tutorial from W3 Schools, "How TO - Toggle Hide and Show"](https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp)

[Building a Quiz Application from Code with Farraz, "Build a Quiz Application with HTML, CSS, and JavaScript"](https://www.codewithfaraz.com/content/161/build-a-quiz-application-with-html-css-and-javascript-step-by-step-guide)

[Build a Quiz App with JavaScript from Web Dev Simplified](https://youtu.be/riDzcEQbX6k) 

["How to Make a Quiz App using HTML CSS Javascript - Vanilla Javascript Project for Beginners Tutorial" from Brian Design](https://www.youtube.com/watch?v=f4fB9Xg2JEY) 

[Building an Interactive Quiz tutorial from Codepicker57](https://medium.com/@codepicker57/building-an-interactive-quiz-with-html-css-and-javascript)

[Tutorial for playing a sound with JavaScript from Sabe.io](https://sabe.io/blog/javascript-play-sound-audio)

[Tutorial for how to shuffle an array of items from FreeCodeCamp.org](https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/) 

[How to randomly shuffle a JavaScript array, question asked on Stack Overflow](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)

[How to code a card deck in JavaScript](https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript)

[How to utilize Child Nodes](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes)


## Media
### Image Credits
[Main Image by Storyset on Freepik:](https://www.freepik.com/free-vector/tarot-concept-illustration_197101846.htm#position=1&from_element=collections)

[Fortune Teller by Storyset on Freepik](https://www.freepik.com/free-vector/fortune-teller-concept-illustration_69243555.htm#fromView=author&page=1&position=15&uuid=2285f5b2-3dab-4c5c-89a4-8f8ceb41fcb1)

[Main Tarot Card image by Freepik](https://www.freepik.com/free-vector/hand-drawn-tarot-cards-illustration_39555275.htm#fromView=search&page=2&position=24&uuid=e85cc8e3-0795-4d80-90d6-bc56a9b1ca1e)

[Tarot Cards Collection 1 by Freepik](https://www.freepik.com/serie/39555281)

[Tarot Cards Collection 2 by Freepik](https://www.freepik.com/serie/39555272)

[Tarot Cards Collection 3 by Freepik](https://www.freepik.com/serie/39110667)

[Tarot Cards Collection 4 by Pikisuperstar on Freepik](https://www.freepik.com/serie/38600027)

[Tarot Eye](https://www.freepik.com/free-vector/hand-drawn-celestial-pattern-design_137950070.htm#position=3&from_element=collections)

[Quiz Background by RawPixel.com on Freepik](https://www.freepik.com/free-vector/celestial-object-sketch-set-beige-background_16446731.htm#position=6&from_element=collections)

[Quiz Results Image by Studiogstock on Freepik](https://www.freepik.com/free-vector/esoteric-hand-mystical-icon_136483400.htm)

### Sound Credits 
[Wrong answer Sound Effect by Nhựt Bùi on Pixabay](https://pixabay.com/sound-effects/buzzer-or-wrong-answer-20582/)

[Correct answer Sound Effect from Pixabay](https://pixabay.com/sound-effects/correct-6033/)

[Shuffle Sound Effect from Pixabay](https://pixabay.com/sound-effects/shuffleandbridge-107641/)

[Draw Card Chime from Pixabay](https://pixabay.com/sound-effects/chime-and-chomp-84419/)

### Other Resources


# Acknowledgements
- My mentor, Precious Ijege
- Our cohort standup leader, Laura Mayock
- My husband, Taylor, for viewing every iteration of every feature with patience and helping to test the final result

# Contact
Thank you for viewing my project. Please feel free to contact me with any questions, comments, or opportunities
  
 - [erin.v.doyle@gmail.com](mailto:erin.v.doyle@gmail.com)
 - [linkedin.com/erinvdoyle](https://linkedin.com/erinvdoyle)