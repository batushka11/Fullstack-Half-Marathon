const express = require('express');
const formidable = require('formidable');
const User = require('./models/user.js')
const bcrypt = require('bcrypt');
const cookieSession = require('express-session');
const fs = require('fs');
const app = express();
const PORT = 3000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use(cookieSession({
    secret: 'ucode_web',
    resave: false,
    saveUninitialized: false
}));

app.use('/login',(req, res, next) =>{
    if(req.session.user){
        res.redirect('/home');
        return;
    }
    next();
});

app.get('/', (req,res) => {
    res.redirect('/login');
});

app.get('/login', (req,res) => {
    res.sendFile(__dirname + '/public/login.html');
});

app.post('/login', (req,res) => {
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
                        res.status(402).send('Invalid password');
                    }
                }
                else{
                    res.status(401).send('Invalid login');
                }
            }
            catch(error){
                res.status(500).send('Error saving user');
            }
        });
    }
});

app.get('/home',(req,res)=>{
    if(!req.session.user){
        res.redirect('/login');
    }
    else{
        fs.readFile(__dirname + "/public/homepage.html","utf-8", function (error, html) {
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
})

app.get('/destroy-session', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
            res.send('Error destroying session');
        } else {
            res.redirect('/login');
        }
    });
});
app.listen(PORT, ()=>{
    console.log(`Server on http://localhost:${PORT}`);
})
