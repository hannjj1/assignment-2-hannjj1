const fetch = require("node-fetch");
const bodyParser = require("body-parser");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const port = process.env.PORT || 3000;
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {                        //Default Page/Login Page
  res.status(200).render("login");
});

app.get("/home", (req, res) => {                    //Home Page
  res.status(200).render("home");
});

app.get("/contact", (req, res) => {                 //Contact Page
  res.status(200).render("contact");
});

app.get("/cellphone", (req, res) => {               //Cellphones page
  res.status(200).render("cellphone");
});

app.get("/camera", (req, res) => {                  //Camera page
  res.status(200).render("camera");
});



app.get("*", function(req, res){                    //If page isn't any of the above, it will send you to the Error page.
  res.status(404).render('error')
})

app.post("/home", (req, res) => { 
  let userid = req.body.userid;
  let pwd = req.body.pwd;
  if (userid === "user" && pwd === "P@ssw0rd123") { //Check if the Username and Password is correct
    res.status(200).render("home");                 //If it is correct, it will take you to the home page.
  } else res.status(200).redirect("/");             //Else it will refresh the page you are on
});

// Listening to port 3000
app.listen(port, _ => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
