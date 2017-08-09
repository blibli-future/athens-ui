<template>
    <main class="emp-shift">
        <h2 class="emp-shift__title">Employee Shifting</h2>
        <br/>
        <router-link to="/employee">Back to Employee</router-link>
        <br/>
        <table class="table">
            <thead class="table__header">
            <tr>
                <td>ID Shift</td>
                <td>Name</td>
                <td>Start Hour</td>
                <td>End Hour</td>
                <td>Department</td>
                <td>Location</td>
                <td>Action</td>
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
                <td><button class="emp-shift__link">Add</button> | <button class="emp-shift__link">Delete</button></td>
            </tr>
            </tbody>
        </table>
    </main>
</template>


<script>
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
    }
</script>

<style lang="scss">

    .emp-shift{
        margin:3% 15%;
        &__link{
            text-decoration: underline;
            background: none;
            border:none;
            &:hover{
                cursor: pointer;
            }
        }
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
