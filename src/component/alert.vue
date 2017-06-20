<template>
    <div v-if="isSuccess" class="alert-- alert--success ">
        <strong>Success</strong> Your data has been added
    </div>
    <div class="alert-- alert--danger" v-else >
        <strong>Error</strong> Something wrong happen
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isSuccess: true
            };
        },
    }
</script>

<style lang="scss">
    .alert--{
        padding: 20px 10px;
        margin-bottom: 10px;
        border-radius: 6px;
        border: thin solid #d1d1d1;


        &success{
            background-color: #ddf9d2;
        }
        &danger{
            background-color: #f9bdbd;
        }


    }

</style>