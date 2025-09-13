const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send([
    {
      name: "Yogesh",
      age: 24,
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
