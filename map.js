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
    }
    });

map.bubbles([
  //هنا تضع عناوين البلدان (خطوط الطول و العرض) لتظهر العلامات الزرقاء على الخريطة
 {name: 'Bubble 1', latitude: 21.32, longitude: -7.32},
 {name: 'Bubble 2', latitude: -11.32, longitude: -60.32},
 {name: 'Bubble 3', latitude: 21.32, longitude: -7.32},
 {name: 'Bubble 4', latitude: 5.32, longitude: 38.32}
], {
 popupTemplate: function(geo, data) {
   return "<div class='hoverinfo'>Bubble for " + data.name + "";
 }
});
