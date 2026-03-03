import BirdCard from "./Birdcard.jsx";

export default function Birdlist({ birds }) {
  return (
    <div className="bird-grid">
      {birds.map((b) => (
        <BirdCard key={b.uid} bird={b} />
      ))}
    </div>
  );
}
