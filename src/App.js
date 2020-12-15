import React, { useState } from "react";
import "./styles.css";

// var userName = "Ashish";

// var color = "red";
// var score = 0;

const emojiBucket = {
  "😃": "Smiling",
  "⚽": "FootBall",
  "🎂": "Birthday Cake",
  "🏀 ": "Basket Ball",
  "🏐": "Volly Ball",
  "🏉": "Roughby Ball",
  "🎾": "Tennis",
  "🎳": "Bowling",
  "🥊": "Boxing",
  "🎲": "Dice",
  "🎨": "Painting"
};

var emojisWeKnow = Object.keys(emojiBucket);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiBucket[userInput];
    // console.log(meaning);
    if (meaning === undefined) {
      meaning = "We dont have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiBucket[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Welcome</h1>
      <input onChange={emojiInputHandler} />
      <h2> {meaning} </h2>
      <h3> Emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
