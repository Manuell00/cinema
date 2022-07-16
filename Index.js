const express = require('express');
const path = require('path')
const app = express();
const port = 3000;
app.set('view engine','ejs')

app.get('/', function(req, res) {
  res.send('Index')
});

app.get('/2', function(req, res) {
    res.send(req.query)
});

app.get('/spettacolo', function(req, res) {
    res.render("spettacolo.ejs",{posti_liberi:req.query.posti_liberi,costo_biglietto:req.query.costo_biglietto})
});

const pagina4 = "<h1> Inception </h1> <p>posti disponibili : 100</p> <p>costo biglietto: <span style = 'font-weight : 800'> 10£</span©> </p>"

app.get('/4', function(req, res) {
    res.send(pagina4)
});

app.get('/test', function(req, res) {
  res.render("spettacolo.html",{})
});


//sendFile per scrivere html e poi creo nuovo file ejs dentro la cartella view (slide 27)




app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});
