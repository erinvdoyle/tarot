# Welcome to Tarot Card of the Day
## Your destiny awaits...

<p align="center">
  <img src="am-i-responsive">
</p>

[Visit the deployed site](https://erinvdoyle.github.io/tarot)


# Introduction

Welcome to Tarot Card of the Day, where the mystical meets the whimsical. This fully responsive, interactive website is designed to enchant its visitors with a daily dose of tarot wisdom. Its punchy vector images and bright color scheme keep the look and feel light-hearted and fun, while the 44 different cards in the Tarot Draw section provide a surprise factor and breadth of content to encourage return visits. The Quiz offers an opportunity to test one's knowledge and learn more about the meaning of the cards. This site intendsis designed to give the visitor a fun distraction (one could say a cosmic GPS for life's little questions!) from their day, one tarot card at a time.

# Table of Contents
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

It is intended for users of all age, race, and gender, from all walks of life. Tarot Card of the Day is for anyone who would enjoy taking a break from the daily grind to engage with their msytical side.

## User Stories
   <details>
   <summary>User Stories for Tarot Card of The Day</summary>
 
 - As a new visitor, I want:
    - A cleanly designed and intuitive layout so I can easily navigate the site
    - An engaging experience with bright colors and sounds
    - A simple tarot draw that allows me to pick one card to guide my day, week, or specific question
    - A concise reading that I can engage with briefly or delve into for a deeper explanation 
    - A quiz with a simple format
    - A quiz that tests my knowledge of tarot cards and helps me to learn more about them
    - A points tally and a results feature that tells me how I've done
    - A button that allows me to exit the quiz or tarot draw when I wish
    - A fully responsive experience so that I can use any of my screens  
   
 - As a returning visitor, I want:
    - A random selection of quiz questions so that I can test myself with fresh content
    - A random tarot draw so that I can get a new reading every time I visit

  - As the owner of the site, I want:
    - More than one interest point for the visitor: The choice between a tarot reading or a quiz
    - A site that is easily maintained yet continues to offer engagement for new and repeat visitors
    </details>

# User Experience

## Wireframes
<details>
  <summary>Planned and assembled in Balsamiq Wireframes</summary>
   <p>Mobile</p>
   <img src="assets/documentation/tarotmobilewf.png">
   <p>Tablet</p>
   <img src="assets/documentation/tarottabletwf.png">
    <p>Laptop</p>
   <img src="assets/documentation/tarotlaptopwf.png">
  </details>

The wireframes were created for mobile, tablet, and desktop with a particular focus on mobile-friendly design.  Some changes to text, layout, and color choice have been made as the project evolved due to both accessability and design preference. 

## Site Structure

Tarot Card of the Day has two main game sections, as indicated by the bright red "Get Your Reading" and "Take the Quiz" navigation buttons at center screen. A fixed header displays the site logo, and a hero illustration of a Tarot draw takes the bottom screen of the starting area. This image is covered when either of the buttons are clicked. 

Each button clicks to its own game area instructions section, which occupies the entire viewport on click, starting below the header. Once the visitor has read the instructions how to play, the game described is accessed through another button click, and the game section replaces the instructions. The visitor is offered the chance to exit and return to the starting area throughout each game.

More about each section and all of their features can be found in the [Features](<#features>) section.


## Design Choices

### Color Scheme

The color scheme for Tarot Card of the Day was inspired by the colors in the hero image. A color picker was used to select shades of pale yellow, gold, red, teal, and dark blue from it. This palette is accented by pops of purple and pink lifted from the image used for the back of the tarot deck. I chose these bold, hand-drawn vector illustrations to lend the site an extra dose of fun and nostalgia suitable for a gamefied tarot draw. While the tones are fairly dark, the pale yellow background provides contrast and readability.

<p align="center">
    <img src="assets/images/screenshots/" alt="" height="150"/>
    </p>

-  Hex codes:
  - C7C6C6, ![Static Badge](https://img.shields.io/badge/Silver-C7C6C6)
        

### Typography

- Fonts courtesy of Google Fonts. "Uncial Antiqua": Headers and accent text. "Libre Baskerville": All other copy.
    
  <p align="center">
  <img src="assets/documentation/font1.png" height="50px"/>
  </p>
    
- The font "Uncial Antiqua" was chosen to evoke a mystical, fun, and old-timey feel, like something one might see at a fair
     
  <p align="center">
  <img src="assets/documentation/font2.png" height="50px"/>
  </p>

- The font "Libre Baskerville" was chosen for readability and contrast so that all pertinent information could be read easily by all visitors



# Features

I have aimed to give this site a simple, intuitive interface. Ease of navigation allows the visitor to engage with their game of choice without delay. 

Examples of this site's interactive features include sound toggle buttons, sound effects and animations for correct and incorrect answers, sound effects and animations througout the tarot draw, and the option to exit out of whichever game is being played.

## Favicon

![alt text](assets/documentation/favicon.png)

- The favicon features a pair of ace cards to indicate the content matter

## Header

![alt text](assets/images/screenshots/)

  - The header is in a fixed position and remains static at the top of the page
  - It can be clicked at any point to return the visitor back to the main starting area

## Hero Image

![alt text](assets/images/screenshots/)

- This vector illustration provides the visitor's first impression of Tarot Card of the Day and sets the tone and color scheme. It is fixed to the bottom of the starting area and is covered when the user navigates into either of the main game sections

## Main Navigation Buttons

![alt text](assets/images/screenshots/)

## Tarot Draw Section

### Instructions

![alt text](assets/images/screenshots/)

#### h3

![alt text](assets/images/screenshots/)

#### Instructions content

![alt text](assets/images/screenshots/)

#### Instructions image

![alt text](assets/images/screenshots/)

#### Navigation button to "Get your Reading!"

![alt text](assets/images/screenshots/)

### The Tarot Draw

![alt text](assets/images/screenshots/)

#### h3 

![alt text](assets/images/screenshots/)

#### Tarot Deck

![alt text](assets/images/screenshots/)

- The Tarot Deck starting mode is the deck of cards, featuring the back of one of the cards

![alt text](assets/images/screenshots/)

- When the visitor clicks on the deck, as instructed in the h3 above it, the deck shakes and plays a shuffling sound

![alt text](assets/images/screenshots/)

- There are three navigation buttons: The sound toggle, the "Draw" button" and the "Exit" button

![alt text](assets/images/screenshots/)

- When the visitor taps "Draw", a magical chime sound plays, and a card is chosen at random and displayed
  - An h3 banner appears below the card, instructing the visitor to tap the card again to read its meaning

  ![alt text](assets/images/screenshots/)

- When the card is tapped, the fortune is revealed

![alt text](assets/images/screenshots/)

- From this point, the visitor can choose to "Redraw" another card and repeat the same process for a new fortune, or "Exit" back to the starting area

#### Navigation Buttons

![alt text](assets/images/screenshots/)

- As described above in the Tarot Deck section, there are three buttons: A sound toggle, which can be activated at any time; A Redraw button, which allows the visitor to draw a different card; and an Exit button, which clicks back to the starting area

## Tarot Quiz Section

### Instructions 

![alt text](assets/images/screenshots/)

#### h3

![alt text](assets/images/screenshots/)

#### Instructions Content

![alt text](assets/images/screenshots/)

#### Navigation Button

![alt text](assets/images/screenshots/)

### The Tarot Quiz

![alt text](assets/images/screenshots/)

#### h3

![alt text](assets/images/screenshots/)

#### Quiz Content

![alt text](assets/images/screenshots/)

- The quiz is laid out with question, answer options, and internal navigation buttons in the same container

![alt text](assets/images/screenshots/)

- Once the visitor has read the question, they can click on their answer choice

![alt text](assets/images/screenshots/)

- Each answer vibrates when a choice is made, with the correct answer momentarily enlarging and changing to a green background color, while the incorrect answers change to a red background with text struck through

![alt text](assets/images/screenshots/)

- A "Next" button appears when the answers are revealed so that the visitor may advance to the next question. This button disappears once clicked until the next question is answered so that no questions may be skipped

![alt text](assets/images/screenshots/)

- An h3 banner appears below the quiz container when the visitor chooses their answer to the first question. This banner displays the score and changes background color either to green for correct or red for incorrect. This banner resets to its standard background color when the "next" button is clicked and the visitor advances to the next question

![alt text](assets/images/screenshots/)

- Once all ten questions have been answered, the final score is displayed and the Next button is replaced with a Results button

#### Results Section

![alt text](assets/images/screenshots/)
![alt text](assets/images/screenshots/)
![alt text](assets/images/screenshots/)

- The results section features a cheeky blurb based on the success (or lack thereof) of the visitor's quiz results. There are three grades based on points total, from 0-3, 4-6, and 7-10

#### Navigation Buttons

![alt text](assets/images/screenshots/)
![alt text](assets/images/screenshots/)

There are four navigation buttons: A Next button, which is hidden or displayed based on whether the visitor has answered the question; an Exit button, which exits to the main area at any time; a Sound Toggle; and a Results button, which replaces Next after all the questions have been answered  


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
- [Am I Responsive](https://ui.dev/amiresponsive) -
- [Balsamiq](https://balsamiq.com/wireframes/) -
- [Coolors](https://coolors.co/) -
- [Font Awesome:](https://fontawesome.com/) -
- [Github](https://github.com/) -
- [Gitpod](https://www.gitpod.io/#get-started) -
- [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/) -
- [Google Fonts](https://fonts.google.com/) -
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) - 
- [Pixabay](https://www.pixabay.com) -
* [Wave Web Accessibility Evaluation Tool](https://wave.webaim.org/) -

# Testing

## Feature Testing 

<details>
  <summary>Testing the Main Navigation Buttons (Pictured)</summary> 
<p align="center">
<img src="assets/images/screenshots/">
<img src="assets/images/screenshots/">
<img src="assets/images/screenshots/">
</p>
</details>

- The "Get Your Reading" button clicks to the Tarot Draw Instructions Page
- The "Test Your Knowledge" Button clicks to the Tarot Quiz Instructions Page

<details>
  <summary>Testing Tarot Reading Instructions Navigation Button (Pictured)</summary> 
<p align="center">
<img src="assets/images/screenshots/">
</p>
</details>

- The "Get Your Reading Button" clicks through to the Tarot Draw Section

<details>
  <summary>Testing the Tarot Draw Section (Pictured)</summary> 
<p align="center">
<img src="assets/images/screenshots/">
<img src="assets/images/screenshots/">
<img src="assets/images/screenshots/">
<img src="assets/images/screenshots/">
<img src="assets/images/screenshots/">
<img src="assets/images/screenshots/">
<img src="assets/images/screenshots/">
</p>
</details>

- The h3 banner above the Tarot Deck instructs the user to Tap the Deck to shuffle
- The Deck plays a shuffle sound and shakes onclick
- The Sound Toggle turns sound off and on and the icon changes to reflect the status
- The Draw button plays a chime sound and the top card of the deck changes to the drawn card
- An h3 banner appears below the deck instructing the visitor to tap the card for meaning. It disappears when the deck is tapped
- The card flips to its meaning when the deck is tapped
- The Redraw button correctly plays the chime sound and restarts the draw process
- The Exit button returns the visitor to the main starting area

<details>
  <summary>Testing the Tarot Quiz Instructions Navigation Button (Pictured)</summary> 
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

 <summary>A Table of Feature Tests</summary>

| Feature                     | Test Case                 | Outcome                   |
</details>

## Code Validation

| W3 Validator | index.html | 
|--------------|------------|
| html         | Pass       |
| CSS          | Pass       |
| JavaScript          | Pass       |

### HTML Validation
- [HTML Validator](https://validator.w3.org/) -
<details>
    <summary>HTML Validation Screenshot</summary>
     <img src="assets/images/screenshots/">
  </details>

### CSS Validation
- [CSS Validator](https://jigsaw.w3.org/css-validator/) -
<details>
    <summary>CSS Validation Screenshot</summary>
     <img src="assets/images/screenshots/">
  </details>

### JavaScript Validation
- [JavaScript Validator](https://) -
<details>
    <summary>JavaScript Validation Screenshot</summary>
     <img src="assets/images/screenshots/">
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
  <summary>Screenshots of the Starting Area</summary>
<img src="assets/images/screenshots/">
</details>

<details>
  <summary>Screenshots of the Tarot Quiz Instructions</summary>
<img src="assets/images/screenshots/">
</details>

<details>
  <summary>Screenshots of the Tarot Quiz</summary>
<img src="assets/images/screenshots/">
</details>

<details>
  <summary>Screenshots of the Tarot Quiz Results</summary>
<img src="assets/images/screenshots/">
</details>

<details>
  <summary>Screenshots of the Tarot Draw Instructions</summary>
<img src="assets/images/screenshots/">
</details>

<details>
  <summary>Screenshots of the Tarot Draw</summary>
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
  <summary>Lighthouse Test Results (Pictured)</summary> 
<img src="assets/documentation/lighthousemobile.png">
</details>

<details>
  <summary>Lighthouse Test Results (Pictured)</summary> 
<img src="assets/documentation/lighthousedesktop.png">
</details>

### Accessibility
This website was developed with special consideration for accessibility through the following methods:
- The use of semantic HTML
- Alt text for images
- Appropriate contrast levels between background and foreground features and background colors and text.
- 100% Lighthouse testing scores for Accessibility and SEO on both Mobile and Desktop formats

### Manual Testing

- Manual testing has been performed on an iPhone 11 and iPhone 13Pro using Safari and Chrome, as well as on three Windows laptops of differing screen sizes. [https://ui.dev/amiresponsive](https://ui.dev/amiresponsive) provided the screenshot for the top of this README and allowed further testing of site responsiveness. 

<details>
  <summary>Screenshots of each section of the site as tested on Am I Responsive?</summary>
   <img src="assets/images/screenshots/">
   <img src="assets/images/screenshots/">
   <img src="assets/images/screenshots/">
   <img src="assets/images/screenshots/">
</details>
<details>
  <summary>Screenshots of each page of the site as tested on my own device, iPhone 13Pro</summary>
   <img src="assets/images/screenshots/">
   <img src="assets/images/screenshots/">
   <img src="assets/images/screenshots/">
   
</details>

# Bugs

## Solved Bugs
<details>
  <summary>Misplaced Event Listeners</summary>
<img src="assets/documentation/bug1.png">
</details>

<details>
  <summary>A missing stylesheet semicolon that affected the layout </summary>
<img src="assets/documentation/bug3.png">
<p></p>
</details>

<details>
  <summary>A missing comma in script.js that broke the entire site!</summary>
<p></p>
</details>

## Unsolved Bugs

After implementing the above solutions and running all code through the necessary validators, one console error remains when I view the site through Microsoft Edge. 

<details>
  <summary>Uncaught (in promise) Error</summary>
<img src="assets/documentation/bug2.png">
<p>After consulting my mentor, Precious, and searching the error on Stack Overflow, I have come to the conclusion this console error is likely due to a plugin on my browser. It does not show up in incognito mode on my latop, in Microsoft Edge on my second test laptop, or at all on Precious' computer</p>
</details>

There are no further unsolved bugs, but there are a couple areas on mobile screens that do not function entirely as designed. Neither issue affect the overall performance of the site or impede gameplay:

- The shake effect when the tarot deck is tapped does not reliably work on Safari or Chrome mobile. A sustained tap usually results in an OS pop up to "Share" or "Save to Photos". Sometimes this can be avoided and the deck shakes properly

- The glow on the header h2 appears harsher on mobile devices than desktop, which creates slightly more contrast than intended between the text and the background

# Deployment

## To Deploy The Project

<details>
  <summary>How to Deploy (pictured)</summary> 
<p align="center">
<img src="assets/images/screenshots/">
</p>
<br>

<p align="center">
<img src="assets/images/screenshots/">
<img src="assets/images/screenshots/">
</p>
</details>

This site was deployed through GitHub repository [/erinvdoyle/tarot](https://github.com/erinvdoyle/tarot)
1. Follow the link above and click the Settings tab in the top navigation bar.
2. From there, navigate to the Code and Automation section on the left side of the screen and click the pages tab.
3. Under the "Build and deployment" header, click the drop down menu "Deploy from a branch," located under Source.
4. Under Branch, select "main" with folder "/root" and click Save.
Congratulations, your site is now deployed.

## How to Fork The Repository on GitHub

## Creating A Local Clone of The Project

# Credits

## Content

## Technical Content
Glowing Text Tutorial from w3 Schools, "How to Create A Glowing Text": https://www.w3schools.com/howto/howto_css_glowing_text.asp

JavaScript Toggle Tutorial from W3 Schools, "How TO - Toggle Hide and Show"
https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp

JS for Quiz guided by tutorial from Code with Farraz: "Build a Quiz Application with HTML, CSS, and JavaScript" https://www.codewithfaraz.com/content/161/build-a-quiz-application-with-html-css-and-javascript-step-by-step-guide

Tutorial Credit: Stack Overflow: "Can I set an opacity only to the background image of a div?" https://stackoverflow.com/questions/7241341/can-i-set-an-opacity-only-to-the-background-image-of-a-div

## Media
### Image Credits
Main Image: https://www.freepik.com/free-vector/tarot-concept-illustration_197101846.htm#position=1&from_element=collections Image by storyset on Freepik

Fortune Teller: Freepik (attribution to come)

Quiz Background: Freepik (attribution to come)

Tarot Card: https://www.freepik.com/free-vector/hand-drawn-tarot-cards-illustration_39555275.htm#fromView=search&page=2&position=24&uuid=e85cc8e3-0795-4d80-90d6-bc56a9b1ca1e Image by freepik

### Sound Credits 
Wrong answer Sound Effect by <a href="https://pixabay.com/users/eritnhut1992-25656588/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=20582">Nhựt Bùi</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=20582">Pixabay</a>

Correct answer: Sound Effect from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=6033">Pixabay</a>

### Other Resources


# Acknowledgements
- My mentor, Precious Ijege
- Our cohort standup leader, Laura Mayock

# Contact
Thank you for viewing my project. Please feel free to contact me with any questions or comments.
  
 - [erin.v.doyle@gmail.com](mailto:erin.v.doyle@gmail.com)
 - [linkedin.com/erinvdoyle](https://linkedin.com/erinvdoyle)