import { useState, useEffect } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";

const ANIMALS = ["bird", "dog", "cat", "reptile", "rabbit"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleAnimal = (e) => {
    setAnimal(e.target.value);
    setBreed("");
  };
  const handleBreed = (e) => {
    setBreed(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    requestPets();
  };
  return (
    <div className="search-params">
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            onChange={handleLocation}
            type="text"
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={handleAnimal}
            onBlur={handleAnimal}
          >
            <option />
            {ANIMALS.map((a, index) => (
              <option value={a} key={index}>
                {a}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="animal">
          Breed
          <select
            id="breed"
            disabled={breeds.length === 0}
            value={breed}
            onChange={handleBreed}
            onBlur={handleBreed}
          >
            <option />
            {breeds.map((b, index) => (
              <option value={b} key={index}>
                {b}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
