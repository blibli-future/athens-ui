<template>
    <div>
        <h2>Report</h2>

        <button class="button">Download</button><br/><br/><br/>
        <table>
            <thead>
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
            <tr>
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

            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        data() {
            return {};
        },
    };
</script>
<style lang="scss">
    .container{
        margin : 0 5%;
    }
    table{
        width: 100%;
        border-collapse: collapse;
        thead{
            text-align: center;
            font-weight: bold;
        }
        tr{
            td{
                padding:5px ;
                border: solid thin #a1a1a1;
                font-size:12px;
            }
        }
        }
    button{
        float: right;
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