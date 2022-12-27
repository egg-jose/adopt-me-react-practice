import React from "react";
import { createRoot } from "react-dom";

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  const animals = [
    {
      name: "Chivila",
      animal: "dog",
      breed: "viralata",
    },
    {
      name: "Cow",
      animal: "elefant",
      breed: "unknown",
    },
    {
      name: "The Fantastic Mr Fox",
      animal: "Fox",
      breed: "Red Fox",
    },
  ];
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    animals.map(({ name, animal, breed }, index) =>
      React.createElement(Pet, {
        name,
        animal,
        breed,
        key: index,
      })
    ),
  ]);
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
