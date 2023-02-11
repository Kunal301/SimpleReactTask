import TypeAnimals from "./diffanimals";
import "./App.css";
import { useState } from "react";

function getRandomAnimal() {
  const animals = ["bird", "cat", "dog", "horse", "gator", "cow"];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleclick = () => {
    //so this will create a brand new array and
    // it will add all the existing elements present in animals array
    // and in the very end, going to put a random animal as well.
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <TypeAnimals type={animal} key={index} />;
  });

  // After applying map function we will be getting brand new array
  // which will look like [
  //<TypeAnimals type = {animals[0]} />
  //<TypeAnimals type = {animals[1]} />
  //<TypeAnimals type = {animals[2]}] />
  return (
    <div className = "app">
      <button onClick={handleclick}>Add animal</button>
      <div  className = "animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
