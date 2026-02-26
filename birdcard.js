export default function BirdCard({ bird }) {
  return (
    <div className="bird-card">
      <img src={bird.images.main} alt={bird.name.english} />
      <h3>{bird.name.english}</h3>
      <p><i>{bird.name.latin}</i></p>
    </div>
  );
}
