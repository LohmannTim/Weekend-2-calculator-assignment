$(document).ready(function(){
    $('.buttons').on('click', function() {
        var data = {
            x: $('#x').val(),
            y: $('#y').val(),
            operation: $(this).attr('id')
        };

        $.ajax({
            type: 'POST',
            url: '/input',
            data: data,
            success: function(data) {
                $('.results').html('');
                $('.results').append('Result: ' + data.result + '<br>Operation: ' + data.operation);
            },
        });
    });
    
    $('#clear').on('click', function() {
        $('#x').val('');
        $('#y').val('');
        $('.results').html('');
    });
});



