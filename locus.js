const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

var nodemailer = require('nodemailer');

var MARIBotTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'maribot.computer@gmail.com',
        pass: 'cqsqfxygvsimnoip'
    }
});
function MARIbot_sendEmail(subject, body){
    var MARIBotMailOptions = {
        from: 'MARIbot.computer@gmail.com',
        to: ['alexa818@umn.edu'],
        subject: subject,
        text: body
    }

    MARIBotTransporter.sendMail(MARIBotMailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

app.use(express.static(path.join(__dirname,".")));
// create application/x-www-form-urlencoded parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


const PORT = process.env.PORT || 1234;

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index.html");
});

app.post("/offer", (req, res) => {
    console.log(req.body.data);
    MARIbot_sendEmail("Hey! Someone submitted a offer!",req.body.data);
    res.status(204).send;
});
app.post("/request", (req, res) => {
    console.log(req.body);
    MARIbot_sendEmail("Hey! Someone submitted a offer!",req.body.data);
    res.status(204).send;
});

app.listen(PORT, (err) => {
    if (err) {
        console.log("Error in port ", err)
    } else {
        console.log("Listening on port ", PORT)
    }
})