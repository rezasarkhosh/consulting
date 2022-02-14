

$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('#sidebar').on('hide.bs.collapse', function (e) {
        if( e.target == this ){
            $('#main-content').removeClass('col-md-11');
        }
    })

    $('#sidebar').on('show.bs.collapse', function (e) {
        if( e.target == this ){
            $('#main-content').addClass('col-md-11');
        }
    })


    var ch1 = $('#chart1');
    var chart1 = new Chart(ch1,{
        type:'line',
        data:{
            labels:['شنبه','یک شنبه','دوشنبه','سه شنبه','چهارشنبه','پنجشنبه','جمعه'],
            
            datasets:[{
                data:[12000,11000,14500,12600,15700,14200,16000],
                backgroundColor:'#ffd556',
                borderColor:'#fff',
                pointBackgroundColor:'#fff'
            }]
        },
        options:{
            scales:{
                yAxes:[{
                    display:false
                }],
                xAxes:[{
                    display:false
                }]
            },
            legend:{
                display:false
            },
            layout:{
                padding:{
                    left:5,
                    right:5,
                    top:5,
                    bottom:5
                }
            }
        }
    })
    /*************** Chart 1 ******************/

    var ch2 = $('#chart2');
    var chart2 = new Chart(ch2,{
        type:'bar',
        data:{
            labels:['شنبه','یک شنبه','دوشنبه','سه شنبه','چهارشنبه','پنجشنبه','جمعه'],
            
            datasets:[{
                data:[12000,11500,13000,14000,13500,15000,14500],
                backgroundColor:'#46ccff',
                borderColor:'#fff',
                pointBackgroundColor:'#fff'
            }]
        },
        options:{
            scales:{
                yAxes:[{
                    display:false
                }],
                xAxes:[{
                    display:false
                }]
            },
            legend:{
                display:false
            },
            layout:{
                padding:{
                    left:5,
                    right:5,
                    top:5,
                    bottom:5
                }
            }
        }
    })
    /*************** Chart 2 ******************/

    var ch3 = $('#chart3');
    var chart3 = new Chart(ch3,{
        type:'line',
        data:{
            labels:['شنبه','یک شنبه','دوشنبه','سه شنبه','چهارشنبه','پنجشنبه','جمعه'],
            
            datasets:[{
                data:[13000,12500,14000,15600,13700,15000,14000],
                backgroundColor:'#ff6776',
                borderColor:'#fff',
                pointBackgroundColor:'#fff'
            }]
        },
        options:{
            scales:{
                yAxes:[{
                    display:false
                }],
                xAxes:[{
                    display:false
                }]
            },
            legend:{
                display:false
            },
            layout:{
                padding:{
                    left:5,
                    right:5,
                    top:5,
                    bottom:5
                }
            }
        }
    })
    /*************** Chart 3 ******************/

    var ch4 = $('#chart4');
    var chart4 = new Chart(ch4,{
        type:'bar',
        data:{
            labels:['شنبه','یک شنبه','دوشنبه','سه شنبه','چهارشنبه','پنجشنبه','جمعه'],
            
            datasets:[{
                data:[12000,11500,13000,14000,13500,15000,14500],
                backgroundColor:'#3ed561',
                borderColor:'#fff',
                pointBackgroundColor:'#fff'
            }]
        },
        options:{
            scales:{
                yAxes:[{
                    display:false
                }],
                xAxes:[{
                    display:false
                }]
            },
            legend:{
                display:false
            },
            layout:{
                padding:{
                    left:5,
                    right:5,
                    top:5,
                    bottom:5
                }
            }
        }
    })
    /*************** Chart 4 ******************/

    var vs = $('#visit');
    var visit = new Chart(vs,{
        type:'line',
        data:{
            labels:['شنبه','یک شنبه','دوشنبه','سه شنبه','چهارشنبه','پنجشنبه','جمعه'],
            
            datasets:[{
                data:[15000,14700,16500,15600,14700,15000,14000,15000],
                backgroundColor:'',
                borderColor:'#17a2b8',
                pointBackgroundColor:'#17a2b8'
            },
            {
                data:[14000,15700,13500,14600,16700,15200,12500,14000],
                backgroundColor:'',
                borderColor:'#ffc107',
                pointBackgroundColor:'#ffc107'
            }
        ]
        },
        options:{
            scales:{
                yAxes:[{
                    display:true
                }],
                xAxes:[{
                    display:true
                }]
            },
            legend:{
                display:false
            },
            layout:{
                padding:{
                    left:5,
                    right:5,
                    top:5,
                    bottom:5
                }
            }
        }
    })
    /*************** Visit ******************/
})