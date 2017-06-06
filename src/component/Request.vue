<template>
    <div>
        <summaries></summaries>
        <apply></apply>
        <history></history>
    </div>
</template>

<script>
import Summaries from './request/Summary.vue';
import Apply from './request/Apply.vue';
import History from './request/History.vue';

export default {
  data() {
    return {};
  },
  components: { Apply, History, Summaries }
};
</script>

<style lang="scss">
    body {
        font-family:  Helvetica;
        padding : 0 10%;
        width: 100%;
    }

</style>