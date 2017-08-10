<template>

    <main class="home">
        <section >
            <div class="home__search">
                <form
                        class="home__form">
                    <label for="criteria" class="home__label">Criteria</label>
                    <select v-model="selectedType"
                            id="criteria" class="home__select">
                        <option value="late">Number of Late</option>
                        <option value="hourly">Hourly Leave</option>
                        <option value="sick">Sick Leave</option>
                        <option value="substitution">Substitution Leave</option>
                        <option value="special">Special Leave</option>
                        <option value="yearly">Yearly Leave</option>
                    </select>

                    <label for="department" class="home__label">Department</label>
                    <select v-model="selectedDepartment"
                            name="department" id="department" class="home__input">
                        <option v-for="department in departments"
                                :value="department">
                            {{department}}
                        </option>
                    </select>

                    <button v-on:click="refreshHome" type="submit" class="home__button">Submit</button>
                </form>
            </div>

        </section>
        <section class="home__result">
            <div class="result__content">
                <canvas id="chart" class="home__chart result__content" ></canvas>
            </div>
            <div class="result__content">
                <table class="table result__content">
                <thead class="table__header">
                    <tr>
                        <th>NIK</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Number of Late</th>
                    </tr>
                </thead>
                <tbody class="table__body">
                    <tr v-for="employee in topTenData" >
                        <td>{{employee.nik}}</td>
                        <td>{{employee.fullName}}</td>
                        <td>{{employee.department}}</td>
                        <td>{{employee.numberResult}}</td>

                    </tr>
                </tbody>
            </table>
            </div>
        </section>

    </main>
</template>

<script>
import ChartJs from 'chart.js';
import Department from '../constant/departments';

export default {
    data(){
        return {
            chart: {},
            topTenData: [],
            dateOnChart: [],
            numberOnChart: [],
            selectedDepartment: 'Business Development',
            selectedType: 'late',
            departments: Department
        }
    },
    methods: {
        refreshHome: function () {
            this.$http.get('http://localhost:8080/chart' + this.selectedType,{params:{
                dept:this.selectedDepartment
            }})
                .then(response => {
                    const dailyChart = response.data.dailyChart;

                    this.topTenData = response.data.top10Report;

                    this.dateOnChart = [];
                    this.numberOnChart = [];

                    for (let i=0; i<dailyChart.size(); i++) {
                        this.dateOnChart.push(dailyChart.day);
                        this.numberOnChart.push(dailyChart.total);
                    }
                });
        }
    },
    created: function () {
      this.refreshHome()
    },
    mounted: function() {
        let context = document.getElementById('chart').getContext('2d');
        this.chart = new ChartJs(context, {
                type: 'bar',
                data: {
                    labels: this.dateOnChart,
                    datasets: [{
                        label: '# of Employees',
                        data: this.numberOnChart,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            }
        )
    }
}
</script>

<style lang="scss">
    .home{
        margin: 3% 10%;
        &__search{
            width: 100%;
        }
        &__form{
            width:100%;
            display:flex;
            flex-direction: row;
            align-content: center;
            justify-content: baseline;
            margin: 3% 0;
        }
        &__result{
            max-width: 1400px;
        }
        &__chart{
            border: 1px solid black;
            width: 420px;
            height: auto;
        }
        &__title{
             display: block;
             font-size: 1.5em;
             font-weight: bold;
         }
        &__label{
             flex:none;
             display: block;
             width: auto;
             margin:auto 10px;
             box-sizing: border-box;
         }
        &__input{
             flex: 1 1 auto;
             display: block;
             padding: 5px;
             background-color: white;
             border-radius: 5px;
             border: 1px solid #ccc;
         }
        &__button{
             margin: auto 5px;
             flex: 1 1 inherit;
             padding: 8px 12px;
             font-size: 14px;
             text-align: center;
             border: 1px solid transparent;
             border-radius: 4px;
             background-color: #b3dcff;
             cursor: pointer;
             text-decoration: none;
             color:black;
            &:hover{
                background-color: #94c2ee;
            }
        }
        .table{
            width: 100%;
            float: right;
            margin-bottom: 10px;
            &__header{
                text-align: center;
                font-weight: bold;
            }
            &__body{
                tr:hover{
                    background-color: #e1e1e1
                }
            }
            tr{
                th,td{
                    padding:5px ;
                    border: solid thin #a1a1a1;
                }
            }
        }
    }
    .result__content{
        flex-basis: 50%;
        margin: 0 5px;
    }

    @media (min-width: 900px) {
        .home__result {
            display: flex;
            justify-content: space-between;
        }
    }


</style>
