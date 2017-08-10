<template>
    <div class="newShift">
        <h2 class="newShift__title">New Shift</h2>
        <form method="post" class="newShift__form">
            <div class="newShift__section">
                <label for="shiftName" class="newShift__label"> Shift Name</label>
                <input v-model="name"
                        type="text" name="shiftName" id="shiftName" class="newShift__input">
            </div>
            <div class="newShift__section">
                <label for="startHour" class="newShift__label"> Start Hour</label>
                <input v-model="startHour"
                       type="time" name="startShift" id="startHour" class="newShift__input">
            </div>
            <div class="newShift__section">
                <label for="endHour" class="newShift__label"> End Hour</label>
                <input v-model="endHour"
                        type="time" name="endDayShift" id="endHour" class="newShift__input">
            </div>
            <div class="newShift__section">
                <label for="startDay" class="newShift__label">Work Day</label>
                <select v-model="workDay"
                        name="endShift" id="startDay" class="newShift__input">
                    <option v-for="day in this.dayOfWeek" :value="day.value">
                        {{day.name}}
                    </option>
                </select>
            </div>
            <div class="newShift__section">
                <label for="department" class="newShift__label"> Department</label>
                <select v-model="department"
                        name="department" id="department" class="newShift__input">
                    //todo: apply department enum after merge
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
            <div class="newShift__section">
                <label for="location" class="newShift__label"> Location</label>
                <select v-model="location"
                        name="location" id="location" class="newShift__input">
                    <option value="Thamrin">Thamrin</option>
                    <option value="Cawang">Cawang</option>
                    <option value="Tubun">Tubun</option>
                </select>
            </div>
            <button v-on:click="postNewShift"
                    type="button" class="newShift__btn">Save</button>
        </form>
    </div>


</template>
<script>
import DayOfWeek from '../../../constant/DayOfWeek';

export default {
    data(){
        return {
            dayOfWeek: DayOfWeek,
            name: '',
            startHour: '',
            endHour: '',
            workDay: 1,
            department: '',
            location: ''
        }
    },
    methods: {
        postNewShift: function () {

            console.log(this.endHour);
            this.$http.post("http://localhost:8080/shifts", {
                "name": this.name,
                "startHour": this.startHour,
                "endHour": this.endHour,
                "workDay": this.workDay,
                "department": this.department,
                "location": this.location
            })
                .then((response) => {
//                    this.$routes.push('/shift');
                })
        }
    }
}
</script>
<style lang="scss">
    .newShift{
        margin:3% 15%;
        &__title{
            display: block;
            font-size: 1.5em;
            font-weight: bold;
        }
        &__form {
            margin: 10px;
            width: 70%;
        }
        &__section {

            display: flex;
            flex-direction: row;
            margin: 10px 0;
        }
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