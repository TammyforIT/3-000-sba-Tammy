export default function BirdCard({ bird }) {
  return (
    <a
      href={bird._links.self}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="bird-card">
        <img src={bird.images.main} alt={bird.name.english} />
        <h3>{bird.name.english}</h3>
        <p><i>{bird.name.latin}</i></p>
      </div>
    </a>
  );
}
