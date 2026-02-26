export async function getBirds() {
  const res = await fetch("https://aves.ninjas.cl/api/birds");
  return res.json();
}
