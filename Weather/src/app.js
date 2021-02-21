const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();

const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.use(express.static(publicPath));

app.set('view engine', 'hbs');
app.set('views', viewsPath);

hbs.registerPartials(partialsPath);

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        nome: "Vitor Monteiro"
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Weather App | About',
        heading1: 'Sobre a nossa aplicação',
        nome: "Vitor Monteiro"
    });
});

app.get('/weather', (req, res) => {
    if(!req.query.city){
        return res.send({
            error: "Localização não definida"
        });
    }

    // weather?city=Porto
    // Porto, quais são as tuas coordenadas
    // ir buscar as coordenadas do Porto, mas atenção que podmeos ter erros
        // se tivermos damos uma mensagem de errro
    // vamos buscar a previsão metereológica

    geocode(req.query.city, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.city
            })
        })
    })
});

app.get('*', (req, res) => {
    res.render('404', {})
});

app.listen(port, () => {
    console.log('O servidor iniciou');
});

// nodemon src/app.js -e js,hbs