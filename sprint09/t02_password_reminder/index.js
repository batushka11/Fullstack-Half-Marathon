const express = require('express');
const formidable = require('formidable');
const User = require('./models/user.js')
const bcrypt = require('bcrypt');
const fs = require('fs');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('views'));


app.get('/', (req,res) => {
    res.redirect('/password_remind');
});

app.get('/password_remind', (req,res) => {
    res.sendFile(__dirname + '/views/pass_remind.html');
});

app.post('/password_remind', (req,res) => {
    const form = new formidable.IncomingForm();
    form.parse(req, async(err, fields) => {
        if (err) {
            res.status(500).end(JSON.stringify({ success: false, message: 'Internal Server Error' }));
            return;
        }
        try{
            let user = await User.find({email: fields['Email']});
            if(user){
                let testEmailAccount = await nodemailer.createTestAccount();

                let transporter = nodemailer.createTransport({
                    host: 'smtp.ethereal.email',
                    port: 587,
                    secure: false,
                    auth: {
                        user: testEmailAccount.user,
                        pass: testEmailAccount.pass,
                    },
                });
                let password = user.password.toString();
                let login = user.login; 

                let result = await transporter.sendMail({
                    from: '"Node js" <nodejs@example.com>',
                    to: `${fields['Email']}`,
                    subject: 'Message from Node js',
                    html:
                        `Hello,<strong> ${login}</strong>!<br>
                         This <i>message</i> was sent from <strong>Oracle RedBull Team</strong>.<br>
                         Your <i>password<i>: ${password}<br>
                         We're happy to help you remind a password!`,
                });
                res.type('html');
                res.send(`
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Password Sent - Oracle Red Bull Racing</title>
                        <style>
                            * {
                                margin: 0;
                                padding: 0;
                                box-sizing: border-box;
                            }
                            body {
                                font-family: 'Arial', sans-serif;
                                height: 100vh;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                background: linear-gradient(135deg, #002f6c, #d50000, #ffcb05);
                                color: white;
                            }
                            .container {
                                background: rgba(0, 0, 0, 0.7);
                                padding: 40px;
                                border-radius: 20px;
                                box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
                                text-align: center;
                                max-width: 700px;
                                width: 100%;
                            }
                            h1 {
                                font-size: 48px;
                                font-weight: bold;
                                color: #ffcb05;
                                margin-bottom: 20px;
                            }
                            p {
                                font-size: 20px;
                                line-height: 1.6;
                                margin-bottom: 30px;
                            }
                            a {
                                display: inline-block;
                                padding: 15px 40px;
                                background-color: #d50000;
                                color: white;
                                font-size: 20px;
                                text-transform: uppercase;
                                font-weight: bold;
                                border-radius: 10px;
                                text-decoration: none;
                                transition: background-color 0.3s ease;
                            }
                            a:hover {
                                background-color: #ffcb05;
                                color: black;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <h1>Password Sent Successfully</h1>
                            <p>The email with your password has been sent. Click the link below to check your email.</p>
                            <a href="${nodemailer.getTestMessageUrl(result)}">Go to your email</a>
                        </div>
                    </body>
                    </html>
                `);
            }
            else{
                res.status(401).send('Invalid email');
            }
        }
        catch(error){
            res.status(500).send('Error sending password');
        }
    });
});

app.listen(PORT, ()=>{
    console.log(`Server on http://localhost:${PORT}`);
})
