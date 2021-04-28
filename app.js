const express = require("express");
const api = require("./api");
const app = express();
const port = 5000;
app.use(express.json());

app.listen(port, () => {
  console.log(`Horror movie app is running on port ${port}.`);
});

app.get("/horrors/", api.getAllHorrors);
app.get("/horrors/:id", api.getHorrorById);
app.post("/horrors/", api.addHorror);
app.put("/horrors/:id", api.updateHorror);
app.delete("/horrors/:id", api.deleteHorror);
