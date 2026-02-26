import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBirds } from "./birdsslice";
import BirdList from "./birdlist";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBirds());
  }, [dispatch]);

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Aves Explorer
      </h1>
      <BirdList />
    </>
  );
}
