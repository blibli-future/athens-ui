<template>
    <div>
        <table>
            <thead>
            <tr>
                <td width="5px"></td>
                <td>NIK
                <td>Nama</td>
                <td>Tap In</td>
                <td>Tap Out</td>
                <td>Duration</td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><input type="checkbox"/></td>
                <td>NIK
                <td>Nama</td>
                <td>Tap In</td>
                <td>Tap Out</td>
                <td>Duration</td>
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

        }
    }
}</style>