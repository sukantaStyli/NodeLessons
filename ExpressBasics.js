const express = require("express");
const app = express();
const path = require('path');

const requiredPath = path.join(__dirname, 'pages')



// rendering html document by send()
app.get("", (req, res) => {
  console.log("data sent by browser", req.query);
  res.send(`Hello this is a home page, welcome
  <input type="text" value="${req.query.name}" />
  `);
});


// rendering simple strings using send()
app.get("/about", (req, res) => {
  res.send("Hello this is a about page");
});
 
app.get("/contact", (req, res) => {
  res.send("reach us at 9090909090");
});

// rendering html file using sendFile()
app.get("/sentPage", (req, res) => {
    res.sendFile(`${requiredPath}/filePage.html`);
  });

app.listen(8000);
