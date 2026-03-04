import { useState, useEffect } from "react";
import BirdList from "./BirdList";
import BirdDetails from "./BirdDetails";

export default function App() {
  const [birds, setBirds] = useState([]);
  const [selectedBird, setSelectedBird] = useState(null);

 
  useEffect(() => {
    async function loadBirds() {
      try {
        const res = await fetch("https://aves.ninjas.cl/api/birds");
        const data = await res.json();
        setBirds(data);
      } catch (err) {
        console.error("Failed to load birds:", err);
      }
    }

    loadBirds();
  }, []);

  return (
    <div className="app">
      {selectedBird ? (
        <BirdDetails 
          bird={selectedBird} 
          onBack={() => setSelectedBird(null)} 
        />
      ) : (
        <BirdList 
          birds={birds} 
          onSelect={setSelectedBird} 
        />
      )}
    </div>
  );
}
