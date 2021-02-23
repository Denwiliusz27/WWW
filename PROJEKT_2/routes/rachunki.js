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


/* localhost:3000/rachunki */
/* do wyświetlenia całej tabeli, bez żadnego filtrowania */
router.get('/', function(req, res, next) {
  var sql = 'SELECT * From faktury';

  /* wywołuje dowolne zapytanie sql */
  db.query(sql, function(error, dane){  // dane - przechowuje odpowiedź z zapytania do bazy danych
    res.render('rachunki', {title: 'Rachunki', dane: dane});
    // res.json(dane);
  });
});


/* localhost:3000/rachunki/gb_miesiace */
/* do wyświetlenia całej tabeli, bez żadnego filtrowania */
router.get('/gb_miesiace', function(req, res, next) {
  var sql = 'SELECT imie, nazwisko, sum(kwota) as suma, miesiac From faktury group by miesiac, imie order by imie';

  /* wywołuje dowolne zapytanie sql */
  db.query(sql, function(error, dane){  // dane - przechowuje odpowiedź z zapytania do bazy danych
    res.render('miesiace_gb', {title: 'Grupowanie po miesiącach', dane: dane});
    // res.json(dane);
  });
});


/* localhost:3000/rachunki/gb_osoby */
/* do wyświetlenia całej tabeli, bez żadnego filtrowania */
router.get('/gb_osoby', function(req, res, next) {
  var sql = 'SELECT imie, nazwisko, sum(kwota) as suma From faktury group by imie';

  /* wywołuje dowolne zapytanie sql */
  db.query(sql, function(error, dane){  // dane - przechowuje odpowiedź z zapytania do bazy danych
    res.render('osoby_gb', {title: 'Grupowanie po domownikach', dane: dane});
    // res.json(dane);
  });
});


router.get('/send_data', function(req, res, next) {
  res.render('dodaj_rachunek', {title: 'Rachunki'});
});


/* localhost:3000/rachunki/dodaj */
/* słuzy do dodawania rachunków do tabeli */
router.post('/dodaj', function(req, res, next) {
  var opis = req.body.opis;
  var kwota = req.body.kwota;
  var imie = req.body.imie;
  var nazwisko = req.body.nazwisko;
  var miesiac = req.body.miesiac;
  console.log(opis + kwota + imie + nazwisko + miesiac);

  const sql = 'insert into faktury (faktury.opis, faktury.kwota, faktury.imie, faktury.nazwisko, faktury.miesiac) Values ?';

  var values = [
      [opis, kwota, imie, nazwisko, miesiac]
  ];

  db.query(sql, [values], function (err, result) {
    if (err) {
      res.render('dodaj_rachunek', { info: 'Niepoprawne dane'});
      throw err;
    }
    else {
      res.render('dodaj_rachunek', { info: 'Dane zostały poprawnie zapisane'} );
    }

  });
});


module.exports = router;
