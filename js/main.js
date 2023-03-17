function loadSongs() {
    var output = '';
    $.getJSON('./datos.json', function(data) {
        var arrayLenght = Object.keys(data.emisoras).length;
        var lastPlayed = null;
        var lastAudio = null; // Agregar una variable para almacenar el último elemento de audio reproducido

        $.each(data.emisoras, function(_key, value) {
            output += '<div class="">';
            output += '<div class="m-2" style="border: 1px solid #dadada;">';
            output += '<div class="row m-0" style="background-color: #e2e2e2ad;">';
            output += '<img src="img/icon_' + value.icono + '.svg" width="25%" height="25%" class="d-inline-block mx-auto my-3" alt="Oye">';
            output += '</div>';
            output += '<div class="row m-0" style="background-color: #f8f9fa;">';
            output += '<p class="mx-auto mt-3 mb-1"><b>' + value.nombre + '</b></p>';
            output += '</div>';
            output += '<div class="row m-0" style="background-color: #f8f9fa;">';
            output += '<audio class="mx-auto my-3" controls="">';
            output += '<source src="' + value.ruta + '" type="audio/' + value.tipo_archivo + '">';
            output += '</audio>';
            output += '</div>';
            output += '</div>';
            output += '</div>';
            $('#filter-records').html(output);

            // Agregar controlador de eventos al elemento de audio
            $('audio').last().on('play', function() {
                // Obtener el id de la emisora actual
                var currentId = $(this).parent().prev().find('img').attr('src').split('_')[1].split('.')[0];

                // Verificar si la emisora actual es diferente a la última emisora reproducida
                if (lastPlayed != null && currentId != lastPlayed) {
                    // Pausar la última emisora reproducida
                    lastAudio.pause(); // Detener la reproducción de la última emisora reproducida
                }

                // Actualizar la última emisora reproducida y el último elemento de audio
                lastPlayed = currentId;
                lastAudio = this; // Almacenar el elemento de audio actual como el último reproducido
            });
        });
        fillFlex(arrayLenght);
    })
}



/*filtra  las canciones */

function filter(element) {
    var searchField = $(element).val();
    var regex = new RegExp(searchField, "i");
    var cantItems = 0;
    $("#filter-records > div").each(function() {
        if ($(this).text().search(regex) > -1) {
            $(this).show();
            cantItems++;
        } else {
            $(this).hide();
        }
    });
    fillFlex(cantItems);
}

function fillFlex(value) {
    if (value % 3 == 0 && value % 2 !== 0) {
        place = '<div class="search-placeholder"></div>';
        $('#filter-records').append(place);

    } else if (value % 3 !== 0 && value % 2 == 0) {
        place = '<div class="search-placeholder"></div>';
        place += '<div class="search-placeholder"></div>';
        $('#filter-records').append(place);

    } else if (value % 3 !== 0 && value % 2 !== 0) {
        place = '<div class="search-placeholder"></div>';
        place += '<div class="search-placeholder"></div>';
        place += '<div class="search-placeholder"></div>';
        $('#filter-records').append(place);
    }
}


/* carga todas las canciones en canciones */

loadSongs();


/* función top 3 del index */

function loadTop3() {
    var minEscuchas = 20; // número mínimo de escuchas necesarias para aparecer en el Top 3
    $.getJSON('./datos.json', function(data) {
        var topValues = data.emisoras.sort((a, b) => b.escuchas - a.escuchas).slice(0, 3);
        for (var x = 1; x < 4; x++) {
            document.getElementById("top" + x).innerHTML = topValues[x - 1].nombre;
            document.getElementById("audio" + x).setAttribute("src", "./" + topValues[x - 1].ruta);
			document.getElementById("img" + x).setAttribute("src", "./" + topValues[x - 1].imagen);

        }
        if (topValues.some(emisora => emisora.escuchas >= minEscuchas)) {
            document.getElementById("top3-section").classList.remove("hidden");
        } else {
            document.getElementById("top3-section").classList.add("hidden");
        }
    });
}



/* limpia el focus luego de cerrar la ventana modal */

$('body').on('hidden.bs.modal', '.modal', function() {
    $('.btn').blur();
});
