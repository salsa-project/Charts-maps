require.config({
  paths: {
    d3: "https://cdnjs.cloudflare.com/ajax/libs/d3/5.12.0/d3",
    c3: "https://cdnjs.cloudflare.com/ajax/libs/c3/0.7.11/c3.min"
  }
});

/***********************************/
/*               CHART1            */
/***********************************/
require(["d3", "c3"], function(d3, c3) {
  //D3 (v3, v5) working together in the same page
  d3version5 = d3
  window.d3 = null

  window.chart = c3.generate({
    bindto: '#chart1',
    data: {
      x: 'times',
      xFormat: '%Y-%m-%d %H:%M:%S',
      columns: [
        //هنا ضع إحصائيات الوقت ديناميكيا
        ['times','2015-09-15 18:20:34','2015-09-16 18:25:42','2015-09-17 18:30:48', '2015-09-18 18:30:48', '2015-09-19 18:30:48', '2015-09-20 18:30:48'],
        //هنا ضع إحصائيات الأرباح ديناميكيا لكي يتشكل المنحنى
        ['data1', 450, 100, 500, 300, 600, 400, 200]
      ],
      type: 'spline'
    },
    axis: {
      x: {
        show: false,
        type: 'timeseries',
        localtime: false,
        tick: {
          format: '%Y-%m-%d %H:%M:%S'
        }
      },
      y: {
        padding: {
          top: 20,
          bottom: 20
        },
        tick: {
          format: function(d) {
            return "$ " + d;
          }
        }
      },
    },
    grid: {
      y: {
        //الخطوط الرمادية الأفقية .. لا تنسى إدخالها ديناميكيا عند كل 100
        lines: [
          {value: 100,text: ''},
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
    },
    tooltip: {
      //هذا صندوق المعلومات الذي يظهر عند تمرير الماوس على الشارت
      contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
          var $$ = this, config = $$.config,
              titleFormat = config.tooltip_format_title || defaultTitleFormat,
              nameFormat = config.tooltip_format_name || function (name) { return name; },
              valueFormat = config.tooltip_format_value || defaultValueFormat,
              text, i, title, value, name, bgcolor;
          for (i = 0; i < d.length; i++) {
              if (! (d[i] && (d[i].value || d[i].value === 0))) { continue; }

              if (! text) {
                  title = titleFormat ? titleFormat(d[i].x) : d[i].x;
                  text = "<div class='tooltip-container " + $$.CLASS.tooltip + "'>" + (title || title === 0 ? "<p class='tooltip-text tooltip-date'>" + title + "</p>" : "");
              }
              value = valueFormat(d[i].value, d[i].ratio, d[i].id, d[i].index);
              text += "<p class='tooltip-text tooltip-value'>" + value + "</p>";
          }
          return text + "</div>";
      }
  }
  });
});

const times = document.getElementsByClassName("chart-option");
const allTime = document.getElementsByClassName("chart-option")[0];
const thisYear = document.getElementsByClassName("chart-option")[1];
const thisWeek = document.getElementsByClassName("chart-option")[2];
const today = document.getElementsByClassName("chart-option")[3];

allTime.addEventListener('click', function(){
  //تغيير لون خلفية الزر
  for(var m = 0 ; m < times.length; ++m){
    times[m].classList.remove('chart-option-active')
  }
  this.classList.toggle('chart-option-active');
  //تحديث البيان
  chart.load({
  columns: [
    //هنا إحصائيات المن البداية إلى النهاية
    //هنا تقوم بوضع الإحصائيات الجديدة بعد جلبها من السيرفر (قاعدة البيانات)
    ['times','2015-09-15 18:20:34','2015-09-16 18:25:42','2015-09-17 18:20:34','2015-09-18 18:25:42','2015-09-19 18:20:34','2015-09-20 18:25:42','2015-09-21 18:20:34','2015-09-22 18:25:42','2015-09-23 18:20:34','2015-09-24 18:25:42','2015-09-25 18:20:34','2015-09-26 18:25:42','2015-09-27 18:20:34','2015-09-28 18:25:42','2015-09-29 18:20:34','2015-09-30 18:25:42'],
    ['data1', 100, 200, 300, 200, 100, 100, 100, 200, 100, 200, 300, 200, 100, 100, 100, 200]
  ]
});
})
thisYear.addEventListener('click', function(){
  //تغيير لون خلفية الزر
  for(var m = 0 ; m < times.length; ++m){
    times[m].classList.remove('chart-option-active')
  }
  this.classList.toggle('chart-option-active');
  //تحديث البيان
  chart.load({
  columns: [
    //هنا إحصائيات العام
    //هنا تقوم بوضع الإحصائيات الجديدة بعد جلبها من السيرفر (قاعدة البيانات)
    ['times','2015-09-15 18:20:34','2015-09-16 18:25:42','2015-09-17 18:20:34','2015-09-18 18:25:42','2015-09-19 18:20:34','2015-09-20 18:25:42'],
    ['data1', 150, 300, 100, 50, 500, 700]
  ]
});
})
thisWeek.addEventListener('click', function(){
  //تغيير لون خلفية الزر
  for(var m = 0 ; m < times.length; ++m){
    times[m].classList.remove('chart-option-active')
  }
  this.classList.toggle('chart-option-active');
  //تحديث البيان
  chart.load({
  columns: [
    //هنا إحصائيات الأسبوع
    //هنا تقوم بوضع الإحصائيات الجديدة بعد جلبها من السيرفر (قاعدة البيانات)
    ['times','2015-09-15 18:20:34','2015-09-16 18:25:42','2015-09-17 18:20:34','2015-09-18 18:25:42','2015-09-19 18:20:34','2015-09-20 18:25:42'],
    ['data1', 450, 100, 500, 300, 600, 400]
  ]
});
})
today.addEventListener('click', function(){
  //تغيير لون خلفية الزر
  for(var m = 0 ; m < times.length; ++m){
    times[m].classList.remove('chart-option-active')
  }
  this.classList.toggle('chart-option-active');
  //تحديث البيان
  chart.load({
  columns: [
    //هنا إحصائيات اليوم
    //هنا تقوم بوضع الإحصائيات الجديدة بعد جلبها من السيرفر (قاعدة البيانات)
    ['data1', 100, 200, 300, 200, 100, 100]
  ]
});
})


/***********************************/
/*               CHART2            */
/***********************************/
require(["d3", "c3"], function(d3, c3) {
var chart = c3.generate({
  bindto: '#chart2',
  data: {
    x: 'times',
    xFormat: '%Y-%m-%d %H:%M:%S',
    //هنا ضع الإحصائيات ديناميكيا لكي يتشكل المنحنى
    columns: [
      ['times','2015-09-15 18:20:34','2015-09-16 18:25:42','2015-09-17 18:20:34','2015-09-18 18:25:42','2015-09-19 18:20:34','2015-09-20 18:25:42','2015-09-21 18:20:34','2015-09-22 18:25:42','2015-09-23 18:20:34'],
      ['data1', 400, 500, 550, 450, 430, 550, 650, 700, 650],
    ],
    types: {
      data1: 'area-spline',
    }
  },
  axis:{
    x: {
      show: false,
      type: 'timeseries',
      localtime: false,
      tick: { format: '%Y-%m-%d %H:%M:%S'}
      },
    y:{
      show: false
    }
  },
  grid: {
    x: {
      //الخطوط الرمادية الأفقية .. لا تنسى إدخالها ديناميكيا
      lines: [
        {value: "2015-09-16 18:25:42", text: ''},
        {value: '2015-09-17 18:25:42', text: ''},
        {value: '2015-09-18 18:20:34', text: ''},
        {value: '2015-09-19 18:25:42', text: ''},
        {value: '2015-09-20 18:20:34', text: ''},
        {value: '2015-09-21 18:20:34', text: ''},
        {value: '2015-09-22 18:20:34', text: ''}
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
  },
  tooltip: {
    //هذا صندوق المعلومات الذي يظهر عند تمرير الماوس على الشارت
    contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
        var $$ = this, config = $$.config,
            titleFormat = config.tooltip_format_title || defaultTitleFormat,
            nameFormat = config.tooltip_format_name || function (name) { return name; },
            valueFormat = config.tooltip_format_value || defaultValueFormat,
            text, i, title, value, name, bgcolor;
        for (i = 0; i < d.length; i++) {
            if (! (d[i] && (d[i].value || d[i].value === 0))) { continue; }

            if (! text) {
                title = titleFormat ? titleFormat(d[i].x) : d[i].x;
                text = "<div class='tooltip-container " + $$.CLASS.tooltip + "'>" + (title || title === 0 ? "<p class='tooltip-text tooltip-date'>" + title + "</p>" : "");
            }
            value = valueFormat(d[i].value, d[i].ratio, d[i].id, d[i].index);
            text += "<p class='tooltip-text tooltip-value'>" + value + "</p>";
        }
        return text + "</div>";
    }
}
});
});



/***********************************/
/*               CHART3            */
/***********************************/
require(["d3", "c3"], function(d3, c3) {
var chart = c3.generate({
  bindto: '#chart3',
  data: {
    x: 'times',
    xFormat: '%Y-%m-%d %H:%M:%S',
    //هنا ضع الإحصائيات ديناميكيا لكي يتشكل المنحنى
    columns: [
      ['times','2015-09-15 18:20:34','2015-09-16 18:25:42','2015-09-17 18:20:34','2015-09-18 18:25:42','2015-09-19 18:20:34','2015-09-20 18:25:42','2015-09-21 18:20:34','2015-09-22 18:25:42','2015-09-23 18:20:34'],
      ['data1', 300, 400, 430, 410, 410, 430, 500, 600, 650, 650],
    ],
    types: {
      data1: 'area-spline',
    }
  },
  axis:{
    x: {
      show: false,
      type: 'timeseries',
      localtime: false,
      tick: {
        format: '%Y-%m-%d %H:%M:%S'
      }
      },
    y:{
      show: false
    }
  },
  grid: {
    x: {
      //الخطوط الرمادية الأفقية .. لا تنسى إدخالها ديناميكيا عند كل 1
      lines: [
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
  },
  tooltip: {
    //هذا صندوق المعلومات الذي يظهر عند تمرير الماوس على الشارت
    contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
        var $$ = this, config = $$.config,
            titleFormat = config.tooltip_format_title || defaultTitleFormat,
            nameFormat = config.tooltip_format_name || function (name) { return name; },
            valueFormat = config.tooltip_format_value || defaultValueFormat,
            text, i, title, value, name, bgcolor;
        for (i = 0; i < d.length; i++) {
            if (! (d[i] && (d[i].value || d[i].value === 0))) { continue; }

            if (! text) {
                title = titleFormat ? titleFormat(d[i].x) : d[i].x;
                text = "<div class='tooltip-container " + $$.CLASS.tooltip + "'>" + (title || title === 0 ? "<p class='tooltip-text tooltip-date'>" + title + "</p>" : "");
            }
            value = valueFormat(d[i].value, d[i].ratio, d[i].id, d[i].index);
            text += "<p class='tooltip-text tooltip-value'>" + value + "</p>";
        }
        return text + "</div>";
    }
}
});
});
