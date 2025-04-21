$(function(){
    
    // banner js 
    $('.slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        dots: true,
    });


    $('#counter').counterUp({
        delay: 10,
        time: 2000
      });

    // content js
    $(function(){
        $('.content_text').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
        });
    })
})