

var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
        ['data1', 450, 100, 500, 300, 600, 400]
      ],
      type: 'spline'
    },
    axis: {
        x: {
            show: false
        }
    },
    grid: {
        y: {
            lines: [
                {value: 100, text: ''},
                {value: 200, text: ''},
                {value: 300, text: ''},
                {value: 400, text: ''},
                {value: 500, text: ''},
                {value: 600, text: ''}
            ]
        }
    }

});

require.config({
  baseUrl: '/js',
  paths: {
    d3: "https://d3js.org/d3.v5.min"
  }
});

require(["d3", "c3"], function(d3, c3) {
  c3.generate({

  });
});
