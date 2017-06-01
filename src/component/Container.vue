<template>
    <div id="container">
        <router-view></router-view>
    </div>
</template>

<script>

import Request from './request/Request.vue';

export default {
  data() {
    return {};
  },
  components: { Request }
};
</script>

<style>

</style>