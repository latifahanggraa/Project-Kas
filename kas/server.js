const express = require("express")
const app = express()
var methodOverride = require("method-override")
const path = require("path")
const con = require("./config/db.js")

// Using pug template engine
app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname + '/public')))

// connecting route to database
app.use(function(req, res, next) {
  req.con = con
  next()
})

// parsing body request
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

// include router
const kasRouter = require("./routes/kasRouter")

// routing
app.use("/kas", kasRouter)

// starting server
app.listen(3000, function() {
  console.log("server listening on port 3000")
})
