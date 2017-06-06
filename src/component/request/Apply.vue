<template>
    <div >
        <h3>Apply for absence request</h3>
        <form>
            <div class="col--md-3">
                <label for="criteria">Criteria</label>
                <select id="criteria" class="form--item">
                    <option>Cuti istimewa</option>
                    <option>Cuti tahunan</option>
                    <option>Ijin sakit</option>
                    <option>Sakit dengan surat dokter</option>
                </select>
            </div>
            <div class="col--md-3">
                <label for="sub-criteria">Sub Criteria</label>
                <select id="sub-criteria" class="form--item">
                    <option>Cuti istimewa</option>
                    <option>Cuti tahunan</option>
                    <option>Ijin sakit</option>
                    <option>Sakit dengan surat dokter</option>
                </select>
            </div>
            <div class="col--md-3">
                <label for="start-date">Start Date</label>
                <input id="start-date" type="date" class="form--item"/>
            </div>
            <div class="col--md-3">
                <label for="end-date">End Date</label>
                <input id="end-date" type="date"  class="form--item" />
            </div>
            <div class="col--md-12">
                <label for="reason">Reason :</label>
                <textarea id="reason" class="form--item" rows="6"></textarea>
            </div>
            <button class="button">Apply</button>
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
    textarea.form--item {
        height: auto;
    }
    .form--item{
        display: block;
        width: 100%;
        height: 30px;
        padding: 5px 10px;
        font-size: 14px;
        line-height: 1.5;
        color: #555;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075)

    }
    .col--md-3{
        width:24%;
        float: left;
        margin: 5px;


    }
    .col--md-12{
    width:99%;
    float: left;
    margin:5px;
    }
    .button{
        margin-left: 5px;
        display: inline-block;
        padding: 8px 12px;
        margin-bottom: 0;
        font-size: 14px;
        text-align: center;
        border: 1px solid transparent;
        border-radius: 4px;
        background-color: #b3dcff;
        cursor: pointer;
    }
    .button:hover{
        background-color: #92ccff;
    }
    input[type="date"]{
        font-family: Arial;
        overflow: hidden;
        padding: 5px;
    }
</style>