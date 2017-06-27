<template>
    <tr>
        <td>{{item.nik}}</td>
        <td>{{item.fullname}}</td>
        <td>{{item.gender}}</td>
        <td>{{item.positionText}}</td>
        <td>{{item.organizationalUnitText}}</td>
        <td>{{item.maritalStatus}}</td>
        <td>{{item.religion}}</td>
        <td>{{item.nameOfDept}}</td>
        <td>{{item.chiefNik}}</td>
        <td>{{item.chiefName}}</td>
        <td>{{item.startWorkingDate}}</td>
    </tr>
</template>
<script>

    export default {
        props: {
            item: {
                type: Object
            }
        }
    };
</script>
<style lang="scss">
</style>