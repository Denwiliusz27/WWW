var express = require('express');
var router = express.Router();
var mysql = require('mysql2');


/* obiekt danych do logowania do bazy danych */
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'haslo',
  database: 'wydatki',
});

/* nawiazanie połączenia */
db.connect();


/* GET users listing. */
/* localhost:3000/wydatki */
router.get('/', function(req, res, next) {
  /* renderuje treśc z liku view/index.pug  */
  var sql = 'SELECT * From faktury';

  /* wywołuje dowolne zapytanie sql */
  db.query(sql, function(error, dane){  // dane - przechowuje odpowiedź z zapytania do bazy danych
    res.render('wydatki', {title: 'Wydatki', dane: dane});
    // res.json(dane);
  });
});

router.get('/dodaj', function(req, res, next) {
    res.send('Tu cos jeszcze powstanie')
});



module.exports = router;
