<template>
    <div>
        <h3>Apply for absence request</h3>
        <form>
            <label for="criteria">Criteria</label>
            <select id="criteria">
                <option>Cuti istimewa</option>
                <option>Cuti tahunan</option>
                <option>Ijin sakit</option>
                <option>Sakit dengan surat dokter</option>
            </select>

            <label for="sub-criteria">Sub Criteria</label>
            <select id="sub-criteria">
                <option>Cuti istimewa</option>
                <option>Cuti tahunan</option>
                <option>Ijin sakit</option>
                <option>Sakit dengan surat dokter</option>
            </select>

            <label for="start-date">Start Date</label>
            <input id="start-date" type="date" />

            <label for="end-date">End Date</label>
            <input id="end-date" type="date" />

            <label for="reason">Reason :</label>
            <textarea id="reason"></textarea>

            <button>Apply</button>
        </form>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  }
}
</script>

<style>

</style>