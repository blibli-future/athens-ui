<template >
    <main class="presensi">
        <h2 class="presensi__title">Presensi</h2><br/>
        <section class="presensi-search">
            <form class="form">
                <input type="text" name="search" id="search" placeholder="keyword" class="form__input">
                <label for="searchBy" class="form__label">Search By</label>
                <select id="searchBy" class="form__input">
                    <option>Nama</option>
                    <option>NIK</option>
                </select>
                <label for="filter" class="form__label">Filter </label>
                <select id="filter" class="form__input">
                    <!--TODO: get department from Api-->
                    <option>All Department</option>
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
                <button class="form__button">Search</button>
            </form>
        </section>
        <br/>
        <section class="presensi-tbl">
            <table class="table">
                <thead class="table__header">
                <tr>
                    <td>NIK
                    <td>Nama</td>
                    <td>Date</td>
                    <td>Tap In</td>
                    <td>Tap Out</td>
                    <td>Duration</td>
                    <td>Action</td>
                </tr>
                </thead>
                <tbody class="table__body">
                    <tr v-for="item in presensi" >
                        <td>{{item.nik}}</td>
                        <td>{{item.fullName}}</td>
                        <td>{{item.date}}</td>
                        <td>{{item.tapIn}}</td>
                        <td>{{item.tapOut}}</td>
                        <td>{{item.duration}}</td>
                        <td>
                            <button id="tapIn-modal" @click="selectNikTap(item, 'In')" class="form__button">Tap In</button>
                            <button id="tapOut-modal" @click="selectNikTap(item, 'Out')" class="form__button">Tap Out</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
        <br/>
        <section class="editTapHour">
            <modal v-if="showTapModal" @close="showModalTap = false">
                <h3 slot="header">Edit Tap {{ tapType }}</h3>
                <form slot="body" >
                    <p>NIK : {{selectedEmployeeNik }}</p><br/>
                    <p>Date : {{selectedDate}}</p><br/>
                    <label for="tap" >Tap {{ tapType }} Hour</label>
                    <input v-model="tapTime"
                            type="time"  id="tap"/>
                </form>
                <div slot="footer">
                    <!--TODO: direct form-->
                    <button @click="editAttendanceData"
                            class="modal-button form__button">
                        Save
                    </button>
                    <button class="modal-button form__button" @click="showModalTap = false">
                        Cancel
                    </button>
                </div>
            </modal>
        </section>
    </main>

</template>
<script>
    import Modal from'../Modal.vue';

    export default {
        data() {
            return {
                showTapModal: false,
                selectedEmployeeNik:'',
                selectedDate:'',
                tapType: '',
                tapTime: '',
                presensi:[
                    {nik:'9999',fullName:'Employee1',date:'14-Jul-2017',tapIn:'08:00', tapOut:'17:05', duration:'9h 5m'},
                    {nik:'9997',fullName:'Employee1',date:'14-Jul-2017',tapIn:'08:00', tapOut:'17:05', duration:'9h 5m'},
                    {nik:'9993',fullName:'Employee1',date:'14-Jul-2017',tapIn:'08:00', tapOut:'17:05', duration:'9h 5m'},
                    {nik:'9998',fullName:'Employee1',date:'14-Jul-2017',tapIn:'08:00', tapOut:'17:05', duration:'9h 5m'},
                    {nik:'9990',fullName:'Employee1',date:'14-Jul-2017',tapIn:'08:00', tapOut:'17:05', duration:'9h 5m'},
                    {nik:'9991',fullName:'Employee1',date:'14-Jul-2017',tapIn:'08:00', tapOut:'17:05', duration:'9h 5m'},
                    {nik:'9992',fullName:'Employee1',date:'14-Jul-2017',tapIn:'08:00', tapOut:'17:05', duration:'9h 5m'}
                ]
            };
        },
        components: {Modal},
        methods: {
            selectNikTap: function(item, type){
                this.selectedEmployeeNik= item.nik;
                this.selectedDate=item.date;
                this.showTapModal = true;
                this.tapType = type;
            },
            editAttendanceData: function () {
                this.$http.put('http://localhost:8080/employees/taps', {
                    nik: this.selectedEmployeeNik,
                    tapTime: this.tapTime,
                    tapDate: this.selectedDate,
                    type: this.tapType
                })
            }
        }

    };
</script>
<style lang="scss">

    .presensi{
        margin: 3% 15%;
        &__title{
            display: block;
            font-size: 1.5em;
            font-weight: bold;
        }
        .form{
            display:flex;
            flex-direction: row;
            align-content: center;
            justify-content: baseline;
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
        }
        .table{
            width: 100%;
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
                td{
                    padding:5px ;
                    border: solid thin #a1a1a1;
                }
            }
        }
        @media (max-width: 900px) {
            .form{
                flex-direction: column;
                &__label{
                    margin: 5px 0;
                }
                &__button{
                    margin: 5px 0;
                }
            }
            .table{
                overflow-x:auto;
            }
        }
    }

</style>