/*! 
* API Google Maps V3
*
* Copyright (c) Maykel Rodrigues
* Date: 01/10/2014 
*
*/


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
 

  // Exibir o mapa na div #mapa;
  var map = new google.maps.Map(document.getElementById("mapa"), mapOptions);
 
 
  // Marcador personalizado;
  var image = 'img/map-marker.png';
  var marcadorPersonalizado = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: image,
      title: 'Marco Zero - Recife/PE',
      animation: google.maps.Animation.DROP
  });
 
 
  // Estilizando o mapa;
  // Criando um array com os estilos
  var theme_array = [{"featureType":"all","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]}];
    
    
 
  // crio um objeto passando o array de estilos (styles) e definindo um nome para ele;
  var styledMap = new google.maps.StyledMapType(theme_array, {
    name: "Mapa Style"
  });
 
  // Aplicando as configurações do mapa
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
 
}
 
 
// Função para carregamento assíncrono
function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyCuIDF_3dhUNdgre_Np_8_FJljK80WSLe4&sensor=false&callback=initialize";
  document.body.appendChild(script);
}
 
window.onload = loadScript;