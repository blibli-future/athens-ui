<template>
    <div class="newShift">
        <h2 class="newShift__title">New Shift</h2>
        <form method="post" class="newShift__form">
            <div class="newShift__form__section">
                <label for="shiftName" class="newShift__form__section__label"> Shift Name</label>
                <input type="text" name="shiftName" id="shiftName" class="newShift__form__section__input">
            </div>
            <div class="newShift__form__section">
                <label for="startShift" class="newShift__form__section__label"> Shift Start</label>
                <input type="time" name="startShift" id="startShift" class="newShift__form__section__input">
            </div>
            <div class="newShift__form__section">
                <label for="endShift" class="newShift__form__section__label"> Shift End</label>
                <input type="time" name="endShift" id="endShift" class="newShift__form__section__input">
            </div>
            <div class="newShift__form__section">
                <label for="department" class="newShift__form__section__label"> Department</label>
                <select name="department" id="department" class="newShift__form__section__input">
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
            <div class="newShift__form__section">
                <label for="location" class="newShift__form__section__label"> Location</label>
                <select type="text" name="location" id="location" class="newShift__form__section__input">
                    <option value="{{}}">Thamrin</option>
                    <option value="{{}}">Cawang</option>
                    <option value="{{}}">Tubun</option>
                </select>
            </div>
            <button type="submit" class="newShift__btn">Save</button>
        </form>
    </div>


</template>
<script>

</script>
<style lang="scss">
    .newShift{
        margin:3% 15%;
        &__title{
            display: block;
            font-size: 1.5em;
            font-weight: bold;
        }
        &__form{
           margin:10px;
            width: 70%;

            &__section{

                display:flex;
                flex-direction: row;
                margin: 10px 0;
                &__label{
                    flex:0.2;
                }
                &__input{
                    border-radius: 5px;
                    border: 1px solid #ccc;
                    padding: 3px 15px;
                    height:2em;
                    box-sizing: border-box;
                    font-size:inherit;
                    flex:  1;
                    background-color: #ffffff;
                }
            }
        }
        &__btn{
            flex: none;
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

    }
    .form--section{
        display: block;
        margin-bottom: 10px;
        width: 100%;
        label{
            width: 10%;
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
            &[type=time]{
                width: 13%;

            }
        }
    }


</style>