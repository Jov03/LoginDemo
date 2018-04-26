$(document).ready(function(){

    $('.date').datetimepicker({
                    pickTime: false
                });
});

$( "#preview").on('click', function() {
    final_price();
    $( "input[type!='hidden'], textarea").each (function() {
        var id = $(this).attr('id');
        var val = $(this).val();
        $( "input[name^="+ id + "]").val(val);
        $( "p[name^="+ id + "]").html(val);
    });
});

$('#service').on('change', function() {
    if($('#service>option:selected').text()!='Other') {
        $('#service-type').val($('#service>option:selected').text());
        $('#service-price').val($('#service>option:selected').data('price'));
        $('#service-type').attr('readonly',true);
        $('#service-price').attr('readonly', true);
    }
    else {
        $('#service-type').val("");
        $('#service-price').val("");
        $('#service-type').removeAttr('readonly');
        $('#service-price').removeAttr('readonly');
    }
    final_price();
});


function final_price() {
    var discount =parseInt($('#service-discount').val());
    if(discount > 0) {
        $('#service-final-price').val((parseInt($('#service-price').val()) - discount) + " £");
    }
    else {
        $('#service-final-price').val($('#service-price').val());
    }
}

$('#service-discount').on('keypup input paste change', function() {
    final_price();
});

$('#service-price').on('paste change', function() {
    $('#service-price').val(parseInt($('#service-price').val()) + " £");
    final_price();
});

$('#service-discount').on('paste change', function() {
    $('#service-discount').val(parseInt($('#service-discount').val()) + " £");
    final_price();
});