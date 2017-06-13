<template>
    <div class="container">
        <div class="title">Request List</div>
        <section class="search-area">
            <input class="search-area__input" type="text" />
            <select class="search-area__dropdown">
                <option value="nik" selected>nik</option>
                <option value="name">name</option>
                <option value="department">department</option>
            </select>
            <button type="submit" class="search-area__search">Search</button>
        </section>
        <section class="search-result">
            <approval-box
                    v-for="item in requests"
                    :key="item.nik"
                    :req="item">
            </approval-box>
        </section>
    </div>
</template>

<script>
import ApprovalBox from './approval/ApprovalBox.vue';

export default {
  data() {
    return {
      requests: [
        { nik: '001', name: 'Ariel' },
        { nik: '002', name: 'Bastian' },
        { nik: '000', name: 'Paduka Azhalia' },
        { nik: '100', name: 'Kaisar Yogie' }
      ]
    }
  },
  components: { ApprovalBox }
}
</script>

<style lang="scss">
    .container {
        margin: auto;
        width: 50%;
        background-color: white;
    }

    .search-area {
        display: flex;
        margin: 10px 0px;

        &__input, &__dropdown  {
            margin: 0px 5px;
            border-radius: 5px;
            border: 1px solid rgb(204, 204, 204);
            padding: 2px;
        }

        &__input {
            flex: 7;
        }

        &__dropdown {
            background-color: white;
            flex: 3;
        }

        &__search {
            flex: 1;
            border: 1px solid transparent;
            border-radius: 4px;
            background-color: #b3dcff;
            cursor: pointer;
            margin: 0px 5px;
        }
    }

    .title {
        color: rgb(51, 51, 51);
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 24px;
        font-weight: 500;
        line-height: 26.4px;
        margin-bottom: 10px;
        margin-top: 20px;
    }

</style>