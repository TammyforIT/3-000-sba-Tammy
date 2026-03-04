export default function BirdCard({ bird, onSelect }) {
  return (
    <div className="bird-card" onClick={onSelect}>
      <img src={bird.images.thumb} alt={bird.name.english} />
      <h3>{bird.name.english}</h3>
    </div>
  );
}
