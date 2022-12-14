import express from "express";
import db from "../database/dbConnector.js";
import bcrypt from "bcrypt";
async function hashPassword(plaintextPassword) {
  const hash = await bcrypt.hash(plaintextPassword, 10);
  return hash;
}
const router = express.Router();

//AUTHOR: MIHIR MESIA

router.post("/send_wishlist_data", async (req, res) => {
  const resp = await db.send_wishlist(req?.body || {});
  res.status(resp).send();
});

//AUTHOR: MIHIR MESIA

router.get("/fetch_wishlist_data/:user", async (req, res) => {
  const resp = await db.fetch_wishlist(req?.params?.user || "");
  res.send(JSON.stringify(resp));
});

//AUTHOR: MIHIR MESIA
router.delete("/deleteWishlist", async (req, res) => {
  const resp = await db.deleteWishlist(req?.body || "");
  res.send({ status: resp });
});

//AUTHOR: MIHIR MESIA

router.get("/fetch_recent_orders/:id", async (req, res) => {
  const resp = await db.fetchAllOrders(req?.params?.id || "");
  res.send(JSON.stringify(resp.data));
});

//AUTHOR: MIHIR MESIA

router.get("/getBurgerData", async (req, res) => {
  const resp = await db.getBurgerData();
  res.status(resp.status).json(resp.data);
});

//AUTHOR: MIHIR MESIA

router.get("/getHashed/:pass", async (req, res) => {
  const pass = await hashPassword(req.params.pass);
  res.json({ data: pass });
});
export default router;
