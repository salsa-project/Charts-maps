require.config({
    baseUrl: './c3/js',
    paths: {
        d3: "https://d3js.org/d3.v5.min"
    }
});

require(["d3", "c3"], function(d3, c3) {

    window.chart = c3.generate({
      bindto: '#chart1',
      data: {
        columns: [
          //هنا ضع إحصائيات الأرباح ديناميكيا لكي يتشكل المنحنى
          ['data1', 450, 100, 500, 300, 600, 400]
        ],
        type: 'spline'
      },
      axis: {
          x: {
              show: false
          },
          y: {
            padding: {
              top: 10,
              bottom: 10
            },
            tick: {
              //هذه هي الأرقام الظاهرة عل البيان حاليا بالدولار
              values: [0, 100, 200, 300, 400, 500, 600],
              format: function (d) { return "$ " + d; }
            }
          },
      },
      grid: {
          y: {
            //الخطوط الرمادية الأفقية .. لا تنسى إدخالها ديناميكيا عند كل 100
              lines: [
                  {value: 100, text: ''},
                  {value: 200, text: ''},
                  {value: 300, text: ''},
                  {value: 400, text: ''},
                  {value: 500, text: ''},
                  {value: 600, text: ''}
              ]
          },
          lines: {
          front: false
        }
      },
       legend: {
         show: false
         }
    });

});
