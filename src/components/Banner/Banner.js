import React from "react";

function Banner({ status, children }) {
  return <div status={status}>{children}</div>;
}

export default Banner;
