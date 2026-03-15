const express = require("express");
const { listPublications, createPublication } = require("../controllers/publicationsController");

const router = express.Router();

// GET /api/publications
router.get("/", async (req, res) => {
  const items = await listPublications();
  res.json(items);
});

// POST /api/publications
router.post("/", async (req, res) => {
  const payload = req.body;
  const created = await createPublication(payload);
  res.status(201).json(created);
});

module.exports = router;
