var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var crypto = require('crypto');
const pool = new Pool({
  user: 'rachit88888888',
  host: 'db.imad.hasura-app.io',
  database: 'rachit88888888',
  password: process.env.DB_PASSWORD,
  port: 5432,
});

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/test', function (req, res) {
    pool.query("SELECT * FROM test",function (err,result){
        if(err){
            res.status(500).send(err.toString());
        }
        else{
            res.send(result.rows);
        }
    });
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
var count = 0;
app.get('/api/counter', function (req, res) {
    res.send(count.toString());
});
var articles = {
    'article-one' :  {
        heading : "Article 1"
    },
    'article-two' : {
        heading : "Article 2"
    },
    'article-three' : {
        heading : "Article 3"
    }
    
};
var genSalt = function (){
  return crypto.randomBytes(256).toString('hex');
};
var hasher = function (key, salt){
    var pass =  crypto.pbkdf2Sync(key, salt, 10000, 64, 'sha512');
    return ['pbkdf2',salt,'10000',pass.toString('hex')].join('$');
};
var template = function(article){
return `
<!doctype html>
<html>
    <head>
        <link href="/ui/style.css" rel="stylesheet" />
        <meta name="viewport" initial-scale="1">
    </head>
    <body>
        <header>
            <nav>
                <a href="/">Home</a>
            </nav>
        </header>
        <section id="articlehead">
            <h3>${article.heading}</h3>
            <hr>
            
        </section>
        <script type="text/javascript" src="/ui/main.js">
        </script>
    </body>
</html>
`;
};
app.get('/article', function (req, res) {
    count++;
   
   var articleId = req.query.id;
   pool.query(`Select * FROM articles WHERE id= ${articleId}`, function(err, result) {
       if(err){
           res.send(err.toString());
       }
       else{
          res.send(template(result.rows[0]));
       }
   });
   
  // res.send(template(article));
});
app.get('/login/:name', function(req, res){
    var name = req.params.name;
    var salt = genSalt();
    var hash = hasher(name,salt);
    res.send(hash);
    
    
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
