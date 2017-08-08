<template>
    <section class="history">
        <div class="history__title">Leave History</div>
        <history-panel
                v-for="history in histories"
                :key="history.nik"
                :item="history">
        </history-panel>
    </section>
</template>

<script>
import HistoryPanel from '../helper/HistoryPanel.vue';

export default {
    data(){
        return {
            histories: [
                {nik: '001', name: 'Ariel', status: 'rejected'},
                {nik: '002', name: 'Bastian', status: 'rejected'},
                {nik: '000', name: 'Paduka Azhalia', status: 'approved'},
                {nik: '100', name: 'Kaisar Yogie', status: 'approved'}
            ]
        }
    },
    created: function () {
      this.histories = this.getHistories();
    },
    methods: {
        getHistories: function() {
          this.$http.get('http://localhost:8080/requests'+'/'+localStorage.getItem('nik'))
          .then(response => {
              this.histories = response.data;
          })
          .catch(function (error) {
            console.log(error);
          })
        },
    },
    components: { HistoryPanel },
};
</script>

<style lang="scss">
    .history {
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
