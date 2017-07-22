<template>

    <main class="home">
        <section >
            <div class="home__search">
                <form class="home__form">
                    <label for="criteria" class="home__label">Criteria</label>
                    <select id="criteria" class="home__select">
                        <option>Number of Late</option>
                        <option>Hourly Leave</option>
                        <option>Sick Leave</option>
                        <option>Substitution Leave</option>
                        <option>Special Leave</option>
                        <option>Yearly Leave</option>
                    </select>

                    <label for="department" class="home__label">Department</label>
                    <select name="department" id="department" class="home__input">
                        <option value="{{}}">Business Development </option>
                        <option value="{{}}">Finance</option>
                        <option value="{{}}">Human Resource </option>
                        <option value="{{}}">Marketing</option>
                        <option value="{{}}">Operations </option>
                        <option value="{{}}">Product Management </option>
                        <option value="{{}}">Program Management </option>
                        <option value="{{}}">Technology </option>
                        <option value="{{}}">Trade Partnership</option>
                    </select>

                    <label  for="startDate" class="home__label">Start Date</label>
                    <input type="date" class="home__input" id="startDate"/>

                    <label  for="endDate" class="home__label">Start Date</label>
                    <input type="date" class="home__input" id="endDate"/>

                    <button type="submit" class="home__button">Submit</button>
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
                    <tr v-for="item in presensi" >
                        <td>{{item.nik}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.department}}</td>
                        <td>{{item.numberOfLate}}</td>

                    </tr>
                </tbody>
            </table>
            </div>
        </section>

    </main>
</template>

<script>
import ChartJs from 'chart.js';

export default {
    data(){
        return {
            chart: {},
            presensi:[
                {nik:'9999',name:'Employee1',department:'IT',numberOfLate:'10'},
                {nik:'9999',name:'Employee1',department:'IT',numberOfLate:'9'},
                {nik:'9999',name:'Employee1',department:'IT',numberOfLate:'8'},
                {nik:'9999',name:'Employee1',department:'IT',numberOfLate:'7'},
                {nik:'9999',name:'Employee1',department:'IT',numberOfLate:'6'},
                {nik:'9999',name:'Employee1',department:'IT',numberOfLate:'5'},
                {nik:'9999',name:'Employee1',department:'IT',numberOfLate:'4'},
                {nik:'9999',name:'Employee1',department:'IT',numberOfLate:'3'},
                {nik:'9999',name:'Employee1',department:'IT',numberOfLate:'2'},
                {nik:'9999',name:'Employee1',department:'IT',numberOfLate:'1'},

            ]
        }
    },
    mounted: function() {
        let context = document.getElementById('chart').getContext('2d');
        this.chart = new ChartJs(context, {
                type: 'bar',
                data: {
                    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
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

    .call-out:nth-child(1) {background-color: #c0dbe2;}
    .call-out:nth-child(2) {background-color: #cdf1c3;}
    .call-out:nth-child(3) {background-color: #ccb9da;}

</style>