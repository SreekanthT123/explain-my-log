import express from "express";
import { explainLog } from "../services/explain-log.service.js";

const router = express.Router();

router.post("/explain-log", async (req, res) => {
  const { logs, context } = req.body;

  if (!logs || typeof logs !== "string" || !logs.trim()) {
    return res.status(400).json({
      error: "Logs input is required",
    });
  }
  if (logs.length > 10000) {
  return res.status(400).json({
    error: "Logs too large to summarize"
  });
}
  try {
    const result = await explainLog(logs, context);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      error: "Unable to summarize logs",
    });
  }
});

export default router;
