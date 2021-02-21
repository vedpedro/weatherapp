const greeter = (name = 'user', {age, height = 170} = {}, eyes = 'black') => {
    console.log('Olá ' + name + ', tenho ' + age + ' anos, e a minha altura é de ' + height + ' cm');
    console.log(eyes);
}

const geocode = (error, {lat = 0, lon = 0, location} = {}) => {
    console.log(error);
    console.log(lat);
    console.log(lon);
    console.log(location);
}

geocode(undefined, {
    lat: 12,
    lon: 10,
    location: 'Porto'
});

geocode('Erro parvo')