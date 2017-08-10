<template>
    <div class="new-emp">
        <h2 class="new-emp__title">New Employee</h2>
        <form onsubmit="return false">
            <div class="form__section">
                <label for="nik" class="form__label">NIK</label>
                <input type="text" v-model="nik" name="nik" id="nik" class="form__input"/>
            </div>
            <div class="form__section">
                <label for="fullName" class="form__label">Full Name</label>
                <input type="text" v-model="fullName" name="fullName" id="fullName" class="form__input"/>
            </div>
            <div class="form__section">
                <label for="gender" class="form__label"> Gender</label>
                <select name="gender" v-model="gender" id="gender" class="form__input">
                    <option value="MALE">Laki Laki</option>
                    <option value="FEMALE">Perempuan</option>
                </select>
            </div>
            <div class="form__section">
                <label for="position" class="form__label"> Position </label>
                <input type="text" v-model="position" name="position" id="position" class="form__input"/>
            </div>
            <div class="form__section">
                <label for="level" class="form__label"> Level </label>
                <input type="text" v-model="level" name="level" id="level" class="form__input"/>
            </div>
            <div class="form__section">
                <label for="organizationUnit" class="form__label"> Organization Unit </label>
                <input type="text" v-model="organizationalUnitText" name="organizationUnit" id="organizationUnit" class="form__input"/>
            </div>
            <div class="form__section">
                <label for="department" class="form__label"> Department</label>
                <select v-model="nameOfDept" name="department" id="department" class="form__input">
                    <option value="Business Development">Business Development </option>
                    <option value="Finance">Finance</option>
                    <option value="Human Resource">Human Resource </option>
                    <option value="Marketing">Marketing</option>
                    <option value="Operations">Operations </option>
                    <option value="Product Management">Product Management </option>
                    <option value="Program Management">Program Management </option>
                    <option value="Technology">Technology </option>
                    <option value="Trade Partnership">Trade Partnership</option>
                </select>
            </div>
            <div class="form__section">
                <label for="marital" class="form__label"> Marital Status</label>
                <select v-model="maritalStatus" name="marital" id="marital" class="form__input">
                    <option value="MENIKAH">Menikah</option>
                    <option value="LAJANG">Lajang</option>
                    <option value="JANDA">Janda</option>
                </select>
            </div>
            <div class="form__section">
                <label for="religion" class="form__label"> Religion</label>
                <select v-model="religion" name="religion" id="religion" class="form__input">
                    <option value="KRISTEN">Kristen</option>
                    <option value="KATHOLIK">Katholik</option>
                    <option value="ISLAM">Islam</option>
                    <option value="HINDU">Hindu</option>
                    <option value="BUDHA">Budha</option>
                </select>
            </div>
            <div class="form__section">
                <label for="chiefNik" class="form__label"> Chief Nik  </label>
                <input type="text" v-model="chiefNik" name="chiefNik" id="chiefNik" class="form__input"/>
            </div>
            <div class="form__section">
                <label for="startWorkingDate" class="form__label"> Start Working Date </label>
                <input type="date" v-model="startWorkingDate" name="startWorkingDate" id="startWorkingDate" class="form__input"/>
            </div>
            <button v-on:click="addEmployee">Save</button>
        </form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
              nik:"",
              fullName:"",
              gender:"MALE",
              position:"",
              level:"",
              organizationalUnitText:"",
              maritalStatus:"Menikah",
              religion:"Kristen",
              nameOfDept:"Business Development",
              chiefNik:"",
              startWorkingDate:""
            }
        },
        methods: {
            addEmployee: function() {
                this.$http.post('http://localhost:8080/employees', {
                    nik: this.nik,
                    fullName: this.fullName,
                    gender: this.gender,
                    position: this.position,
                    level: this.level,
                    organizationalUnitText: this.organizationalUnitText,
                    maritalStatus: this.maritalStatus,
                    religion: this.religion,
                    nameOfDept: this.nameOfDept,
                    chiefNik: this.chiefNik,
                    startWorkingDate: this.startWorkingDate
                }).then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
                  this.$router.push("/index");
            }
        }
    };
</script>
<style lang="scss">
    .new-emp{
        margin:3% 10%;
        &__title{
            display: block;
            font-size: 1.5em;
            font-weight: bold;
            margin: 10px 0;
        }
        .form{
           &__section{
                display: block;
                margin-bottom: 10px;
                width: 100%;
           }
            &__label{
                width: 15%;
                float: left;
            }
            &__input{
                width: 40%;
                border-radius: 5px;
                height:3em;
                line-height:1.5;
                border: 1px solid #ccc;
                padding: 10px 15px;
                font-size:14px;
                background-color: #fff;
            }
        }
    }

    button{
        display: inline-block;
        padding: 8px 12px;
        margin-bottom: 0;
        font-size: 14px;
        text-align: center;
        border: 1px solid transparent;
        border-radius: 4px;
        background-color: #b3dcff;
        cursor: pointer;
        &:hover{
            background-color: #92ccff;
        }
    }

</style>
