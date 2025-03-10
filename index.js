import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';

const app = express();
const PORT = 8080;
let posts = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "projects",
  password: "Savitha@12",
  port: 5432,
});

db.connect();

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.post('/info-form', (req, res) => {
  const data = req.body.text;
  res.render("partials/initialform.ejs", {subject: data});
});

app.post("/home", (req, res) => {
  const {subject, deadline, price, contact, description} = req.body;
  const content = {subject, deadline, price, contact, description};
  posts.unshift(content);
  res.redirect("/home");
  // res.render("partials/home.ejs", {post: posts});
})

app.get('/home', (req, res) => {
  res.render('partials/home.ejs', {post: posts});
});

app.get('/login', (req, res) => {
  res.render('partials/login.ejs')
});

app.get('/sign-up', (req, res) => {
  res.render('partials/signup.ejs')
});

app.post('/signup', async(req, res) => {
  const {phone, name, email, password} = req.body;
  console.log(phone, name, password, email);
  await db.query("INSERT INTO cartcane (phone, name, email, password) VALUES ($1, $2, $3, $4)", [phone, name, email, password]);
  res.redirect("/login");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});