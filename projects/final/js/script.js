function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: {lat: 37.06, lng: -95.68}
    });

    var kmlLayer = new google.maps.KmlLayer({
        url: 'https://raw.githubusercontent.com/nparkrisd/nick_webdesign/master/projects/final/js/carea.kml',
        suppressInfoWindows: true,
        map: map
    });

    var kmlLayer = new google.maps.KmlLayer({
        url: 'https://raw.githubusercontent.com/nparkrisd/nick_webdesign/master/projects/final/js/carea2.kml',
        suppressInfoWindows: true,
        map: map
    });
}

