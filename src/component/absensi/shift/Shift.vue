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
                    <td>Department</td>
                    <td>Location</td>
                </tr>
            </thead>
            <tbody class="table__body">
                <tr v-for="item in shiftItems">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td class="text-center">{{item.startHour}}</td>
                    <td class="text-center">{{item.endHour}}</td>
                    <td>{{item.department}}</td>
                    <td>{{item.location}}</td>
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
                shiftItems: [
                    { id: '001', name: 'Cawang Ops' , startHour:"08:00", endHour:"14:00",department:"Operation",location:"Cawang"},
                    { id: '002', name: 'Cawang Ops' , startHour:"08:00", endHour:"16:00",department:"Operation",location:"Cawang"},
                    { id: '003', name: 'Batu Ceper' , startHour:"07:00", endHour:"16:00",department:"Operation",location:"Batu Ceper"},
                    { id: '004', name: 'KS Tubun BES' , startHour:"08:00", endHour:"17:00",department:"Operation",location:"location"},
                ],

            };
        },

        components: {Alerts}
    }
</script>

<style lang="scss">
    @import "../../../_scss/_color.scss";
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
            background-color:$button__blue;
            color: black;
            cursor: pointer;
            text-decoration: none;
            &:hover{
                background-color: $button__blue-hover;
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
                background-color: $table-hover;
            }
        }
          tr{
             td{
                padding:5px ;
                border: solid thin $border__grey;
            }
        }
    }
    .text-center{
        text-align: center
    }


</style>
