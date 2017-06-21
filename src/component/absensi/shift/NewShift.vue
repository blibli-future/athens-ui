<template>
    <div class="container">
        <h2>New Shift</h2>
        <form method="post">
            <div class="form--section">
                <label for="shiftName"> Shift Name  </label>:
                <input type="text" name="shiftName" id="shiftName">
            </div>
            <div class="form--section">
                <label for="startShift"> Shift Start  </label> :
                <input type="time" name="startShift" id="startShift">
            </div>
            <div class="form--section">
                <label for="endShift"> Shift End  </label>:
                <input type="time" name="endShift" id="endShift">
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
                <label for="location"> Location  </label>:
                <select type="text" name="location" id="location">
                    <option value="{{}}">Thamrin</option>
                    <option value="{{}}">Cawang</option>
                    <option value="{{}}">Tubun</option>
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