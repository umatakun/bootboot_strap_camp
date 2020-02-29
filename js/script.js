$(function () {
    $('.toast').toast({autohide: true}).toast('show');
    $('#datetimePicker1').datetimepicker({
        format: 'YYYY-MM-DD',
    });
    $('#datetimePicker2').datetimepicker({
        format: 'HH:mm',
    });
});