<template>
    <div>
        <div>
            Request List
            <input type="text" />
            <select>
                <option value="nik" selected>nik</option>
                <option value="name">name</option>
                <option value="department">department</option>
            </select>
        </div>
        <div>
            <approval-box
                    v-for="item in requests"
                    :key="item.nik"
                    :req="item">
            </approval-box>
        </div>
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

<style>

</style>