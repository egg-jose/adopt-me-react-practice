import { createRoot } from "react-dom/client";
import Pet from "./Pet";

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
  return (
    <div>
      <h1>Adopt me</h1>
      {animals.map(({ name, animal, breed }, index) => (
        <Pet name={name} animal={animal} breed={breed} key={index} />
      ))}
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
