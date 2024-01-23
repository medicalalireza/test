import sound from "./1.mp3";
import React from "react";

const AudioPlayer = () => {
  function play() {
    new Audio(sound).play();
  }
  return (
    <div>
      <button onClick={() => play()}>Play Sound</button>
    </div>
  );
};

export default AudioPlayer;
