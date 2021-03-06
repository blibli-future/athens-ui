$(document).ready(function() {
    $.getScript('http://www.chartjs.org/assets/Chart.js',function(){

        var data = {
            labels : ["January","February","March","April","May","June","July"],
            datasets : [

                {
                    fillColor : "rgba(151,187,205,0.5)",
                    strokeColor : "rgba(151,187,205,1)",
                    pointColor : "rgba(151,187,205,1)",
                    pointStrokeColor : "#fff",
                    data : [28,48,40,19,96,27,100]
                }
            ]
        }

        var options = {
            animation: true
        };

        //Get the context of the canvas element we want to select
        var c = $('#myChart');
        var ct = c.get(0).getContext('2d');
        var ctx = document.getElementById("myChart").getContext("2d");
        /*********************/
        new Chart(ctx).Bar(data,options);

    })
});/**
 * Created by amesa on 4/11/17.
 */
