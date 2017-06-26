<template>
    <div>
        <alerts></alerts>
        <br/>
        <h2>Upload Absensi</h2>
        <br/>
        <form class="form">
            <input class="form__section" type="file" name="uploadAbsensi" id="uploadAbsensi"/> <br/><br/>
            <button class="button" type="submit">Upload</button>
        </form>
    </div>
</template>


<script>
    import Alerts from '../Alert.vue'
    export default {

        data() {
            return {

            };
        },
        components: {Alerts},
    }
</script>

<style lang="scss">
    @import "../../_scss/style";
</style>
