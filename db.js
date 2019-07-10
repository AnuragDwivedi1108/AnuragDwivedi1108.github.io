var express = require("express");
var nodemailer = require('nodemailer');
var app     = express();
var path    = require("path");
var mysql = require('mysql');
var bodyParser = require('body-parser');
//app.set('/',path.join(__dirname))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tiger",
  database: "portfolio"
});
app.get('/',function(req,res){
  res.sendFile(__dirname + '/alert.html');
 // res.sendFile(path.join('/alert.html'));
});
app.post('/submit',function(req,res){


  var email=req.body.email;
  var feedback=req.body.feedback;
  res.write('You sent the email "' + req.body.email+'".\n');
  res.write('You sent the feedback "' + req.body.feedback+'".\n');

  con.connect(function(err) {
  if (err) throw err;
  var sql = "INSERT INTO info (mail,feedback) VALUES ( '"+email+"','"+feedback+"')";
  console.log(sql);
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
     res.end();
  });
  });
})

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'anuragd2009@gmail.com',
    pass: 'MSI@11081999'
  }
});

var mailOptions = {
  from: 'anuragd2009@gmail.com',
  to: req.body.email,
  subject: 'feedback',
  text: 'Thanks for your feedback.!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
app.listen(3000);
console.log("Running at Port 3000");
