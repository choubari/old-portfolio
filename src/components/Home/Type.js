import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Ingénieur en développement Web et Mobile",
          "Graphic Designer",
          "Créateur de Contenu",
          "Volontaire chez IEEE",
          "Contributeur à l'Open Source",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
