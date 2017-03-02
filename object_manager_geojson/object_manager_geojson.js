ymaps.ready(function () {

    var map = new ymaps.Map('map', {
            center: [29.902651, 60.02],
            zoom: 11,
            controls: ['zoomControl']
        }),
        objectManager = new ymaps.ObjectManager();

    // Loading a GeoJSON file exported from the Map Constructor.
    $.getJSON('geoObjects.geojson')
        .done(function (geoJson) {

            geoJson.features.forEach(function (obj) {
                // Setting balloon content.
                obj.properties.balloonContent = obj.properties.name;
                // Defining the preset for placemarks with the iconCaption field.
                if (obj.properties.iconCaption) {
                    obj.options = {
                        preset: "islands#greenDotIconWithCaption"
                    }
                }
            });
            // Adding JSON object descriptions to the object manager.
            objectManager.add(geoJson);
            // Adding objects to the map.
            map.geoObjects.add(objectManager);
        });
});
