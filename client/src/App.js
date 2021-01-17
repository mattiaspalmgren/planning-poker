import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "/api/items";

function App() {
  const [data, setData] = useState({ items: [] });

  useEffect(() => {
    async function fetchFromApi() {
      const response = await fetch(API_URL);
      const data = await response.json();
      setData({ items: data.data });
    }

    fetchFromApi();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          App
        </p>
        {data.items?.length > 0 &&
          data.items.map((item) => (
            <p key={item.description}>{item.description}</p>
          ))}
      </header>
    </div>
  );
}

export default App;
