import { useEffect, useState } from "react";
import { getBirds } from "./Api.jsx";
import Birdlist from "./Birdlist.jsx";

export default function App() {
  const [birds, setBirds] = useState([]);

  useEffect(() => {
    getBirds().then(setBirds);
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Aves Explorer
      </h1>
      <Birdlist birds={birds} />
    </>
  );
}
