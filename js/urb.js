// links scroll you down the page...
$(".scrolling").click(function(event){
  event.preventDefault();
  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 700);
});

// mobile menu related stuff
$(document).ready(function() {
    $('button.toggle').click(function() {
        $('header ul').slideToggle();
    });
});

$(window).resize(function() {
    var ww = $(window).width();

    if (ww > 768) {
        $('header ul').show();
    } else {
        $('header ul').hide();
    };

});
