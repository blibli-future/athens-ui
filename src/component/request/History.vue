<template>
    <section class="request-history">
        <div class="history__title">Leave History</div>
        <panel></panel>
    </section>
</template>

<script>
import panel from './history/Panel.vue';

export default {
    components: { panel },
    name: 'request--history'
};
</script>

<style lang="scss">
    .request-history {
        &__title {
            color: rgb(51, 51, 51);
            font-size: 20px;
            font-weight: 500;
            line-height: 26.4px;
            margin-bottom: 10px;
        }

        &__container {
            margin-bottom: 20px;
            background-color: #fff;
            border: 1px solid #abd4f8;
            border-radius: 4px;
            -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
            box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
            height: 170px;
        }
    }
</style>