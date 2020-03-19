if ( !sessionStorage.getItem("ageVerified") && window.location != "http://junction35spirits.com/age-checker.html") {
    window.location = "http://junction35spirits.com/age-checker.html"
}

async function preLoader(callback) {
    await $('#loader').removeAttr("preload").delay(2000)
    await $('#loader').fadeOut('slow', callback)
    console.log('Hit')
}

window.addEventListener('load', preLoader(yBar))

function yBar() {
    $('#loader').remove();
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

var video = $('#preloaderVideo');

var WindowWidth = $(window).width();

if (WindowWidth < 750) {
    //It is a small screen
    video.append("<source autoplay muted playsinline loop src='./assets/videos/preLoader-Phone.m4v.mov' media='all and (max-width: 900px)'>");
} else if (WindowWidth > 749 && WindowWidth < 1200) {
    //It is a big screen or desktop
    video.append("<source src='./assets/videos/preLoader-Tablet.mov' media='all and (max-width: 1200px)'>");
} else {
    video.append('<source src="./assets/videos/trainPreLoader.mp4" media="all and (min-width: 1201px)">');
}

function initMap() {
    var uluru = {lat: -25.344, lng: 131.036};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
  }