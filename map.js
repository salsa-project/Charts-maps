//D3 (v3, v5) working together in the same page
d3version3 = d3
window.d3 = null


var map = new Datamap({
    element: document.getElementById('container'),
    scope: 'world',
    fills: {
      defaultFill: 'rgba(220, 225, 232, 0.8)'
    },
    geographyConfig: {
        popupOnHover: false,
        highlightOnHover: false,
        borderColor: 'rgba(220, 225, 232, 0.4)',
        borderWidth: 1
    },
    bubblesConfig: {
        borderWidth: 2,
        borderOpacity: 1,
        borderColor: '#FFFFFF',
        popupOnHover: true,
        radius: 3
    },
    data: {
        'ALG': {fillkey: 'ALG'},
        'RUS': {fillKey: 'RUS'},
        'PRK': {fillKey: 'PRK'},
        'PRC': {fillKey: 'PRC'},
        'IND': {fillKey: 'IND'},
        'GBR': {fillKey: 'GBR'},
        'FRA': {fillKey: 'FRA'},
        'PAK': {fillKey: 'PAK'},
        'USA': {fillKey: 'USA'}
    }
    });

map.bubbles([
 {name: 'Bubble 1', latitude: 21.32, longitude: -7.32}
], {
 popupTemplate: function(geo, data) {
   return "<div class='hoverinfo'>Bubble for " + data.name + "";
 }
});






//   var bombs = [{
//         name: 'MrSalsa',
//         radius: 6,
//         country: 'Algeria',
//         fillKey: 'ALG',
//         date: '1953-08-12',
//         //هنا إحداثيات الدائرة
//         latitude: 30.07,
//         longitude: 3
//       }];
//
// map.bubbles(bombs, {
//     popupTemplate: function (geo, data) {
//             return ['<div class="hoverinfo">' +  data.name,
//             '<br/>Country: ' +  data.country + '',
//             '<br/>Date: ' +  data.date + '',
//             '</div>'].join('');
//     }
// });
