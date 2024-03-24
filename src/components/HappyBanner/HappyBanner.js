import React from "react";
import Banner from "../Banner/Banner";

function HappyBanner({ numOfGuesses }) {
  return (
    <Banner
      status="won"
      children={
        <>
          <div className="happy banner">
            <p>
              <strong>Congratulations!</strong> Got it in
              <strong>
                {" "}
                {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
              </strong>
              .
            </p>
          </div>
        </>
      }
    />
  );
}

export default HappyBanner;
