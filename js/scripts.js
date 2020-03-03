if ( !sessionStorage.getItem("ageVerified") && window.location != "http://junction.lionscreativemedia.com/age-checker.html") {
    window.location = "http://junction.lionscreativemedia.com/age-checker.html"
}


// $(window).on("load", function(){
//     $('#loader').removeAttr("preload")
//     $('#loader').fadeOut('slow', function() {
//     $(this).remove();
//     $("body").css("overflow-y", "scroll")
//     });
// });

async function preLoader(callback) {
    $('#loader').removeAttr("preload").delay(2000)
    $('#loader').fadeOut('slow', callback)
    console.log('Hit')
    $(this).remove();
}

window.addEventListener('load', preLoader(yBar))

function yBar() {
    $("html").css("overflow-y", "scroll")
}

$(document).ready(function(){ 
    //THIS CODE IS ONLY NEEDED FOR DEMO:
    var minAge = $('select').val();
    $('select').on('change', function(){
       minAge = $(this).val(); 
    });
    $('button').on('click', function(){
        $.ageCheck({minAge: minAge});
    });

    //END DEMO CODE.
    //THIS IS ALL YOU NEED FOR PLUGIN:
    $.ageCheck({minAge: minAge});       
});


$('.distilleryPanelHover').hover(function () {
        // over
        $('.kitchenPanelHover').addClass('grayscale')
        $('.distilleryPanelHover h1').css({
            'transition' : 'all .5s',
            'transform' : 'scale(1.3)'})
    }, function () {
        // out
        $('.kitchenPanelHover').removeClass('grayscale')
        $('.distilleryPanelHover h1').css({
            'transition' : 'all .5s',
            'transform' : 'scale(1)'})
    }
);

$('.kitchenPanelHover').hover(function () {
    // over
    $('.distilleryPanelHover').addClass('grayscale')
    $('.kitchenPanelHover h1').css({
        'transition' : 'all .5s',
        'transform' : 'scale(1.3)'})
}, function () {
    // out
    $('.distilleryPanelHover').removeClass('grayscale')
    $('.kitchenPanelHover h1').css({
        'transition' : 'all .5s',
        'transform' : 'scale(1)'})
}
);

$('.fab').hover(function () {
        // over
        $(this).css({
            'transition' : 'ease .5s' ,
            'color' : '#856444' })
    }, function () {
        // out
        $(this).css({
            'transition' : 'ease .5s' ,
            'color' : '#202121' })
        }
);

$('#toGoBtn').hover(function () {
        // over
        $(this).css({
            'transition' : 'ease .5s',
            'color' : '#856444',
            'backgroundColor' : "white"
        })
    }, function () {
        // out
        $(this).css({
            'transition' : 'ease .5s',
            'color' : 'white',
            'backgroundColor' : "#856444"
        })

    }
);

function initMap() {
    var uluru = {lat: -25.344, lng: 131.036};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
  }