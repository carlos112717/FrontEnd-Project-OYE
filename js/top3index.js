/********** carga los top3 en el index **********/
function loadTop3() {
    $.getJSON('./datos.json', function(data) {
        var topValues = data.canciones.sort((a, b) => b.reproducciones - a.reproducciones).slice(0, 3);
        for (var x = 1; x < 4; x++) {
            document.getElementById("top" + x).innerHTML = topValues[x - 1].nombre;
            document.getElementById("audio" + x).setAttribute("src", "./canciones/" + topValues[x - 1].ruta)
        }
        /*console.log(topValues);*/
    });
}

/********** script para cargar top 3 de canciones en index **********/

loadTop3();