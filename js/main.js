/* cargar datos */

function loadSongs() {
    var output = '';
    $.getJSON('./datos.json', function(data) {
        var arrayLenght = Object.keys(data.canciones).length;
        $.each(data.canciones, function(key, value) {
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
            output += '<source src="canciones/' + value.ruta + '" type="audio/mp3">';
            output += '</audio>';
            output += '</div>';
            output += '</div>';
            output += '</div>';
            $('#filter-records').html(output);
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

/* limpia el focus luego de cerrar la ventana modal */

$('body').on('hidden.bs.modal', '.modal', function() {
    $('.btn').blur();
});