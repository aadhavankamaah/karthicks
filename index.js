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

app.post('/home', (req, res) => {
  const post = req.body.text;
  posts.unshift(post);
  res.render("partials/home.ejs", {
    post: posts  
  })
});

app.get('/home', (req, res) => {
  res.render('home.ejs');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});