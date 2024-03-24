import React from "react";
import Banner from "../Banner/Banner";

function HappyBanner({ answer }) {
  return (
    <Banner
      status="lost"
      children={
        <>
          <div className="sad banner">
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          </div>
        </>
      }
    />
  );
}

export default HappyBanner;
