$('#senteProjBtn').on('click', function () {

    if ($('#senteProjBtn').text() == 'More Details') {
        $('#senteProjParent').removeClass().addClass('col-xs-12');
        $('#senteProjChild').removeClass('professionalProjects');
        $('#senteProjBtn').text('Less Details');
    } else {
        $('#senteProjParent').removeClass().addClass('col-xs-12 col-sm-6 col-md-4');
        $('#senteProjBtn').text('More Details');
        $('#senteProjChild').addClass('professionalProjects');
    }
});

$('#mspBtn').on('click', function () {

    if ($('#mspBtn').text() == 'More Details') {
        $('#mspParent').removeClass().addClass('col-xs-12');
        $('#mspChild').removeClass('professionalProjects');
        $('#mspBtn').text('Less Details');
    } else {
        $('#mspParent').removeClass().addClass('col-xs-12 col-sm-6 col-md-4');
        $('#mspBtn').text('More Details');
        $('#mspChild').addClass('professionalProjects');
    }
});

$('#nbBtn').on('click', function () {

    if ($('#nbBtn').text() == 'More Details') {
        $('#nbParent').removeClass().addClass('col-xs-12');
        $('#nbChild').removeClass('professionalProjects');
        $('#nbBtn').text('Less Details');
    } else {
        $('#nbParent').removeClass().addClass('col-xs-12 col-sm-6 col-md-4');
        $('#nbBtn').text('More Details');
        $('#nbChild').addClass('professionalProjects');
    }
});