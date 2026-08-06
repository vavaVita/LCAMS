const express = require("express");
const app = express();

// THIS is the important part
app.use(express.static(__dirname));

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});