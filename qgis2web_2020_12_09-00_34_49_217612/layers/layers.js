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
var format_Cities_1 = new ol.format.GeoJSON();
var features_Cities_1 = format_Cities_1.readFeatures(json_Cities_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cities_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cities_1.addFeatures(features_Cities_1);
var lyr_Cities_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cities_1, 
                style: style_Cities_1,
                interactive: false,
                title: '<img src="styles/legend/Cities_1.png" /> Cities'
            });
var format_ServiceTerritory_2 = new ol.format.GeoJSON();
var features_ServiceTerritory_2 = format_ServiceTerritory_2.readFeatures(json_ServiceTerritory_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceTerritory_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceTerritory_2.addFeatures(features_ServiceTerritory_2);
var lyr_ServiceTerritory_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ServiceTerritory_2, 
                style: style_ServiceTerritory_2,
                interactive: true,
    title: 'Service Territory<br />\
    <img src="styles/legend/ServiceTerritory_2_0.png" /> 100% Green Power<br />\
    <img src="styles/legend/ServiceTerritory_2_1.png" /> Clean Power<br />\
    <img src="styles/legend/ServiceTerritory_2_2.png" /> Lean Power<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Cities_1.setVisible(true);lyr_ServiceTerritory_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Cities_1,lyr_ServiceTerritory_2];
lyr_Cities_1.set('fieldAliases', {'FID': 'FID', 'COUNTY': 'COUNTY', 'CITY': 'CITY', 'COPRI': 'COPRI', 'Shape_Leng': 'Shape_Leng', 'SHAPE_Le_1': 'SHAPE_Le_1', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ServiceTerritory_2.set('fieldAliases', {'FID': 'FID', 'COUNTY': 'COUNTY', 'CITY': 'CITY', 'COPRI': 'COPRI', 'Shape_Leng': 'Shape_Leng', 'SHAPE_Le_1': 'SHAPE_Le_1', 'SHAPE_Area': 'SHAPE_Area', 'Rte_Option': 'Rte_Option', 'Pct_Opt': 'Pct_Opt', });
lyr_Cities_1.set('fieldImages', {'FID': 'Range', 'COUNTY': 'TextEdit', 'CITY': 'TextEdit', 'COPRI': 'TextEdit', 'Shape_Leng': 'TextEdit', 'SHAPE_Le_1': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ServiceTerritory_2.set('fieldImages', {'FID': 'Range', 'COUNTY': 'TextEdit', 'CITY': 'TextEdit', 'COPRI': 'TextEdit', 'Shape_Leng': 'TextEdit', 'SHAPE_Le_1': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Rte_Option': 'TextEdit', 'Pct_Opt': 'TextEdit', });
lyr_Cities_1.set('fieldLabels', {'FID': 'no label', 'COUNTY': 'no label', 'CITY': 'no label', 'COPRI': 'no label', 'Shape_Leng': 'no label', 'SHAPE_Le_1': 'no label', 'SHAPE_Area': 'no label', });
lyr_ServiceTerritory_2.set('fieldLabels', {'FID': 'no label', 'COUNTY': 'no label', 'CITY': 'header label', 'COPRI': 'no label', 'Shape_Leng': 'no label', 'SHAPE_Le_1': 'no label', 'SHAPE_Area': 'no label', 'Rte_Option': 'inline label', 'Pct_Opt': 'inline label', });
lyr_ServiceTerritory_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});