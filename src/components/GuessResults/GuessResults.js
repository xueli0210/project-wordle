import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";

function GuessResults({ answer, guesses }) {
  return (
    <>
      {" "}
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
          <Guess value={guesses[index]} key={index} answer={answer} />
        ))}
      </div>
    </>
  );
}

export default GuessResults;
