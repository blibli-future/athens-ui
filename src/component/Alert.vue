<template>
    <div v-if="isSuccess" class="alert alert--success ">
        <strong>Success</strong> Your data has been added
    </div>
    <div class="alert alert--danger" v-else >
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
    .alert{
        padding: 20px 10px;
        margin-bottom: 10px;
        border-radius: 6px;
        &--success{
            background-color: #ddf9d2;
            border: thin solid #c7edbd;
        }
        &--danger{
            background-color: #f9bdbd;
            border: thin solid #eea7aa;
        }


    }

</style>