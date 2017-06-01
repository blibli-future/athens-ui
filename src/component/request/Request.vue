<template>
    <div>
        <summaries></summaries>
        <apply></apply>
        <history></history>
    </div>
</template>

<script>
import Summaries from './Summary.vue';
import Apply from './Apply.vue';
import History from './History.vue';

export default {
  data() {
    return {};
  },
  components: { Apply, History, Summaries }
};
</script>

<style>

</style>