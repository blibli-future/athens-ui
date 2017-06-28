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
                    <td width="5px"></td>
                    <td>NIK
                    <td>Nama</td>
                    <td>Date</td>
                    <td>Tap In</td>
                    <td>Tap Out</td>
                    <td>Duration</td>
                </tr>
                </thead>
                <tbody>
                <table-content v-for="item in presensi"
                        :key="item.nik"
                        :item="item">
                </table-content>
                </tbody>
            </table>
        </section>
        <section class="editTapHour">
            <button id="tapIn-modal" @click="showModalTapIn = true" class="form__button">Tap In</button>
            <modal v-if="showModalTapIn" @close="showModalTapIn = false">
                <h3 slot="header">Edit Tap In</h3>
                <form slot="body" class="form">
                    <label for="tapIn" class="form__label">Tap In Hour</label>
                    <input type="time" class="form__input" id="tapIn"/>
                </form>
                <div slot="footer">
                    <!--TODO: direct form-->
                    <button class="modal-button form__button">
                        Save
                    </button>
                    <button class="modal-button form__button" @click="showModalTapIn = false">
                        Cancel
                    </button>
                </div>
            </modal>

            <button id="tapOut-modal" @click="showModalTapOut = true" class="form__button">Tap Out</button>
            <modal v-if="showModalTapOut" @close="showModalTapOut = false">
                <h3 slot="header">Edit Tap Out</h3>
                <form slot="body" class="form">
                    <label for="tapOut" class="form__label">Tap Out Hour</label>
                    <input type="time" class="form__input" id="tapOut"/>
                </form>
                <div slot="footer">
                    <!--TODO: direct form-->
                    <button class="modal-button form__button">
                        Save
                    </button>
                    <button class="modal-button form__button" @click="showModalTapOut = false">
                        Cancel
                    </button>
                </div>
            </modal>
        </section>
    </main>

</template>
<script>
    import TableContent from './presensi/TablePresensi.vue';
    import Modal from'../Modal.vue';
   //TODO: get data from checked item to be edited

    export default {
        data() {
            return {
                showModalTapIn: true,
                showModalTapOut: false,
                presensi:[
                    {nik:'9999',nama:'Employee1',date:'14-Jul-2017',tapin:'08:00', tapout:'17:05', duration:'9h 5m'}
                ]
            };
        },

        components: {TableContent,Modal}
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