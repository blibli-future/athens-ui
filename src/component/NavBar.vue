<template>
    <nav>
        <div>
            <ul>
                <li>
                    <span>Absensi</span>
                    <ul>
                        <li>Upload</li>
                        <li>Shift</li>
                        <li>Presensi</li>
                        <li>Employee List</li>
                    </ul>
                </li>
                <li><router-link to="/request">Request</router-link></li>
                <li><router-link to="/approval">Approval</router-link></li>
                <li>Report</li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  data() {
    return {};
  }
}
</script>

<style lang="scss">

</style>