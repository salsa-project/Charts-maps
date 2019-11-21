require.config({
  paths: {
    d3: "https://d3js.org/d3.v5.min",
    c3: "https://cdnjs.cloudflare.com/ajax/libs/c3/0.7.11/c3.min"
  }
});

// CHART 1
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
          format: function(d) {
            return "$ " + d;
          }
        }
      },
    },
    grid: {
      y: {
        //الخطوط الرمادية الأفقية .. لا تنسى إدخالها ديناميكيا عند كل 100
        lines: [{value: 100,text: ''},
          {value: 200, text: ''},
          {value: 300, text: ''},
          {value: 400, text: ''},
          {value: 500, text: ''},
          {value: 600, text: ''}
        ]
      },
      lines: {
        front: false
      },
      focus: {
        show: false
    }
    },
    legend: {
      show: false
    }
  });

});


// CHART 2
require(["d3", "c3"], function(d3, c3) {
var chart = c3.generate({
  bindto: '#chart2',
  data: {
    columns: [
      ['data1', 400, 500, 550, 450, 430, 550, 650, 700, 650],
    ],
    types: {
      data1: 'area-spline',
    }
  },
  axis:{
    x:{
      show: false
    },
    y:{
      show: false
    }
  },
  grid: {
    x: {
      //الخطوط الرمادية الأفقية .. لا تنسى إدخالها ديناميكيا عند كل 100
      lines: [
        {value: 100,text: ''},
        {value: 1, text: ''},
        {value: 2, text: ''},
        {value: 3, text: ''},
        {value: 4, text: ''},
        {value: 5, text: ''},
        {value: 6, text: ''},
        {value: 7, text: ''}
      ]
    },
    lines: {
      front: false
    },
    focus: {
        show: false
    }
  },
  legend: {
    show: false
  }
});
});


// CHART 03
// CHART 2
require(["d3", "c3"], function(d3, c3) {
var chart = c3.generate({
  bindto: '#chart3',
  data: {
    columns: [
      ['data1', 300, 400, 430, 410, 410, 430, 500, 600, 650, 650],
    ],
    types: {
      data1: 'area-spline',
    }
  },
  axis:{
    x:{
      show: false
    },
    y:{
      show: false
    }
  },
  grid: {
    x: {
      //الخطوط الرمادية الأفقية .. لا تنسى إدخالها ديناميكيا عند كل 100
      lines: [
        {value: 100,text: ''},
        {value: 1, text: ''},
        {value: 2, text: ''},
        {value: 3, text: ''},
        {value: 4, text: ''},
        {value: 5, text: ''},
        {value: 6, text: ''},
        {value: 7, text: ''},
        {value: 8, text: ''}
      ]
    },
    lines: {
      front: false
    },
    focus: {
        show: false
    }
  },
  legend: {
    show: false
  }
});
});
