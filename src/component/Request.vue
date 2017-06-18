    <template>
    <div>
        <nav-bar></nav-bar>
            <div class="container-">

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
import NavBar from './NavBar.vue';

export default {
  data() {
    return {};
  },
  components: { NavBar, Apply, History, Summaries }
};
</script>

<style lang="scss">
    body {
        font-family:  Helvetica;
        width: 100%;
    }
    .container-{
        margin : 0 10%;
    }

</style>