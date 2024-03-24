import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers.js";

function Guess({ value, answer }) {
  const letterCheckedArray = checkGuess(value, answer);
  return (
    <p className="guess">
      {range(5).map((index) => (
        <span
          className={
            value ? `cell ${letterCheckedArray[index].status}` : "cell"
          }
          key={index}
        >
          {value ? value[index] : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
