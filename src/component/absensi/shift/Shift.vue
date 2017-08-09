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
                    <td>Action</td>
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
        <modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">Add Employee to Shift</h3>
            <form slot="body" class="form">
                <table class="table">
                    <thead class="table__header">
                    <tr>
                        <td></td>
                        <td>NIK</td>
                        <td>Full Name</td>
                        <td>Name Of Dept</td>
                    </tr>
                    </thead>
                    <tbody class="table__body">
                    <tr v-for="item in employee">
                        <td><input type="checkbox" :value=item.nik  v-model="selectedEmp"/></td>
                        <td>{{item.nik}}</td>
                        <td>{{item.fullname}}</td>
                        <td>{{item.nameOfDept}}</td>
                    </tr>
                    </tbody>
                </table>
            </form>
            <div slot="footer">
                <!--TODO: direct form-->
                <button class="modal-button shift__button">
                    Save
                </button>
                <button class="modal-button shift__button" @click="showModal = false">
                    Cancel
                </button>
            </div>
        </modal>


    </main>
</template>


<script>
    import Alerts from '../../Alert.vue';
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
            margin: 0 3px;
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
        &__link{
            text-decoration: underline;
            background: none;
            border : none;
            color: cornflowerblue;
            &:hover{
                cursor:pointer;
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
