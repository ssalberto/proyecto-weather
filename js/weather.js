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
            temperature = app.datos.main.temp - 273.15; //En ºC
            unitString = "ºC"; units = 0;
            
            graph.data.labels.push(ciudad);
            graph.data.datasets[0].data.push(temperature.toFixed());    //añade a la gráfica el valor
            if(graph.data.datasets[0].data.length == 10) {
                graph.data.labels.shift();
                graph.data.datasets[0].data.shift();
            }   //si gráfica completa, desplaza valores a la izquierda
            graph.update(); //repinta gráfica
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