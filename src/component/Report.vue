<template>
    <main class="report">
        <h2 class="report__title">Report</h2>
        <br/>
        <section>
            <form class="report__form-search">
                <label for="startMonth" class="report__label">Start Date</label>
                <input type="date" id="startMonth" name="startMonth"  min="2017-01-01" max="2018-01-01" class="report__input"/>

                <label for="endMonth" class="report__label">End Date</label>
                <input type="date" id="endMonth" name="endMonth"  min="2017-01" max="2018-01-01" class="report__input"/>

                <label for="filter" class="report__label" >Department</label>
                <select id="filter" class="report__input">
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
                <button class="report__button">Download</button>
            </form>
        </section>
        <section id="table">
            <table class="rep-table">
                <thead class="rep-table__title">
                <tr>
                    <td>NIK</td>
                    <td>Nama</td>
                    <td>Days Coming</td>
                    <td>Days Absence</td>
                    <td>Sick</td>
                    <td>Unpaid Leave</td>
                    <td>Yearly Leave</td>
                    <td>Leave Early</td>
                    <td>Late without Permission</td>
                    <td>Late with Permission</td>
                    <td>Hourly Leave</td>
                    <td>Replacement Leave</td>
                    <td>No-tap out days</td>
                    <td>Transport fee</td>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in reportData">
                    <td>{{item.nik}}</td>
                    <td>{{item.nama}}</td>
                    <td>{{item.daysComing}}</td>
                    <td>{{item.daysAbsence}}</td>
                    <td>{{item.sick}}</td>
                    <td>{{item.unpaidLeave}}</td>
                    <td>{{item.yearlyLeave}}</td>
                    <td>{{item.leaveEarly}}</td>
                    <td>{{item.late}}</td>
                    <td>{{item.latewithPermisson}}</td>
                    <td>{{item.hourlyLeave}}</td>
                    <td>{{item.replacementLeave}}</td>
                    <td>{{item.noTapOut}}</td>
                    <td>{{item.transportFee}}</td>
                </tr>

                </tbody>
            </table>
        </section>
        <br/>
    </main>
</template>
<script>

    export default {
        data() {
            return {
                reportData: [
                    { nik: '001', nama: 'Ariel' , daysComing: 5, daysAbsence:6, sick:1,unpaidLeave:"-" ,yearlyLeave:'-',leaveEarly:'-', leaveEarly:1,late:2,latewithPermisson:1,hourlyLeave:5,replacementLeave:9,noTapOut:2, transportFee:50000},
                    { nik: '002', nama: 'Ariela' , daysComing: 5, daysAbsence:6, sick:1,unpaidLeave:"-" ,yearlyLeave:'-',leaveEarly:'-', leaveEarly:1,late:2,latewithPermisson:1,hourlyLeave:5,replacementLeave:9,noTapOut:2, transportFee:50000},
                    { nik: '003', nama: 'Aimee' , daysComing: 5, daysAbsence:6, sick:1,unpaidLeave:"-" ,yearlyLeave:'-',leaveEarly:'-', leaveEarly:1,late:2,latewithPermisson:1,hourlyLeave:5,replacementLeave:9,noTapOut:2, transportFee:50000},
                    { nik: '004', nama: 'Ariela' , daysComing: 5, daysAbsence:6, sick:1,unpaidLeave:"-" ,yearlyLeave:'-',leaveEarly:'-', leaveEarly:1,late:2,latewithPermisson:1,hourlyLeave:5,replacementLeave:9,noTapOut:2, transportFee:50000},
                    { nik: '005', nama: 'Aeriel' , daysComing: 5, daysAbsence:6, sick:1,unpaidLeave:"-" ,yearlyLeave:'-',leaveEarly:'-', leaveEarly:1,late:2,latewithPermisson:1,hourlyLeave:5,replacementLeave:9,noTapOut:2, transportFee:50000},
                    { nik: '006', nama: 'Arie' , daysComing: 5, daysAbsence:6, sick:1,unpaidLeave:"-" ,yearlyLeave:'-',leaveEarly:'-', leaveEarly:1,late:2,latewithPermisson:1,hourlyLeave:5,replacementLeave:9,noTapOut:2, transportFee:50000},

                ]
            };
        },

    };
</script>
<style lang="scss">
    .report {
        $r: &;
        margin: 3% 5%;
        &__title {
            display: block;
            font-size: 1.5em;
            font-weight: bold;
        }
        &__button {
            display: inline-block;
            padding: 8px 12px;
            margin-bottom: 0;
            font-size: 14px;
            text-align: center;
            border: 1px solid transparent;
            border-radius: 4px;
            background-color: #b3dcff;
            color: black;
            cursor: pointer;
            text-decoration: none;
            &:hover {
                background-color: #92ccff;
            }
        }
        &__form-search {
            display: flex;
            ;
            flex-direction: row;
            align-content: center;
            justify-content: baseline;
            margin-bottom: 1rem ;
            #{$r}__label {
                flex: none;
                display: block;
                width: auto;
                margin: auto 10px;
                box-sizing: border-box;
            }
            #{$r}__input {
                flex: 1 1 auto;
                display: block;
                padding: 5px;
                background-color: white;
                border-radius: 5px;
                border: 1px solid #ccc;
            }
            #{$r}__button {
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
                color: black;
                &:hover {
                    background-color: #94c2ee;
                }
            }
        }
    }
    .rep-table{
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
            .report {
                $r:&;
                &__form-search {
                    flex-direction: column;
                    #{$r}__label {
                        margin: 5px 0;
                    }
                    #{$r}__button {
                        margin: 5px 0;
                    }
                }
                #table {
                    overflow-x: auto;
                }
            }
        }



</style>