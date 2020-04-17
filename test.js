$("#button").on("click", function () {
    var offset = $('.text').offset();
    $(".text").animate({
        'bottom': '200px'
    },{duration: 1000,});
});