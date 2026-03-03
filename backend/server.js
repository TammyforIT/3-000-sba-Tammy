import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());

// Route your React app will call
app.get("/birds", async (req, res) => {
  try {
    const response = await fetch("https://aves.ninjas.cl/api/birds");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch bird data" });
  }
});

app.listen(3000, () => {
  console.log("Express server running on port 3000");
});
