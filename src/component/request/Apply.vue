<template>
    <section class="apply">
        <h3 class="apply__title">Apply for absence request</h3>
        <form class="apply__wrapper">
            <div class="apply__wrapper--criteria">
                <div class="apply__wrapper--main-criteria">
                    <label class="apply__label" for="criteria">Criteria</label>
                    <select class="apply__selector" id="criteria">
                        <option>Cuti istimewa</option>
                        <option>Cuti tahunan</option>
                        <option>Ijin sakit</option>
                        <option>Sakit dengan surat dokter</option>
                    </select>
                </div>
                <div class="apply__wrapper--sub-criteria">
                    <label class="apply__label" for="sub-criteria">Sub Criteria</label>
                    <select class="apply__selector" id="sub-criteria">
                        <option>Cuti istimewa</option>
                        <option>Cuti tahunan</option>
                        <option>Ijin sakit</option>
                        <option>Sakit dengan surat dokter</option>
                    </select>
                </div>
            </div>
            <div class="apply__wrapper--date">
                <div class="apply__wrapper--start-date">
                    <label class="apply__label" for="start-date">Start Date</label>
                    <input id="start-date" type="date"/>
                </div>
                <div class="apply__wrapper--end-date">
                    <label class="apply__label" for="end-date">End Date</label>
                    <input id="end-date" type="date"/>
                </div>
            </div>
            <div class="apply__wrapper apply__wrapper--reason">
                <label class="apply__label--reason" for="reason">Reason :</label>
                <textarea id="reason" class="apply__reason--input"></textarea>
            </div>
            <button class="apply__submit">Apply</button>
        </form>
    </section>
</template>

<script>
export default {
}
</script>

<style lang="scss">
    .apply {
        &__title {
            color: rgb(51, 51, 51);
            font-size: 20px;
            font-weight: 500;
            line-height: 26.4px;
            margin-bottom: 10px;
        }

        &__wrapper {
            display: block;
            margin: 1rem 0;

            &--criteria, &--date {
                display: inline-block;
                width: 48%;
            }

            &--main-criteria, &--sub-criteria {
                margin: 0.5rem 0;
                display: block;
            }

            &--start-date, &--end-date {
                margin: 0.5rem 0;
                display: block;
            }
        }

        &__label {
            width: 100px;
            display: inline-block;

            &--reason {
                display: block;
                margin: 0 0 5px 0;
            }
        }

        &__selector {
            display: inline-block;
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

        &__submit {
            padding: 8px 12px;
            font-size: 14px;
            text-align: center;
            border: 1px solid transparent;
            border-radius: 4px;
            background-color: #b3dcff;
            cursor: pointer;
        }

        &__reason--input {
            width: 100%;
        }
    }
</style>