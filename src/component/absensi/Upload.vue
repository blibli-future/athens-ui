<template>
    <div class="upload">


        <h2 class="upload__title">Upload Absensi</h2>
        <br/>
        <br/>
        <form class="upload__form">
            <input class="upload__input" type="file" name="uploadAbsensi" id="uploadAbsensi"/> <br/><br/>
            <button v-on:click="submitFile"
                    class="upload__button" type="button">Upload</button>
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
        methods: {
            submitFile: function() {
                let formData = new FormData();
                let uploadedFile = document.getElementById('uploadAbsensi').files[0];

                formData.append('file', uploadedFile);
                this.$http.post('http://localhost:8080/employees/taps/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
            }
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
            border: none;

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
