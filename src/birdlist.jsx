import Birdcard from "./Birdcard";

export default function Birdlist({ birds, onSelect }) {
  return (
    <div className="bird-grid">
      {birds.map(bird => (
        <Birdcard
          key={bird.uid}
          bird={bird}
          onSelect={() => onSelect(bird)}
        />
      ))}
    </div>
  );
}
