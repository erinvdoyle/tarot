# Welcome to Tarot Card of the Day
## Your destiny awaits...

<p align="center">
  <img src="am-i-responsive">
</p>

[Visit the deployed site](https://erinvdoyle.github.io/tarot)


# Introduction

Welcome to Tarot Card of the Day, where the mystic meets the whimsical. This fully responsive, interactive website is designed to enchant its visitors with a daily dose of tarot wisdom. Its punchy vector images and bright color scheme keep the look and feel light-hearted and fun, while the 44 different cards in the Tarot Draw section provide a surprise factor and breadth of content to encourage return visits. The Quiz offers an opportunity to test one's knowledge and learn more about the meaning of the cards. This site intends to give the visitor a fun distraction (one might say a cosmic GPS for life's little questions) from their day, one tarot card at a time.

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

## User Stories
   
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

Tarot Card of the Day has two main game sections, as indicated by the bright red "Get Your Reading" and "Take the Quiz" buttons at center screen. A fixed header above displays the site logo, and a hero illustration of a Tarot draw takes bottom screen on the starting area until either of the main section buttons are clicked. 

Each button clicks to its own instructions section, which occupies the entire viewport onclick, starting below the header. Once the visitor has read the instructions on how to play, the game described is accessed by another button click, and the game section replaces the instructions. The visitor is offered the chance to exit and return to the starting throughout each game.

More about each section and all of the features can be found in the (#features) section.


## Design Choices

### Color Scheme

### Typography



# Features

## Favicon

## Header

## Hero Image

## Main Navigation Buttons

## Tarot Draw Section

### Instructions

#### h3

#### Instructions content

#### Instructions image

#### Navigation button to "Get your Reading!"

### The Tarot Draw

#### h3 

#### Tarot Deck

- Starting mode is the deck of cards, featuring the back of one of the cards

- When the visitor clicks on the deck, as instructed in the h3 above it, the deck shakes and plays a shuffling sound

- There are three navigation buttons: The sound toggle, the "Draw" button" and the "Exit" button

- When the visitor taps "Draw", a magical chime sound plays, and a card is chosen at random and displayed
  - An h3 banner appears below the card, instructing the visitor to tap the card again to read its meaning

- When the card is tapped, the fortune is revealed

- From this point, the visitor can choose to "Redraw" another card and repeat the same process for a new fortune, or "Exit" back to the starting area

#### Navigation Buttons

- As described above in the Tarot Deck section, there are three buttons: A sound toggle, which can be activated at any time; A Redraw button, which allows the visitor to draw a different card; and an Exit button, which clicks back to the starting area

## Tarot Quiz Section

### Instructions 

#### h3

#### Instructions Content

#### Navigation Button

### The Tarot Quiz

#### h3

#### Quiz Content

- The quiz is laid out with question, answer options, and internal navigation buttons in the same container

- Once the visitor has read the question, they can click on their answer choice

- Each answer vibrates when a choice is made, with the correct answer momentarily enlarging and changing to a green background color, while the incorrect answers change to a red background with text struck through

- A "Next" button appears when the question answers are revealed so that the visitor may advance to the next question. This button disappears once clicked until the next question is answered so that the visitor may not skip questions

- An h3 banner appears below the quiz container when the visitor chooses their answer to the first question. This banner displays the score and changes background color either to green for correct or red for incorrect and resets each question to its standard background color when the "next" button is clicked to advance to the next question

- Once all ten questions have been answered, final score is displayed and the Next button is replaced with a Results button

#### Results Section

- The results section features a cheeky blurb based on the success (or lack thereof) of the visitor's quiz results. There are three grades based on points total, from 0-3, 4-6, and 7-10

#### Navigation Buttons

There are four navigation buttons: A Next button, which is hidden or displayed based on whether the visitor has answered the question; and Exit button, which exits to the main area at any time; a sound toggle; and a Results button, which replaces Next after all the questions have been answered  


# Future Features
- A glossary or dictionary of each of the Major Arcana cards and their meanings
- A history of a visitor's previous readings
- A multi-card reading option (3, 7)
- An explanded quiz with a larger number of questions to draw from
- An expanded tarot reading which draws from a full 78 card deck 

# Technologies

## Languages Used

## Frameworks, Libraries, and Software

# Testing

## Code Validation

### HTML Validation

### CSS Validation

### JavaScript Validation

## Responsiveness Test

## Browser Compatibility

## Additional Testing

### Lighthouse

### Peer Review

## Fixed Bugs

# Deployment

## To Deploy The Project

## How to Fork The Repository on GitHub

## Creating A Local Clone of The Project

# Credits

## Content

## Technical Content

## Media

# Acknowledgements

### Image Credits
Main Image: https://www.freepik.com/free-vector/tarot-concept-illustration_197101846.htm#position=1&from_element=collections Image by storyset on Freepik

Fortune Teller: Freepik (attribution to come)

Quiz Background: Freepik (attribution to come)

Tarot Card: https://www.freepik.com/free-vector/hand-drawn-tarot-cards-illustration_39555275.htm#fromView=search&page=2&position=24&uuid=e85cc8e3-0795-4d80-90d6-bc56a9b1ca1e Image by freepik

### Sound Credits 
Wrong answer Sound Effect by <a href="https://pixabay.com/users/eritnhut1992-25656588/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=20582">Nhựt Bùi</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=20582">Pixabay</a>

Correct answer: Sound Effect from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=6033">Pixabay</a>

### Tutorials
Glowing Text Tutorial from w3 Schools, "How to Create A Glowing Text": https://www.w3schools.com/howto/howto_css_glowing_text.asp

JavaScript Toggle Tutorial from W3 Schools, "How TO - Toggle Hide and Show"
https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp

JS for Quiz guided by tutorial from Code with Farraz: "Build a Quiz Application with HTML, CSS, and JavaScript" https://www.codewithfaraz.com/content/161/build-a-quiz-application-with-html-css-and-javascript-step-by-step-guide

Tutorial Credit: Stack Overflow: "Can I set an opacity only to the background image of a div?" https://stackoverflow.com/questions/7241341/can-i-set-an-opacity-only-to-the-background-image-of-a-div

*** Add remaining JS tutorials as noted in script.js; shimmer text css effect

### Other Resources


### Acknowledgements

My mentor Precious Ijebe
Our cohort standup leader Laura Mayock