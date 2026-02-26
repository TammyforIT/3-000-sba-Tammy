import { useSelector } from "react-redux";
import BirdCard from "./birdcard";

export default function BirdList() {
  const birds = useSelector((state) => state.birds.list);

  return (
    <div className="bird-grid">
      {birds.map((b) => (
        <BirdCard key={b.uid} bird={b} />
      ))}
    </div>
  );
}
