
var app = {};                   //Información proporcionada por la api
var temperature;    
var count = 0;

function getCity() {
    /*Input de ciudad a buscar*/ 
    let ciudad = document.getElementById("city").value;
    console.log(ciudad);

    /*Consulta en la api */
    app.apikey = "f985362352724ed2c8659fa991ad8ca9";
    app.url = "http://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=" + app.apikey;
    app.cargaDatos();
}

