function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {lat: 37.06, lng: -95.68}
    });

    var kmlLayer = new google.maps.KmlLayer({
        url: 'https://nparkrisd.github.io/nick_webdesign/projects/final/js/conflictareas.kml',
        suppressInfoWindows: true,
        map: map
    });
}