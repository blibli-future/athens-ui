<template>
    <section class="history">
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
    @import "../../_scss/_color.scss";
    .history {
        &__title {
            color: rgb(51, 51, 51);
            font-size: 20px;
            font-weight: 500;
            line-height: 26.4px;
            margin-bottom: 10px;
        }
    }
</style>