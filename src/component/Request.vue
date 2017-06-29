<template>
    <main class="request">
        <summaries class="request__summaries"></summaries>
        <apply class="request__apply"></apply>
        <history class="request__history"></history>
    </main>
</template>

<script>
import Summaries from './request/Summary.vue';
import Apply from './request/Apply.vue';
import History from './request/History.vue';

export default {
  components: { Apply, History, Summaries }
};
</script>

<style lang="scss">
    .request {
        margin: 0 auto;
        width: 90%;
        max-width: 1000px;

        &__summaries, &__apply, &__history {
            margin: 1rem 0;
        }
    }

</style>