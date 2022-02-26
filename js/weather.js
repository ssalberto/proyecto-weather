
var units = 0;               //0->Celsius; 1->Kelvin; 2-> Farenheits
var unitString = "ºC";  //String de unidades de temperatura


/*Cambio de Celsius a Kelvin a Farenheits */
function changeUnits() {
    if (units == 0) {        //Kelvin
        units = 1;
        temperature = app.datos.main.temp;
        unitString = "ºK";
        printTemperature();
        return;
    }
    
    if (units == 1) {   //Farenheits
        units = 2;
        temperature = (app.datos.main.temp - 273.15)*(9/5) + 32;
        unitString = "ºF";  
        printTemperature();
        return;      
    }
    
    if (units == 2) {                    //Celsius
        units = 0;
        temperature = app.datos.main.temp - 273.15;
        unitString = "ºC";
        printTemperature();
        return;
    }
}


/*Obtención de datos tiempo */
app.cargaDatos = () => {
    $.ajax({
        url: app.url,
        success: (data) => {
            app.datos = data;
            temperature = app.datos.main.temp - 273.15;
            graph.data.datasets[0].data.push(temperature.toFixed()-count);
            if(graph.data.datasets[0].data.length == 7) {graph.data.datasets[0].data.shift()}
            graph.update();
            printTemperature();
        },
        error: () => {
            alert("¡Ups! No puedo obtener información de la API");
        }
    });
}

function printTemperature() {

    /*Inserción de la temperatura en el html*/
    document.getElementById('temperature').innerHTML = temperature.toFixed(2) + " " + unitString;
}