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
var format_ServiceTerritorycopy_1 = new ol.format.GeoJSON();
var features_ServiceTerritorycopy_1 = format_ServiceTerritorycopy_1.readFeatures(json_ServiceTerritorycopy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceTerritorycopy_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceTerritorycopy_1.addFeatures(features_ServiceTerritorycopy_1);
var lyr_ServiceTerritorycopy_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ServiceTerritorycopy_1, 
                style: style_ServiceTerritorycopy_1,
                interactive: true,
    title: 'Service Territory copy<br />\
    <img src="styles/legend/ServiceTerritorycopy_1_0.png" /> 100% Green Power<br />\
    <img src="styles/legend/ServiceTerritorycopy_1_1.png" /> Clean Power<br />\
    <img src="styles/legend/ServiceTerritorycopy_1_2.png" /> Lean Power<br />\
    <img src="styles/legend/ServiceTerritorycopy_1_3.png" /> <br />\
    <img src="styles/legend/ServiceTerritorycopy_1_4.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_ServiceTerritorycopy_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ServiceTerritorycopy_1];
lyr_ServiceTerritorycopy_1.set('fieldAliases', {'FID': 'FID', 'COUNTY': 'COUNTY', 'CITY': 'CITY', 'COPRI': 'COPRI', 'Shape_Leng': 'Shape_Leng', 'SHAPE_Le_1': 'SHAPE_Le_1', 'SHAPE_Area': 'SHAPE_Area', 'Rte_Option': 'Rte_Option', 'Pct_Opt': 'Pct_Opt', });
lyr_ServiceTerritorycopy_1.set('fieldImages', {'FID': 'Range', 'COUNTY': 'TextEdit', 'CITY': 'TextEdit', 'COPRI': 'TextEdit', 'Shape_Leng': 'TextEdit', 'SHAPE_Le_1': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Rte_Option': 'TextEdit', 'Pct_Opt': 'TextEdit', });
lyr_ServiceTerritorycopy_1.set('fieldLabels', {'FID': 'no label', 'COUNTY': 'no label', 'CITY': 'no label', 'COPRI': 'no label', 'Shape_Leng': 'no label', 'SHAPE_Le_1': 'no label', 'SHAPE_Area': 'no label', 'Rte_Option': 'inline label', 'Pct_Opt': 'inline label', });
lyr_ServiceTerritorycopy_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});