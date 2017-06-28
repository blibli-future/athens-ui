<template>
    <div class="upload">


        <h2 class="upload__title">Upload Absensi</h2>
        <br/>
        <alerts></alerts>
        <br/>
        <form class="upload__form">
            <input class="upload__input" type="file" name="uploadAbsensi" id="uploadAbsensi"/> <br/><br/>
            <button class="upload__button" type="submit">Upload</button>
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
    .upload{
        margin: 3% 15%;
        &__title{
            display: block;
            font-size: 1.5em;
            font-weight: bold;
        }
        &__form{
            margin-bottom: 10px;
            width:100%;
        }
        &__input{
            border-radius: 5px;
            height: 2em;
            border: 1px solid #ccc;
            padding: 7px 15px;
            font-family:Arial;
            font-size:inherit;
            &[type=file]{
                border: none;
            }
        }
        &__button{
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
</style>
