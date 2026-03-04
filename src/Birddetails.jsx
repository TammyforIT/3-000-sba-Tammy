export default function BirdDetails({ bird, onBack }) {
  return (
    <div style={{ padding: 20 }}>
      <button onClick={onBack}>Back</button>

      <h2>{bird.name.english}</h2>

      <img
        src={bird.images.main}
        alt={bird.name.english}
        width={300}
      />

      <p><strong>Latin:</strong> {bird.name.latin}</p>
      <p><strong>Spanish:</strong> {bird.name.spanish}</p>

      {bird.audio && bird.audio.file && (
        <div>
          <p><strong>Audio:</strong></p>
          <audio controls src={bird.audio.file}></audio>
        </div>
      )}
    </div>
  );
}
