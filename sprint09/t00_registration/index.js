const express = require('express');
const formidable = require('formidable');
const User = require('./models/user.js')
const bcrypt = require('bcrypt');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.redirect('/register');
});

app.get('/register', (req,res) => {
    res.sendFile(__dirname + '/public/register.html');
});

app.post('/registration', (req,res) => {
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
                res.status(200).json({ success: true, login: savedUser.login });
        }
        catch(error){
            res.status(500).send('Error saving user');
        }
    });
});

app.get('/home',(req,res)=>{
    res.type('html');
    res.end(`<h1>Welcome, ${req.query.user}</h1>`);
})

app.listen(PORT, ()=>{
    console.log(`Server on http://localhost:${PORT}`);
})
