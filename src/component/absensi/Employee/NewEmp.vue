<template>
    <div class="container">
        <h2>New Employee</h2>
        <form method="post">
            <div class="form--section">
                <label for="nik"> NIK  </label>:
                <input type="text" name="nik" id="nik"/>
            </div>
            <div class="form--section">
                <label for="fullName"> Full Name </label>:
                <input type="text" name="fullName" id="fullName"/>
            </div>
            <div class="form--section">
                <label for="gender"> Gender  </label> :
                <select name="gender" id="gender" >
                    <option value="{{}}">Laki Laki </option>
                    <option value="{{}}">Perempuan</option>
                </select>
            </div>
            <div class="form--section">
                <label for="position"> Position </label>:
                <input type="text " name="position" id="position"/>
            </div>
            <div class="form--section">
                <label for="organizationUnit"> Organization Unit </label>:
                <input type="text " name="organizationUnit" id="organizationUnit"/>
            </div>
            <div class="form--section">
                <label for="department"> Department</label>:
                <select name="department" id="department" >
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

            </div>
            <div class="form--section">
                <label for="marital"> Marital Status  </label>:
                <select type="text" name="marital" id="marital">
                    <option value="{{}}">Menikah</option>
                    <option value="{{}}">Lajang</option>
                    <option value="{{}}">Janda</option>
                </select>
            </div>
            <div class="form--section">
                <label for="religion"> Religion  </label>:
                <select type="text" name="religion" id="religion">
                    <option value="{{}}">Kristen</option>
                    <option value="{{}}">Katholik</option>
                    <option value="{{}}">Islam</option>
                    <option value="{{}}">Hindu</option>
                    <option value="{{}}">Budha</option>
                </select>
            </div>
            <div class="form--section">
                <label for="marital"> Chief Nik  </label>:
                <select type="text" name="chiefNik" id="chiefNik">
                    <option value="{{}}">{{}}</option>
                    <option value="{{}}">{{}}</option>
                    <option value="{{}}">{{}}</option>
                </select>
            </div>
            <button type="submit">Save</button>
        </form>
    </div>


</template>
<script>

</script>
<style lang="scss">
    .container{
        margin:0 15%;
    }
    .form--section{
        display: block;
        margin-bottom: 10px;
        width: 100%;
        label{
            width: 15%;
            float: left;
        }
        input , select{
            width: 40%;
            border-radius: 5px;
            height:30px;
            line-height:1.5;
            border: 1px solid #ccc;
            padding: 10px 15px;
            font-family:Arial;
            font-size:14px;
            background-color: #fff;
            &[type=time]{
                width: 13%;

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