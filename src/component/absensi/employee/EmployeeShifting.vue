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
                <td>Work Day</td>
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
                <td>{{item.workDay}}</td>
                <td>{{item.departmentEmployee}}</td>
                <td>{{item.location}}</td>
                <td><button class="emp-shift__link" @click="deleteShift(item)" v-if="item.assigned">Delete</button>
                    <button class="emp-shift__link" @click="assignShift(item)" v-else>Add</button></td>
            </tr>
            </tbody>
        </table>
        Selected :{{selectedShift}}
    </main>
</template>


<script>
    export default {

        data() {
            return {
                nik:'',
                selectedShift:'',
                shiftItems: [],

            };
        },
        created: function() {
            this.nik = this.$route.params.nik;
            this.$http.get('http://localhost:8080/employees'+'/'+this.nik+'/shifts')
                .then((response) => {
                    this.shiftItems = response.data;
                    console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                })
        },
        methods:{
            assignShift(item){
               this.selectedShift= item.id
               this.$http.post('http://localhost:8080/employees'+'/'+this.nik+'/'+this.selectedShift+'/add')
                   .then((response) => {
                       console.log(response);
                   })
                   .catch(function (error) {
                     console.log(error);
                   })
            },
            deleteShift(item){
               this.selectedShift= item.id
               this.$http.post('http://localhost:8080/employees'+'/'+this.nik+'/'+this.selectedShift+'/remove')
                   .then((response) => {
                       console.log(response);
                   })
                   .catch(function (error) {
                     console.log(error);
                   })
            }
        }
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
