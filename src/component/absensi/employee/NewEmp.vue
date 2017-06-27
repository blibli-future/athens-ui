<template>
    <div class="new-emp">
        <h2 class="new-emp__title">New Employee</h2>
        <form method="post">
            <div class="form__section">
                <label for="nik" class="form__label">NIK</label>
                <input type="text" name="nik" id="nik" class="form__input"/>
            </div>
            <div class="form__section">
                <label for="fullName"class="form__label">Full Name</label>
                <input type="text" name="fullName" id="fullName" class="form__input"/>
            </div>
            <div class="form__section">
                <label for="gender" class="form__label"> Gender</label>
                <select name="gender" id="gender" class="form__input">
                    <option value="{{}}">Laki Laki </option>
                    <option value="{{}}">Perempuan</option>
                </select>
            </div>
            <div class="form__section">
                <label for="position" class="form__label"> Position </label>
                <input type="text " name="position" id="position" class="form__input"/>
            </div>
            <div class="form__section">
                <label for="organizationUnit" class="form__label"> Organization Unit </label>
                <input type="text " name="organizationUnit" id="organizationUnit" class="form__input"/>
            </div>
            <div class="form__section">
                <label for="department" class="form__label"> Department</label>
                <select name="department" id="department" class="form__input">
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
            <div class="form__section">
                <label for="marital" class="form__label"> Marital Status</label>
                <select type="text" name="marital" id="marital" class="form__input">
                    <option value="{{}}">Menikah</option>
                    <option value="{{}}">Lajang</option>
                    <option value="{{}}">Janda</option>
                </select>
            </div>
            <div class="form__section">
                <label for="religion" class="form__label"> Religion</label>
                <select type="text" name="religion" id="religion" class="form__input">
                    <option value="{{}}">Kristen</option>
                    <option value="{{}}">Katholik</option>
                    <option value="{{}}">Islam</option>
                    <option value="{{}}">Hindu</option>
                    <option value="{{}}">Budha</option>
                </select>
            </div>
            <div class="form__section">
                <label for="marital" class="form__label"> Chief Nik  </label>
                <select type="text" name="chiefNik" id="chiefNik" class="form__input">
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
                height:30px;
                line-height:1.5;
                border: 1px solid #ccc;
                padding: 10px 15px;
                font-family:Arial;
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