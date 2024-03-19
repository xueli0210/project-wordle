import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ guess });
    setGuess("");
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
          value={guess}
          onChange={(e) => {
            const nextGuess = e.target.value.toUpperCase();
            setGuess(nextGuess);
          }}
          required
        />
      </form>
    </>
  );
}

export default GuessInput;
