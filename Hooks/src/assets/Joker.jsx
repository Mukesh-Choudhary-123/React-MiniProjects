import React, { useEffect, useState } from "react";

const Joker = () => {
  let [joke, setJoke] = useState({});

  const URL = "https://quotenjoke.onrender.com/joke";
  const getNewJoke = async () => {
    let respose = await fetch(URL);
    let jsonResponse = await respose.json();
    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
  };

  useEffect(() => {
    async function getFirstJoke() {
      let respose = await fetch(URL);
      let jsonResponse = await respose.json();
      console.log(jsonResponse);
      setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });

      getFirstJoke();
    }
  }, []);

  return (
    <div>
      <h1>Joker !</h1>
      <h2>{Joker.setup}</h2>
      <h2>{Joker.punchline}</h2>
      <button onClick={getNewJoke}>New Joke</button>
    </div>
  );
};

export default Joker;
