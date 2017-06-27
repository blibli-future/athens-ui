<template>
    <main class="employee">
        <h3 class="employee__title">Employee List</h3>
        <br/>
        <section class="search">
            <form class="emp-search">
                <input type="text" placeholder="search"class="emp-search__input"/>
                <label for="searchKey" class="emp-search__label">Search By</label>
                <select id="searchKey" class="emp-search__input">
                    <option>NIK</option>
                    <option>Name</option>
                </select>
                <label for="dep" class="emp-search__label">Department</label>
                <select id="dep"class="emp-search__input">
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
                <button class="emp-search__button">Search</button>
                <button class="emp-search__button emp-search__button-blue">Add New</button>

            </form>
        </section>
        <br/>
        <section class="table">
            <table class="emp-table">
            <thead class="emp-table__title">
            <tr>
                <td>NIK</td>
                <td>Full Name</td>
                <td>Gender</td>
                <td>Position Text</td>
                <td>Organizational Unit</td>
                <td>Marital Status</td>
                <td>Religion</td>
                <td>Name Of Dept</td>
                <td>Chief NIK</td>
                <td>Chief Name</td>
                <td>Start Working Date</td>
            </tr>
            </thead>
            <tbody>
               <table-emp v-for="item in employee"
                          :key="item.nik"
                          :item="item">
               </table-emp>
            </tbody>
        </table>
        </section>
    </main>
</template>


<script>
    import TableEmp from './employee/TableEmp.vue'
    export default {
        data() {
            return {
                employee: [
                    {nik:'01004106',fullname:'Dhany Koespratamadjati',gender:'Male',positionText:'Brand Activation Staff',organizationalUnitText:'Brand Activation', maritalStatus:'Lajang',religion:'Islam',nameOfDept:'Marketing -GDN',chiefNik:'06300020',chiefName:'Deny Agsana',startWorkingDate:'12/1/13'},
                    {nik:'02002757',fullname:'Kusumo Martanto',gender:'Male',positionText:'General Manager',organizationalUnitText:'Operation', maritalStatus:'Nikah',religion:'Katholik',nameOfDept:'Business Development -GDN',chiefNik:'-',chiefName:'-',startWorkingDate:'8/1/09'},
                    {nik:'01004108',fullname:'Dhany Koespratamadjati',gender:'Male',positionText:'Brand Activation Staff',organizationalUnitText:'Brand Activation', maritalStatus:'Lajang',religion:'Islam',nameOfDept:'Marketing -GDN',chiefNik:'06300020',chiefName:'Deny Agsana',startWorkingDate:'12/1/13'},
                    {nik:'02002759',fullname:'Kusumo Martanto',gender:'Male',positionText:'General Manager',organizationalUnitText:'Operation', maritalStatus:'Nikah',religion:'Katholik',nameOfDept:'Business Development -GDN',chiefNik:'-',chiefName:'-',startWorkingDate:'8/1/09'}


                ],
            };
        },
        components: {TableEmp}
    }
</script>

<style lang="scss">
    .employee{
        margin:3% 10%;
        &__title{
            display: block;
            font-size: 1.5em;
            font-weight: bold;
        }
    }
    .emp-search{
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
            &-blue{
                background-color: #529fff;
                float:right;
                &:hover{
                    background-color: #4a8ae2;
                }
            }
        }
    }
    .emp-table{
        width: auto;
        border-collapse: collapse;
        font-size:13px;
        &__title{
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
        .emp-search{
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


</style>
