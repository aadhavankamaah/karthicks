import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 8080;
let posts = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});