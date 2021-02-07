const express = require('express');
const app = express();
const hbs= require('hbs'); 


app.use(express.static(__dirname +'/public'));

//Express HBS engine
app.set('view engine', 'hbs');
//Hbs partials
hbs.registerPartials(__dirname + '/views/parciales', function (err) {}); 
//Hbs Helpers
require('./hbs/helpers'); 

const port = process.env.PORT || 3000; 


app.get('/', function(req, res) {
    // res.send('Hola mundo')
    let salida = {
        nombre: 'fernando',   
        edad: 32,
        url: req.url
    };
    res.render('home', {
      nombre: 'Roberto'
    }); 
});

app.get('/about', function(req, res) {
 res.render('about', {
    nombre: 'Roberto-about'
  }); 
});

//definiendo el puerto por donde escuchará.
app.listen(port, () => {
    console.log(`escuchando en el puertooo ${port}`);
});