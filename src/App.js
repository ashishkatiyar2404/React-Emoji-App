import React, { useState } from "react";
import "./styles.css";

// var userName = "Ashish";

// var score = 0;

const emojiBucket = {
  "☢": "Radioactive Emoji",
  "": "Bio Hazard",
  "🀄": "Mahjong Game Stone “Red Dragon”",
  "☯": "Yin Yang",
  "🕎": "Menorah",
  "🎏": "Carp Streamer",
  "🌀": "Cyclone",
  "🚸": "Caution Children",
  "🔱": "Trident Emblem",
  "💯": "Hundred Points Symbol",
  "💢": "Anger Symbol",
  "☮": "Peace symbol",
  "☪": "Star and half moon",
  "🕉": "Om Symbol",
  "☯": "Yin Yang",
  "☸": "Wheel Of Dharma",
  "✡": "Star Of David",
  "㊙": "Secret",
  "㊗": "Congratulations",
  "⚠": "Warning",
  "Ⓜ": "Encircled Latin capital M",
  "🈂 ": "Free Of Charge"
};

var emojisWeKnow = Object.keys(emojiBucket);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiBucket[userInput];
    // console.log(meaning);
    if (meaning === undefined) {
      meaning = "This Symbol isn't avaliable in our Database!";
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
      <input
        style={{ width: "300px", height: "30px" }}
        placeholder="Insert the special symbols to see the name it belong to"
        onChange={emojiInputHandler}
      />
      <h2> {meaning} </h2>
      <h3>
        <strong>Special Symbols</strong>
      </h3>
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
