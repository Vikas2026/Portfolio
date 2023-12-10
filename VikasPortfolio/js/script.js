$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

$(window).on('scroll load', function(){
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
        $('.top').show();
    }else{
        $('.top').hide();
    }
});

$('a[href*="#"]').on('click',function(e){
    e.preventDefault();

    $('html,body').animate({
        scrollTop : $($(this).attr('href')).offset().top,

    },
    500,
    'linear'
    );
})
});


        function downloadFile() {
            // Replace 'YOUR_FILE_ID' with the actual file ID from your Google Drive
            var fileID = '1xB4Pc8vaXm8FVFiBu72zaL9Ojpt6oSN3';

            var shareableLink = 'https://drive.google.com/uc?id=' + fileID;
            var downloadLink = document.createElement('a');
            window.open(shareableLink, '_blank');
        }

       