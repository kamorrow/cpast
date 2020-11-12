var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ServiceTerritory_1 = new ol.format.GeoJSON();
var features_ServiceTerritory_1 = format_ServiceTerritory_1.readFeatures(json_ServiceTerritory_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceTerritory_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceTerritory_1.addFeatures(features_ServiceTerritory_1);
var lyr_ServiceTerritory_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ServiceTerritory_1, 
                style: style_ServiceTerritory_1,
                interactive: true,
                title: '<img src="styles/legend/ServiceTerritory_1.png" /> Service Territory'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ServiceTerritory_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ServiceTerritory_1];
lyr_ServiceTerritory_1.set('fieldAliases', {'FID': 'FID', 'COUNTY': 'County', 'CITY': 'City', 'COPRI': 'COPRI', 'Shape_Leng': 'Shape_Leng', 'SHAPE_Le_1': 'SHAPE_Le_1', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ServiceTerritory_1.set('fieldImages', {'FID': 'Hidden', 'COUNTY': 'TextEdit', 'CITY': 'TextEdit', 'COPRI': 'Hidden', 'Shape_Leng': 'Hidden', 'SHAPE_Le_1': 'Hidden', 'SHAPE_Area': 'Hidden', });
lyr_ServiceTerritory_1.set('fieldLabels', {'COUNTY': 'inline label', 'CITY': 'inline label', });
lyr_ServiceTerritory_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});