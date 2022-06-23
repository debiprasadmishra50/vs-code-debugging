const express = require("express");
const morgan = require("morgan");

const port = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));

// app.use("*", (req, res, next) => {
//   console.log(`${req.method} ${req.baseUrl} ${Date.now()}`);
//   next();
// });

app.get("/hello", (req, res) => {
  res.status(200).json({ status: "success", data: "Hello, world!" });
});

app.post("/hello", (req, res) => {
  let { data } = req.body;

  if (typeof data === "string") data = data.toUpperCase();
  if (typeof data === "number") data = data * 10;

  res.status(201).json({ status: "success", data });
});

app.get("*", (req, res) => {
  res.status(404).json({ status: "failure", data: `URL "${req.url}" not found` });
});

app.listen(port, () => {
  console.log("server listening on port " + port);
});

/* 
  curl -X POST http://localhost:3000/hello -H "Content-Type: application/json" -d "{\"data\": \"this is data\"}"

  curl -X POST http://localhost:3000/hello -H "Content-Type: application/json" -d "{\"data\": 1000}"
*/
