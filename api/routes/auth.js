import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello thiss is auth endpoint");
});

export default router;
