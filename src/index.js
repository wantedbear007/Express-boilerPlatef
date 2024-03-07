const express = require("express")

const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Server is working !",
  })
})

app.listen(PORT, () => {
  console.log(`Your can access it at http://127.0.0.1:${PORT}`)
})