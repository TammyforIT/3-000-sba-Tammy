import BirdCard from "./BirdCard";

export default function BirdList({ birds, onSelect }) {
  return (
    <div className="bird-grid">
      {birds.map(bird => (
        <BirdCard
          key={bird.uid}
          bird={bird}
          onSelect={() => onSelect(bird)}
        />
      ))}
    </div>
  );
}
