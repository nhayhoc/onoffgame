const port = parseInt(process.env.PORT, 10) || 3000;
const express = require("express");
const app = express();
var turn_on = true;
app.get("/", (req, res) => res.send("Hello World!"));
app.get("/status", (req, res) => {
  res.json({ turn_on });
});
app.get("/toggle/:token", (req, res) => {
  if (!req.params.token || req.params.token == "jkvlcja9j98484kjv1&(*#&@Y")
    return res.status(401).json({ error: "not auth" });
  turn_on = !turn_on;
  res.json({ message: `turn ${turn_on ? "on" : "off"} success!` });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
