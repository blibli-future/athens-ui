<template>
    <main class="shift">
        <h2 class="shift__title">Shift</h2>
            <alerts></alerts>
        <br/>
        <router-link to="/shift/add" class="shift__button">Add New</router-link>
        <br/><br/>
        <table class="table">
            <thead class="table__header">
                <tr>
                    <td>ID Shift</td>
                    <td>Name</td>
                    <td>Start Hour</td>
                    <td>End Hour</td>
                    <td>Start Day</td>
                    <td>End Day</td>
                    <td>Department</td>
                    <td>Location</td>
                </tr>
            </thead>
            <tbody class="table__body">
                <tr v-for="shift in shifts">
                    <td>{{shift.id}}</td>
                    <td>{{shift.name}}</td>
                    <td class="text-center">{{shift.startHour}}</td>
                    <td class="text-center">{{shift.endHour}}</td>
                    <td>{{shift.startDay}}</td>
                    <td>{{shift.endDay}}</td>
                    <td>{{shift.department}}</td>
                    <td>{{shift.location}}</td>
                </tr>
            </tbody>
        </table>
    </main>
</template>


<script>
    import Alerts from '../../Alert.vue'

    export default {
        data() {
            return {
                shifts: []
            };
        },
        created:function() {
            this.$http.get('localhost:8080/shifts')
                .then((response) => {
                    this.shifts = response.data;
                });
        },
        components: {Alerts}
    }
</script>

<style lang="scss">

    .shift{
        margin:3% 15%;
        &__title{
            display: block;
            font-size: 1.5em;
            font-weight: bold;
        }
        &__button{
            display: inline-block;
            padding: 8px 12px;
            margin-bottom: 0;
            font-size: 14px;
            text-align: center;
            border: 1px solid transparent;
            border-radius: 4px;
            background-color: #b3dcff;
            color: black;
            cursor: pointer;
            text-decoration: none;
            &:hover{
                background-color: #92ccff;
            }
        }
    }
    .table{
        width: 100%;
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
             td{
                padding:5px ;
                border: solid thin #a1a1a1;
            }
        }
    }
    .text-center{
        text-align: center
    }


</style>
