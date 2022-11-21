const express = require("express");
const mysql = require("mysql2");
var cors = require("cors");
const createError =require("http-errors")
const resposeTimeout = require("response-time")
var aqarRouter = require("./router/aqarRouter");
var libRouter = require("./router/libRouter");
const path = require("path");
const app = express();
app.use(resposeTimeout())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
/* ----------------------------------------------- */

/* Router */
app.use("/lib", libRouter);
app.use("/aqar", aqarRouter);
/* ----------------------------------------------- */


/* --------------- view template ------------------- */
/* ----------------------------------------------- */



/* Basic Route */

app.get("/", (req, res) => {
    res.send("welcome To AqarMarket");

  });
/* ----------------------------------------------- */
/* Start Up Server */
app.listen(3000, () => {
    console.log("listening on http://localhost/3000","procces Id " + process.pid );
  });
/* ----------------------------------------------- */

/* Shot Down Server */
  process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
  });
  
process.on('SIGINT', () => {
  console.info('SIGTERM signal received.');
  console.log('Closing http server.');
  server.close(() => {
    console.log('Http server closed.');
  });
});
/* ----------------------------------------------- */  
  
