import React, { useContext } from "react";
import StyleContext from "./StyleContext";

export default function CollectorButton() {
  
  const styling = useContext(StyleContext)

  return (
    <div>
      <button style={styling}>
        Click Here!
      </button>
    </div>
  );
}