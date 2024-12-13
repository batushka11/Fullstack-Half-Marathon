const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true,
}));

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/form-hero', (req, res) => {
  req.session.heroData = req.body;
  res.redirect('/display');
});

app.get('/display', (req, res) => {
  const heroData = req.session.heroData;
  if (heroData) {
    res.send(`
      <h2>Session for new</h2>
      <p>name: ${heroData.realName}</p>
      <p>alias: ${heroData.superheroName}</p>
      <p>age: ${heroData.age}</p>
      <p>description: ${heroData.about}</p>
      <p>photo: ${heroData.photo}</p>
      <p>experience: ${heroData.powers.length}</p>
      <p>level: ${heroData.controlLevel}</p>
      <p>publicity: ${heroData.origin}</p>
      <button onclick="window.location.href='/forget'">FORGET</button>
    `);
  } else {
    res.redirect('/');
  }
});

app.get('/forget', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.log(err);
    }
    res.redirect('/');
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});