import React from "react";

function GuessInput({ handleSubmitGuesses, gameStatus }) {
  const [tentativeGuess, setTentativeGuessGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuesses(tentativeGuess);
    setTentativeGuessGuess("");
  }

  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={handleSubmit}
        style={gameStatus !== "running" ? { display: "none" } : {}}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          ref={inputRef}
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
