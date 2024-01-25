
  

document.addEventListener('DOMContentLoaded', function() {
    // Wait for the DOM to be fully loaded before attaching the event listener

    const themeToggleBtn = document.getElementById('theme-button');
    const htmlElement = document.documentElement;
  
  
    // Set initial theme from local storage or default to light
    const currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme);
  
    // Add event listener to the theme toggle button
    themeToggleBtn.addEventListener('click', function () {
      const newTheme = htmlElement.getAttribute('data-bs-theme') === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    });
  
    // Function to set the theme
    function setTheme(theme) {
      htmlElement.setAttribute('data-bs-theme', theme);
      localStorage.setItem('theme', theme);
    }
  





  
    // Get the button and body elements
    let toggleSideMenu = document.querySelectorAll('.toggleSideMenu');
    let bodyElement = document.body;

    toggleSideMenu.forEach( (btn) => {
        // Add a click event listener to the button
        btn.addEventListener('click', function() {
            // Toggle the 'bodyClass' on the body element
            bodyElement.classList.toggle('side-menu-opened');
        });
    });





      var options = {
              series: [{
                  data: [6500, 20100, 3000, 28500, 9500, 45000, 9500, 18000,32500,4500,30000,26000]
              
              }],

              chart: {
              height: 330,
              type: 'bar',
              events: {
                  click: function(chart, w, e) {
                      // console.log(chart, w, e)
                  }
                  }
              },



            plotOptions: {
              bar: {
                columnWidth: '60%',
                distributed: true,
                borderRadius:17,
                borderRadiusApplication: 'end',
                colors:{
                  ranges:[
                      {
                          from: 100,
                          to: 0,
                          color: '#34CAA5'
                      }
                  ]
                }
              }
            },



            dataLabels: {
              enabled: false
            },



            legend: {
              show: false
            },



            xaxis: {
              categories: ['Jan' , 'Feb' , 'Mar', 'Apr' , 'Mei' , 'Jun' , 'Jul' , 'Aug' ,'Sep' , 'Okt' , 'Nov' ,'Des'],
              labels: {
                style: {
                  fontSize: '12px',
                  fontFamily: 'Plus Jakarta Sans , sans-serif'
                }
              }
            },



            yaxis:{
              show:true,
              labels :{
                  style: {
                      fontFamily: 'Plus Jakarta Sans , sans-serif'
                    },
                  formatter: function (value) {
                      return  value.toLocaleString(); ;
                    }
              }
            },



            tooltip: {
              enabled : true,
              custom: function({series, seriesIndex, dataPointIndex, w}) {
                  return '<div class="arrow_box_tooltip">' +
                    '<span> $ ' + series[seriesIndex][dataPointIndex].toLocaleString(); + '</span>' +
                    '</div>'
                },
              y: {
                formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
                  return value
                }
              }
            },


          grid:{
              borderColor:'#EAEAEA',
              strokeDashArray: 5,
              row:{
                  opacity:1
              }
          },

          fill:{
              colors :['#34CAA5'],
              opacity : .1,
              type: 'gradient',
              gradient: {
                  shade: 'light',
                  type: "vertical",
                  shadeIntensity: 0,
                  opacityFrom: 1,
                  opacityTo: .1,
                  stops: [0, 100],
              }
          },

          states:{
              hover:{
                  filter:{
                      type:'none',
                      value:0
                  }
              },
              active: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            }
          }



      };

      let chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();

      updateYAxisVisibility();

      // Update Y-axis visibility on window resize
      window.addEventListener('resize', function () {
        updateYAxisVisibility();
      });


      function updateYAxisVisibility() {
        // Check window width and update Y-axis visibility
        if (window.innerWidth < 768) {
          chart.updateOptions({
            yaxis: {
              show: false
            }
          });

          chart.updateOptions({
            plotOptions: {
              bar: {
                columnWidth: '60%',
                distributed: true,
                borderRadius:10,
                borderRadiusApplication: 'end',
                colors:{
                  ranges:[
                      {
                          from: 100,
                          to: 0,
                          color: '#34CAA5'
                      }
                  ]
                }
              }
            }
          })
        } else {
          chart.updateOptions({
            yaxis: {
              show: true,
              labels :{
                style: {
                    fontFamily: 'Plus Jakarta Sans , sans-serif'
                  },
                formatter: function (value) {
                    return  value.toLocaleString(); ;
                  }
            }
            }
          });

          chart.updateOptions({
            plotOptions: {
              bar: {
                columnWidth: '60%',
                distributed: true,
                borderRadius:17,
                borderRadiusApplication: 'end',
                colors:{
                  ranges:[
                      {
                          from: 100,
                          to: 0,
                          color: '#34CAA5'
                      }
                  ]
                }
              }
            }
          })
        }
      }
  
    
  });