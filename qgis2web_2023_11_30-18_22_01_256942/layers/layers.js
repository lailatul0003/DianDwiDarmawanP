var wms_layers = [];

var format_potongtuntang_0 = new ol.format.GeoJSON();
var features_potongtuntang_0 = format_potongtuntang_0.readFeatures(json_potongtuntang_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_potongtuntang_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_potongtuntang_0.addFeatures(features_potongtuntang_0);
var lyr_potongtuntang_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_potongtuntang_0, 
                style: style_potongtuntang_0,
                interactive: true,
                title: '<img src="styles/legend/potongtuntang_0.png" /> potong tuntang'
            });
var format_Channeltuntang_1 = new ol.format.GeoJSON();
var features_Channeltuntang_1 = format_Channeltuntang_1.readFeatures(json_Channeltuntang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Channeltuntang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Channeltuntang_1.addFeatures(features_Channeltuntang_1);
var lyr_Channeltuntang_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Channeltuntang_1, 
                style: style_Channeltuntang_1,
                interactive: true,
                title: '<img src="styles/legend/Channeltuntang_1.png" /> Channel tuntang'
            });
var format_KonturTuntang_2 = new ol.format.GeoJSON();
var features_KonturTuntang_2 = format_KonturTuntang_2.readFeatures(json_KonturTuntang_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KonturTuntang_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KonturTuntang_2.addFeatures(features_KonturTuntang_2);
var lyr_KonturTuntang_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KonturTuntang_2, 
                style: style_KonturTuntang_2,
                interactive: true,
    title: 'Kontur Tuntang<br />\
    <img src="styles/legend/KonturTuntang_2_0.png" /> 0<br />\
    <img src="styles/legend/KonturTuntang_2_1.png" /> 210.0000000000<br />\
    <img src="styles/legend/KonturTuntang_2_2.png" /> 420.0000000000<br />\
    <img src="styles/legend/KonturTuntang_2_3.png" /> 630.0000000000<br />\
    <img src="styles/legend/KonturTuntang_2_4.png" /> 840.0000000000<br />\
    <img src="styles/legend/KonturTuntang_2_5.png" /> <br />'
        });

lyr_potongtuntang_0.setVisible(true);lyr_Channeltuntang_1.setVisible(true);lyr_KonturTuntang_2.setVisible(true);
var layersList = [lyr_potongtuntang_0,lyr_Channeltuntang_1,lyr_KonturTuntang_2];
lyr_potongtuntang_0.set('fieldAliases', {'objectid_1': 'objectid_1', 'objectid': 'objectid', 'kode_prov': 'kode_prov', 'nama_das': 'nama_das', 'luas_ha': 'luas_ha', 'kel_m': 'kel_m', 'prioritas_': 'prioritas_', 'kd_tematik': 'kd_tematik', 'kd_region': 'kd_region', 'kd_lintas': 'kd_lintas', 'kd_das': 'kd_das', 'wil_kerja': 'wil_kerja', 'kd_urutdas': 'kd_urutdas', 'globalid': 'globalid', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'st_area(sh': 'st_area(sh', 'st_length(': 'st_length(', });
lyr_Channeltuntang_1.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', });
lyr_KonturTuntang_2.set('fieldAliases', {'ID': 'ID', 'VALUE': 'VALUE', });
lyr_potongtuntang_0.set('fieldImages', {'objectid_1': '', 'objectid': '', 'kode_prov': '', 'nama_das': '', 'luas_ha': '', 'kel_m': '', 'prioritas_': '', 'kd_tematik': '', 'kd_region': '', 'kd_lintas': '', 'kd_das': '', 'wil_kerja': '', 'kd_urutdas': '', 'globalid': '', 'st_area_sh': '', 'st_length_': '', 'st_area(sh': '', 'st_length(': '', });
lyr_Channeltuntang_1.set('fieldImages', {'SEGMENT_ID': 'TextEdit', 'NODE_A': 'TextEdit', 'NODE_B': 'TextEdit', 'BASIN': 'TextEdit', 'ORDER': 'TextEdit', 'ORDER_CELL': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_KonturTuntang_2.set('fieldImages', {'ID': 'TextEdit', 'VALUE': 'TextEdit', });
lyr_potongtuntang_0.set('fieldLabels', {'objectid_1': 'no label', 'objectid': 'no label', 'kode_prov': 'no label', 'nama_das': 'no label', 'luas_ha': 'no label', 'kel_m': 'no label', 'prioritas_': 'no label', 'kd_tematik': 'no label', 'kd_region': 'no label', 'kd_lintas': 'no label', 'kd_das': 'no label', 'wil_kerja': 'no label', 'kd_urutdas': 'no label', 'globalid': 'no label', 'st_area_sh': 'no label', 'st_length_': 'no label', 'st_area(sh': 'no label', 'st_length(': 'no label', });
lyr_Channeltuntang_1.set('fieldLabels', {'SEGMENT_ID': 'no label', 'NODE_A': 'no label', 'NODE_B': 'no label', 'BASIN': 'no label', 'ORDER': 'no label', 'ORDER_CELL': 'no label', 'LENGTH': 'no label', });
lyr_KonturTuntang_2.set('fieldLabels', {'ID': 'no label', 'VALUE': 'no label', });
lyr_KonturTuntang_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});