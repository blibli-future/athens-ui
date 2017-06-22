<template>
    <main>
        <summaries></summaries>
        <apply></apply>
        <history></history>
    </main>
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

</style>