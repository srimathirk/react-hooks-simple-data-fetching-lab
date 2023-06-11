
import React, { useState, useEffect } from "react";

function App() {
  const [dogBreed, setDogBreed] = useState();

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => 
        setDogBreed(data.message)
      )
  }, []);

  if (!dogBreed){  return (<p>Loading...</p> )} 
  return (
    <div>
      <img src={dogBreed} alt="A Random Dog" />
    </div>
  );
}

export default App;
