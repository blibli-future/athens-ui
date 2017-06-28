<template>
    <tr>
        <td><input type="checkbox"/></td>
        <td>{{item.nik}}</td>
        <td>{{item.nama}}</td>
        <td>{{item.date}}</td>
        <td>{{item.tapin}}</td>
        <td>{{item.tapout}}</td>
        <td>{{item.duration}}</td>
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