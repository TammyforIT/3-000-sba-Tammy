export default function BirdCard({ bird }) {
  const img = bird?.images?.main;   
  const english = bird?.name?.english || "Unknown bird";
  const latin = bird?.name?.latin || "Unknown species";

  return (
    <div className="bird-card">
      {img && <img src={img} alt={english} />}
      <h3>{english}</h3>
      <p><i>{latin}</i></p>
    </div>
  );
}
