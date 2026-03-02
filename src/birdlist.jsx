import BirdCard from "./birdcard.jsx";

export default function BirdList({ birds }) {
  return (
    <div className="bird-grid">
      {birds.map((b) => (
        <BirdCard key={b.uid} bird={b} />
      ))}
    </div>
  );
}
