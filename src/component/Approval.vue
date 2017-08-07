<template>
    <main class="approval">
        <div class="approval__title">Request List</div>
        <section class="search-area">
            <input class="search-area__input" type="text" placeholder="search"/>
            <select class="search-area__drop-down">
                <option value="nik" selected>nik</option>
                <option value="name">name</option>
                <option value="department">department</option>
            </select>
            <button type="submit" class="search-area__button">Search</button>
        </section>
        <section>
            <div class="approval__sub-title">Unapproved Request</div>
            <unapproved-box
                    v-for="item in unapproved"
                    :key="item.nik"
                    :item="item">
            </unapproved-box>
        </section>
        <section>
            <div class="approval__sub-title">Request History</div>
            <history-panel
                    v-for="item in history"
                    :key="item.nik"
                    :item="item">
            </history-panel>
        </section>
    </main>
</template>

<script>
import UnapprovedBox from './approval/UnapprovedBox.vue';
import HistoryPanel from './helper/HistoryPanel.vue';

export default {
  data() {
    return {
      unapproved: [
        { nik: '001', name: 'Ariel' },
        { nik: '002', name: 'Bastian' },
        { nik: '000', name: 'Paduka Azhalia' },
        { nik: '100', name: 'Kaisar Yogie' }
      ],
      history: [
        { nik: '001', name: 'Ariel', status: 'rejected' },
        { nik: '002', name: 'Bastian', status: 'rejected' },
        { nik: '000', name: 'Paduka Azhalia', status: 'approved' },
        { nik: '100', name: 'Kaisar Yogie', status: 'approved'  }
      ]
    }
  },
  components: { UnapprovedBox, HistoryPanel }
}
</script>

<style lang="scss">
    .approval {
        margin: 0 auto;
        width: 90%;
        max-width: 1000px;

        &__title {
            color: rgb(51, 51, 51);
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
            font-size: 24px;
            font-weight: 500;
            line-height: 26.4px;
            margin-bottom: 10px;
            margin-top: 20px;
        }

        &__sub-title {
            color: rgb(51, 51, 51);
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
            font-size: 20px;
            font-weight: 500;
            line-height: 26.4px;
            margin-bottom: 10px;
            margin-top: 20px;
        }
    }

    .search-area {
        display: flex;
        margin: 10px 0;

        &__input, &__drop-down  {
            margin: 0 5px;
            border-radius: 5px;
            border: 1px solid rgb(204, 204, 204);
            padding: 2px;
        }

        &__input {
            flex: 7;
        }

        &__drop-down {
            background-color: white;
            flex: 3;
        }

        &__button {
            flex: 1;
            border: 1px solid transparent;
            border-radius: 4px;
            background-color: #b3dcff;
            cursor: pointer;
            margin: 0 5px;
        }
    }

</style>