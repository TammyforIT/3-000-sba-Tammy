import { useState, useEffect } from "react";
import BirdList from "./BirdList";
import BirdDetails from "./BirdDetails";

export default function App() {
  const [birds, setBirds] = useState([]);
  const [selectedBird, setSelectedBird] = useState(null);

  useEffect(() => {
    fetch("https://aves.ninjas.cl/api/birds")
      .then(res => res.json())
      .then(data => setBirds(data));
  }, []);

  return (
    <div className="app">
      {selectedBird ? (
        <BirdDetails bird={selectedBird} onBack={() => setSelectedBird(null)} />
      ) : (
        <BirdList birds={birds} onSelect={setSelectedBird} />
      )}
    </div>
  );
}
