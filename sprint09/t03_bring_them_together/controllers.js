const User = require('./models/user');
const formidable = require('formidable');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const fs = require('fs');

exports.registration = function(req,res){
    const form = new formidable.IncomingForm();
    form.parse(req, async(err, fields) => {
        if (err) {
            res.status(500).end(JSON.stringify({ success: false, message: 'Internal Server Error' }));
            return;
        }
        
        try{
                let newUser = new User({
                    login: fields['Login'],
                    fullname: fields['Fullname'],
                    password: bcrypt.hashSync(fields['Password'][0],10),
                    email: fields['Email']
                });
                
                const savedUser = await newUser.save();
                req.session.user = {
                    login: savedUser.login,
                    role: 'user'
                };
                res.status(200).json({ success: true, login: savedUser.login });
        }
        catch(error){
            res.status(500).send('Error saving user');
        }
    });
};

exports.login = function(req,res){
    if(req.session.user){
        res.redirect('/home');
    }
    else{
        const form = new formidable.IncomingForm();
        form.parse(req, async(err, fields) => {
            if (err) {
                res.status(500).end(JSON.stringify({ success: false, message: 'Internal Server Error' }));
                return;
            }
            try{
                let user = await User.find({login: fields['Login']});
                if(user){
                    const checkPwd = await bcrypt.compare(fields['Password'].toString(),user.password.toString());
                    if(checkPwd){
                        req.session.user = {
                            login: user.login,
                            role: user.role
                        };
                        res.redirect('/home');
                    }
                    else{
                        res.status(401).send('Invalid password');
                    }
                }
                else{
                    res.status(401).send('Invalid login');
                }
            }
            catch(error){
                console.log(error);
                res.status(500).send('Error saving user');
            }
        });
    }
};

exports.pass_remind = function(req,res){
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
                fs.readFile(__dirname + "/views/email.html","utf-8", function (error, html) {
                    if (error) {
                        throw error;
                    }
                    html = html.replace("#URL", nodemailer.getTestMessageUrl(result));
                    res.type('html');
                    res.end(html);
                    });
            }
            else{
                res.status(402).send('Invalid email');
            }
        }
        catch(error){
            console.error(error);
            res.status(500).send('Error sending password');
        }
    });
};

exports.home = function(req,res){
    if(!req.session.user){
        res.redirect('/login');
    }
    else{
        fs.readFile(__dirname + "/views/homepage.html","utf-8", function (error, html) {
            if (error) {
                throw error;
            }
            
            const user = req.session.user.login;
            const role = req.session.user.role;
            html = html.replace("#USER", user).replace("#ROLE",role);
            res.type('html');
            res.end(html);
            });
    }
};

exports.destroy_session = function(req,res){
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
            res.send('Error destroying session');
        } else {
            res.redirect('/login');
        }
    });
}