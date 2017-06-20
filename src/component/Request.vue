<template>
    <div>
            <div >
            <summaries></summaries>
            <apply></apply>
            <history></history>
        </div>
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
        width: 100%;
    }
    .container{
        margin : 0 10%;
    }

</style>