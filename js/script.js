$(function () {
    $('.toast').toast({autohide: true}).toast('show');
    $('#datetimePicker1').datetimepicker({
        format: 'YYYY-MM-DD',
    });
    $('#datetimePicker2').datetimepicker({
        format: 'HH:mm',
    });
    $('#profile_image').on('change', function(){
        let fileList = this.files ;
        let data = $(this).data();

        // 個数分の画像を表示する
        for( var i=0,l=fileList.length; l>i; i++ ) {
            // Blob URLの作成
            var blobUrl = window.URL.createObjectURL( fileList[i] ) ;

            // HTMLに書き出し (src属性にblob URLを指定)
            $('#' + data.srcTarget).attr('src', blobUrl);
            break;
        }

    });
});