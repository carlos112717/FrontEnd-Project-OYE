/********** carga los top3 en el index
function loadTop3() {
    $.getJSON('./datos.json', function(data) {
        var topValues = data.emisoras.sort((a, b) => b.reproducciones - a.reproducciones).slice(0, 3);
        for (var x = 1; x < 4; x++) {
            document.getElementById("top" + x).innerHTML = topValues[x - 1].nombre;
            document.getElementById("audio" + x).setAttribute("src", "./canciones/" + topValues[x - 1].ruta)
        }

    });
}

/********** script para cargar top 3 de canciones en index

loadTop3();

*//////

/********** carga los top3 en el index
function loadTop3() {
    $.getJSON('./datos.json', function(data) {
        var topValues = Object.values(data.emisoras).sort((a, b) => b.reproducciones - a.reproducciones).slice(0, 3);
        for (var x = 1; x < 4; x++) {
            document.getElementById("top" + x).innerHTML = topValues[x - 1].nombre;
            document.getElementById("audio" + x).setAttribute("src", "./emisoras/" + topValues[x - 1].ruta);
            document.getElementById("audio" + x).setAttribute("type", "audio/" + topValues[x - 1].tipo_archivo);
            document.getElementById("audio" + x).load();
        }
    });
}

/********** script para cargar top 3 de emisoras en index

loadTop3();  **********/



function loadTop3() {
        $.getJSON('./datos.json', function(data) {
            var topValues = data.emisoras.sort((a, b) => b.escuchas - a.escuchas).slice(0, 3);
            for (var x = 1; x < 4; x++) {
                document.getElementById("top" + x).innerHTML = topValues[x - 1].nombre;
                document.getElementById("audio" + x).setAttribute("src", topValues[x - 1].stream);
            }
        });
    }

    loadTop3();
