import React from "react";

function GuessInput({ handleSubmitGuesses }) {
  const [tentativeGuess, setTentativeGuessGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuesses(tentativeGuess);
    setTentativeGuessGuess("");
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          pattern="[A-Z]{5,5}"
          title="5 letter word"
          value={tentativeGuess}
          onChange={(e) => {
            const nextGuess = e.target.value.toUpperCase();
            setTentativeGuessGuess(nextGuess);
          }}
          required
        />
      </form>
    </>
  );
}

export default GuessInput;
