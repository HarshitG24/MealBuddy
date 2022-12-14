// AUTHOR: HARSHIT GAJJAR
import express from "express";
import db from "../database/dbConnector.js";
const router = express.Router();

router.post("/checkout", async (req, res) => {
  const status = await db.checkoutItems(req?.body || {});
  res.json({ code: status });
});

export default router;
