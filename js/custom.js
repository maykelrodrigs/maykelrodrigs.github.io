//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// Scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

var progressBar = $(".progress-bar");
progressBar.each(function(indx){
  $(this).css("width", $(this).attr("aria-valuenow") + "%");
});


function initialize() {

  // Exibir mapa;
  var myLatlng = new google.maps.LatLng(-19.526528, -40.666217);
  var mapOptions = {
    zoom: 16,
    center: myLatlng,
    panControl: false,
	scrollwheel: false,
    // mapTypeId: google.maps.MapTypeId.ROADMAP
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  }


  var map = new google.maps.Map(document.getElementById("mapa"), mapOptions);
  var image = 'img/map-marker.png';
  var marcadorPersonalizado = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: image,
      title: 'Marco Zero - Recife/PE',
      animation: google.maps.Animation.DROP
  });

  var theme_array = [{"featureType":"all","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]}];

  var styledMap = new google.maps.StyledMapType(theme_array, {
    name: "Mapa Style"
  });
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
}
function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBL-m2c1yZM4-rRdXJAQ5xAxBu4gRY_TAQ&callback=initialize";
  document.body.appendChild(script);
}

window.onload = loadScript;
