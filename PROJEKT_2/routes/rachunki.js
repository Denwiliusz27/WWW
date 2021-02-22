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


/* localhost:3000/wydatki */
/* do wyświetlenia całej tabeli, bez żadnego filtrowania */
router.get('/', function(req, res, next) {
  var sql = 'SELECT * From faktury';

  /* wywołuje dowolne zapytanie sql */
  db.query(sql, function(error, dane){  // dane - przechowuje odpowiedź z zapytania do bazy danych
    res.render('rachunki', {title: 'Rachunki', dane: dane});
    // res.json(dane);
  });
});

/* localhost:3000/dodaj */
/* słuzy do dodawania rachunków do tabeli */
router.get('/dodaj', function(req, res, next) {
  res.render('dodaj_rachunek', {title: 'Rachunki'});
});



module.exports = router;
