var size = 0;
var placement = 'point';

var style_1CONTOUR_V2Clipped_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("q2wHide_ELEVATION");
    var labelText = "";
    size = 0;
    var labelFont = "3.9000000000000004px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("NAME") !== null) {
        labelText = String(feature.get("NAME"));
    }
    if (value >= 568.000000 && value <= 610.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(252,253,191,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 610.000000 && value <= 620.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(254,201,141,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 620.000000 && value <= 628.500000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(253,149,103,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 628.500000 && value <= 638.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(241,96,93,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 638.000000 && value <= 646.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(205,63,113,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 646.000000 && value <= 655.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(158,47,127,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 655.000000 && value <= 663.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(114,31,129,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 663.000000 && value <= 670.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(69,15,118,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 670.000000 && value <= 679.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(24,15,62,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 679.000000 && value <= 692.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,4,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
