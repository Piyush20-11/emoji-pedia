import React from "react";
import Header from "./Header";
import emj from "../emojipedia.js";
import Card from "./Card";

function createCard(emojiped) {
  return (
    <Card
      key={emojiped.id}
      emoji={emojiped.emoji}
      name={emojiped.name}
      meaning={emojiped.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <Header />
      <dl className="dictionary">{emj.map(createCard)};</dl>
    </div>
  );
}

export default App;
