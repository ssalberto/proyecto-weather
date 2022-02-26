/*var today = new Date();
time = Math.ceil(today.getTime()/1000) //segundos

function timeToString(number) {
  aux = time - number;
  sec = Math.ceil(aux % 60);
  min = Math.ceil((aux / 60) % 60);
  h = Math.ceil((aux / 3600) % 24);
   
  return h + ':' + min + ':' + sec;
}*/

/*Eje x*/
var labels = [
];

/* */
var data = {
  labels: labels,
  datasets: [{
    label: 'Temperature Record',
    backgroundColor: /*'rgb(0, 180, 216)',*/'rgb(255, 99, 132)', //puntos
    borderColor: 'rgb(255, 99, 132)', //'#F1D00A', //linea
    
    data: [],
  }]
};

/* */
var config = {
  type: 'line',
  data: data, 
  options: {
    color: 'white',       //texto en tabla
    scales: {             //configuración visual de tabla
      x: {
        grid: {
          color: 'white',
          lineWidth: 0.3,
        },
      },
      y: {
        grid: {
          color: 'white',
          lineWidth: 0.3,
        },
        beginAtZero: true
      }
    }
    
  }
};

/*creación de la gráfica*/
var graph = new Chart(  
  document.getElementById('graph'),
  config
);