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
    @import "../_scss/_color.scss";
    .alert{
        padding: 20px 10px;
        margin-bottom: 10px;
        border-radius: 6px;
        &--success{
            background-color: $alert__green;
            border: thin solid transparentize($alert__green,0.2);
        }
        &--danger{
            background-color: $alert__red;
            border: thin solid transparentize($alert__red,0.2)
        }


    }

</style>