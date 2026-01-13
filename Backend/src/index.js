import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import explainLogRoutes from "./routes/explain-log.route.js"

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "10kb" }));

app.use("/api", explainLogRoutes);

app.get("/health", (_, res) => {
  res.json({ status: "OK" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
