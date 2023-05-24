const express = require("express");
const path = require("path");

const app = express();

// app.get("", (req, res) => {
//   res.send(`<h1>hello! This is homepage no 1 an 2 </h1>
//   <a href="/about">Go to about page</a>
//   `);
// });

// app.get("/about", (req, res) => {
//   res.send(`<p>hello! This is about page </p>
//   <input type="text" placeholder="write something about you" value="${req.query.name}"/>
//   <a href="/home">Go to home page</a>
//   `);
// });
app.get("/help", (req, res) => {
  res.send("hello! This is help page ");
});

const publicPath = path.join(__dirname, "public");
// app.use(express.static(publicPath))

app.get("/", (_, res) => {
  res.sendFile(`${publicPath}/index.html`);
});
app.get("/about", (_, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.listen(5000);
