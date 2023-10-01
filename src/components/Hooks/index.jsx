import React, { useState } from "react";

export default function Hooks() {
  const chakras = ["Muladhara", "Svadhishthana", "Manipura", "Anahata", "Vishuddha", "Ajna", "Sahastrara"];
  const [chakra, setChakra] = useState("Click button for Random Chakra present in our body");

  const getRandomChakra = () => {
    const newRandomChakra = chakras[Math.floor(Math.random() * chakras.length)];
    setChakra(newRandomChakra);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h4>{chakra}</h4>
      <button onClick={() => getRandomChakra()}>Click for Random Chakra</button>
    </div>
  );
}
