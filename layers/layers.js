ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32643").setExtent([466340.417440, 2120669.239126, 470188.611596, 2123420.306117]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_1CONTOUR_V2Clipped_1 = new ol.format.GeoJSON();
var features_1CONTOUR_V2Clipped_1 = format_1CONTOUR_V2Clipped_1.readFeatures(json_1CONTOUR_V2Clipped_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_1CONTOUR_V2Clipped_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1CONTOUR_V2Clipped_1.addFeatures(features_1CONTOUR_V2Clipped_1);
var lyr_1CONTOUR_V2Clipped_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1CONTOUR_V2Clipped_1, 
                style: style_1CONTOUR_V2Clipped_1,
                interactive: true,
    title: '1CONTOUR_V2Clipped<br />\
    <img src="styles/legend/1CONTOUR_V2Clipped_1_0.png" /> 568 - 610<br />\
    <img src="styles/legend/1CONTOUR_V2Clipped_1_1.png" /> 610 - 620<br />\
    <img src="styles/legend/1CONTOUR_V2Clipped_1_2.png" /> 620 - 628.5<br />\
    <img src="styles/legend/1CONTOUR_V2Clipped_1_3.png" /> 628.5 - 638<br />\
    <img src="styles/legend/1CONTOUR_V2Clipped_1_4.png" /> 638 - 646<br />\
    <img src="styles/legend/1CONTOUR_V2Clipped_1_5.png" /> 646 - 655<br />\
    <img src="styles/legend/1CONTOUR_V2Clipped_1_6.png" /> 655 - 663<br />\
    <img src="styles/legend/1CONTOUR_V2Clipped_1_7.png" /> 663 - 670<br />\
    <img src="styles/legend/1CONTOUR_V2Clipped_1_8.png" /> 670 - 679<br />\
    <img src="styles/legend/1CONTOUR_V2Clipped_1_9.png" /> 679 - 692<br />'
        });
var format_Buffe_Only_2 = new ol.format.GeoJSON();
var features_Buffe_Only_2 = format_Buffe_Only_2.readFeatures(json_Buffe_Only_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_Buffe_Only_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffe_Only_2.addFeatures(features_Buffe_Only_2);
var lyr_Buffe_Only_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buffe_Only_2, 
                style: style_Buffe_Only_2,
                interactive: false,
                title: '<img src="styles/legend/Buffe_Only_2.png" /> Buffe_Only'
            });
var format_DGPS_Points_3 = new ol.format.GeoJSON();
var features_DGPS_Points_3 = format_DGPS_Points_3.readFeatures(json_DGPS_Points_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_DGPS_Points_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DGPS_Points_3.addFeatures(features_DGPS_Points_3);
var lyr_DGPS_Points_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DGPS_Points_3, 
                style: style_DGPS_Points_3,
                interactive: false,
                title: '<img src="styles/legend/DGPS_Points_3.png" /> DGPS_Points'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_1CONTOUR_V2Clipped_1.setVisible(true);lyr_Buffe_Only_2.setVisible(true);lyr_DGPS_Points_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_1CONTOUR_V2Clipped_1,lyr_Buffe_Only_2,lyr_DGPS_Points_3];
lyr_1CONTOUR_V2Clipped_1.set('fieldAliases', {'ELEVATION': 'ELEVATION', 'NAME': 'NAME', });
lyr_Buffe_Only_2.set('fieldAliases', {'AREA': 'AREA', });
lyr_DGPS_Points_3.set('fieldAliases', {'Name': 'Name', });
lyr_1CONTOUR_V2Clipped_1.set('fieldImages', {'ELEVATION': 'Hidden', 'NAME': 'TextEdit', });
lyr_Buffe_Only_2.set('fieldImages', {'AREA': 'TextEdit', });
lyr_DGPS_Points_3.set('fieldImages', {'Name': 'TextEdit', });
lyr_1CONTOUR_V2Clipped_1.set('fieldLabels', {'NAME': 'inline label - always visible', });
lyr_Buffe_Only_2.set('fieldLabels', {'AREA': 'no label', });
lyr_DGPS_Points_3.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_DGPS_Points_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});