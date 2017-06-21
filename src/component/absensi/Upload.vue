<template>
    <div class="container">
        <alerts></alerts>
        <br/>
        <h3>Upload Absensi</h3>
        <br/>
        <input type="file" name="uploadAbsensi" id="uploadAbsensi"/> <br/><br/>
        <button class="button" type="submit">Upload</button>
    </div>
</template>


<script>
    import Alerts from '../Alert.vue'
    export default {
        data() {
            return {

            };
        },

        components: {Alerts}


    }
</script>

<style lang="scss">
    .container{
        margin:0 15%;
    }
    .button{
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
