const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const publicationsRoutes = require("./routes/publications");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send({ status: "ok", message: "IAI Portal backend is running." });
});

app.use("/api/publications", publicationsRoutes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`IAI Portal backend listening on http://localhost:${port}`);
});
