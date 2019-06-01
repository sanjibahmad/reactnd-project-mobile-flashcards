# Udacity ReactND Project - Mobile Flashcards

The Mobile Flashcards app is the 3rd and final project required for the Udacity React Nanodegree program. 
This is a React Native app so the same codebase is used to create packages for both Androids and iOS. 
The app has been tested on two physical devices Samsung S10 and Apple iPad using Expo.

The Mobile Flashcards app provides features similar to typical index cards used for studying. 
The app allows the user to create decks. Each deck contains a set of cards with a question and an answer.
The user can start a quiz for a given deck and evaluate themselves for correct or incorrect answers.
Users are given a score at the end of completing a quiz session.

A scheduled notification is shown everyday at 3:00 pm if the user hasn't attempted at least one quiz question for that day.

## Technical Specs

The app uses the following packages:

### Core:
- react
- react-native
- expo

### Navigation:
- react-navigation
- react-navigation-tabs

### State Management:
- redux
- react-redux
   - The react-redux needs a downgraded version 6.0.1 as of June 2, 2019 due to compatibility issues with react
   - Versions greater than 6.0.1 (current version was at 7.0.3) generates the error: React.default.memo is not a function (React-Native) wrapWithConnect
   - More information can be found at the links below:
      - https://stackoverflow.com/questions/55624579/react-default-memo-is-not-a-function-react-native-wrapwithconnect
      - https://stackoverflow.com/questions/55691069/how-to-fix-reactdefault-memo-is-not-a-function-in-reactdefault-mem
      - https://forums.expo.io/t/react-default-memo-is-not-a-function/21623

### Styling:
- react-native-elements

## Installation

1. You need to have Node.js, npm and yarn installed
2. Proceed by cloning or downloading the project as a zip
3. Extract and change directory to the project folder
4. Open your Terminal or Command prompt and type ```yarn install```
5. Then type ```yarn start```
6. Your default browser will open with the Metro Bundler running at port 19002 with the address: http://localhost:19002/

![Metro Bundler running](https://raw.githubusercontent.com/sanjibahmad/reactnd-project-mobile-flashcards/master/screenshots/0-metro-bundler.png)

## How to Run the App
The app has been tested on both Android and iOS physical devices 

- Install Expo https://expo.io/ on both Android and iOS
- All your devices (computer running the Metro Bundler, Android and iOS device) should be connected on the same local area network

### Android
1. Go to the Play Store and install Expo
2. Run Expo on the device
3. Scan the QR code available on the browser running the Metro Bundler
4. The Flashcards app should start 

### iOS
1. Go to the Apple Store and install Expo
2. Run Expo on the device
3. You can't scan the QR code on iOS, so you will have to either "Send link with email" or copy paste the link exp://192.168.0.109:19000 in Safari running on iOS
   - The network address may vary depending on your local area network setup so you might get something like exp://172.16.1.2:19000
   - Please look at the browser running the Metro Bundler, the link should be will be available under CONNECTION - please see the screenshot above
   - Safari will ask permission to open the app in Expo: Open this page in "Expo"? Click Open
4. The Flashcards app should now start

## Flashcards App

Screenshots below show the app running on both Android and iOS device side by side.

### Decks

<img src="https://raw.githubusercontent.com/sanjibahmad/reactnd-project-mobile-flashcards/master/screenshots/1-home-android.jpg"
height="400" />
<img src="https://raw.githubusercontent.com/sanjibahmad/reactnd-project-mobile-flashcards/master/screenshots/1-home-ios.png"
height="400" />

Decks view is also the home view, once you start the app you get the default Decks view. 
The first time you run the app, you will get 3 decks created by default:

- React
- JavaScript
- HTML and CSS

Feel free to delete these decks or create your own.

Every deck has a unique color based on an algorithm that creates a color value based on the text provided.

### Add Deck

<img src="https://raw.githubusercontent.com/sanjibahmad/reactnd-project-mobile-flashcards/master/screenshots/2-add-deck-android.jpg"
height="400" />
<img src="https://raw.githubusercontent.com/sanjibahmad/reactnd-project-mobile-flashcards/master/screenshots/2-add-deck-ios.png"
height="400" />

You can create your own Decks by touching the Add Deck tab. 
Once a deck is created you are redirected back to the Decks view where you can see your freshly created deck.

#### Validation

<img src="https://raw.githubusercontent.com/sanjibahmad/reactnd-project-mobile-flashcards/master/screenshots/2-add-deck-validate-android.jpg"
height="400" />
<img src="https://raw.githubusercontent.com/sanjibahmad/reactnd-project-mobile-flashcards/master/screenshots/2-add-deck-validate-ios.png"
height="400" />

Two validation checks are performed:
- Checks for empty values, deck title is required
- Checks for unique titles, deck title with an existing value cannot be created

### Individual Deck

<img src="https://raw.githubusercontent.com/sanjibahmad/reactnd-project-mobile-flashcards/master/screenshots/3-deck-view-android.jpg"
height="400" />
<img src="https://raw.githubusercontent.com/sanjibahmad/reactnd-project-mobile-flashcards/master/screenshots/3-deck-view-ios.png"
height="400" />

Clicking on deck from the decks listing view shows the individual Deck view.

Here you can:
- Add a card to the deck
- Start a quiz
- Delete a deck

### Add Card to Deck

<img src="https://raw.githubusercontent.com/sanjibahmad/reactnd-project-mobile-flashcards/master/screenshots/4-add-card-to-deck-android.jpg"
height="400" />
<img src="https://raw.githubusercontent.com/sanjibahmad/reactnd-project-mobile-flashcards/master/screenshots/4-add-card-to-deck-ios.png"
height="400" />

A deck card is the equivalent of the flash card or index card used for studying or exam preparation.

A deck card consists of:
- a question
- an answer

#### Validation

<img src="https://raw.githubusercontent.com/sanjibahmad/reactnd-project-mobile-flashcards/master/screenshots/4-add-card-to-deck-validate-android.jpg"
height="400" />
<img src="https://raw.githubusercontent.com/sanjibahmad/reactnd-project-mobile-flashcards/master/screenshots/4-add-card-to-deck-validate-ios.png"
height="400" />

A simple validation is performed so that both question and answer fields have to be filled in.

### Quiz

<img src="https://raw.githubusercontent.com/sanjibahmad/reactnd-project-mobile-flashcards/master/screenshots/5-quiz-android.jpg"
height="400" />
<img src="https://raw.githubusercontent.com/sanjibahmad/reactnd-project-mobile-flashcards/master/screenshots/5-quiz-ios.png"
height="400" />

A quiz can be started on any deck as long as there is at least one card.
The quiz will run through all the cards in the deck. 

<img src="https://raw.githubusercontent.com/sanjibahmad/reactnd-project-mobile-flashcards/master/screenshots/5-quiz-answer-android.jpg"
height="400" />
<img src="https://raw.githubusercontent.com/sanjibahmad/reactnd-project-mobile-flashcards/master/screenshots/5-quiz-answer-ios.png"
height="400" />

The user can flip a card to check the answer and mark whether it was correct or not.

### Quiz Result & Score

<img src="https://raw.githubusercontent.com/sanjibahmad/reactnd-project-mobile-flashcards/master/screenshots/5-quiz-score-android.jpg"
height="400" />
<img src="https://raw.githubusercontent.com/sanjibahmad/reactnd-project-mobile-flashcards/master/screenshots/5-quiz-score-ios.png"
height="400" />

The quiz result with the score is shown when the user has gone through all the quiz questions.

### Delete Deck

<img src="https://raw.githubusercontent.com/sanjibahmad/reactnd-project-mobile-flashcards/master/screenshots/6-delete-deck-android.jpg"
height="400" />
<img src="https://raw.githubusercontent.com/sanjibahmad/reactnd-project-mobile-flashcards/master/screenshots/6-delete-deck-ios.png"
height="400" />

The user can delete a deck anytime. Deleting a deck will also delete all the questions in the deck.
