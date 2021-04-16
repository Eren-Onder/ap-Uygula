import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [meteo, setMeteo] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((response) => setMeteo(response));
  }, []);
  return (
    <div>
      {meteo.map((data) => {
        return (
          <div>
            <h2>{("country :", data.title)}</h2>
            <h2>{("city :", data.competed)}</h2>
            <h2>{("state code :", data.userId)}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;
