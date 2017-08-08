<template>
    <section class="apply">
        <h3 class="apply__title">Apply for absence request</h3>
        <form class="apply__wrapper">
            <div class="apply__sub-wrapper apply__sub-wrapper--left">
                <div class="apply__input-wrapper">
                    <label class="apply__label" for="criteria">Criteria</label>
                    <select v-model="selectedCriteria"
                            class="apply__input apply__input--selector" id="criteria">
                        <option v-for="criterion in Object.keys(criteria)">{{criterion}}</option>
                    </select>
                </div>
                <div class="apply__input-wrapper">
                    <label class="apply__label" for="sub-criteria">Sub Criteria</label>
                    <select v-model="selectedSubCriterion"
                            class="apply__input apply__input--selector" id="sub-criteria">
                        <option v-for="subCriterion in criteria[selectedCriteria]" :value="subCriterion.id">{{subCriterion.name}}</option>
                    </select>
                </div>
            </div>
            <div class="apply__sub-wrapper apply__sub-wrapper--right">
                <div class="apply__input-wrapper">
                    <label class="apply__label" for="start-date">Start Date</label>
                    <input v-model="startDate"
                            class="apply__input" id="start-date" type="date"/>
                </div>
                <div class="apply__input-wrapper">
                    <label class="apply__label" for="end-date">End Date</label>
                    <input v-model="endDate"
                           class="apply__input" id="end-date" type="date"/>
                </div>
            </div>
            <div class="apply__sub-wrapper apply__sub-wrapper--full">
                <label class="apply__label--reason" for="reason">Reason :</label>
                <textarea v-model="reason"
                        id="reason" class="apply__input--full"></textarea>
            </div>
            <div class="apply__input-wrapper">
                <div class="apply__submit-helper"></div>
                <button v-bind:disabled="selectedCriteria === '---'"
                        v-on:click="submitRequest"
                        class="apply__submit">Apply</button>
            </div>
        </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            criteria: {
                '---': ['---'],
                'absence permit': [
                    {id:'HOURLY', name:'Hourly'},
                    {id:'SICK', name:'Sick'},
                    {id:'SICK_WITH_HOSPITAL_LETTER', name:'Sick with hospital letter'},
                    {id:'UNPAID_LEAVE', name:'Unpaid Leave'}
                ],
                'leave': [],
                'yearly': ['---'],
                'subtitution': ['---']
            },
            selectedCriteria: '---',
            selectedSubCriterion:'',
            startDate: '',
            endDate: '',
            reason: '',
            type: ' '
        }
    },
    created: function () {
       this.$http.get('http://localhost:8080/requests/'+localStorage.getItem('nik')+'/leave-right')
           .then((response) => {
               this.criteria['leave'] = response.data;
           })
           .catch((errors) => {
               console.log(errors)
           })
    },
    methods: {
        submitRequest: function () {
          console.log(this.selectedCriteria)
            if(this.selectedCriteria==='absence permit'){
                this.type = "absence";
            }
            else if (this.selectedCriteria==='leave') {
                this.type = "leave";
            }
            else if (this.selectedCriteria==='yearly') {
                this.type = "yearly";
            }
            else if (this.selectedCriteria==='subtitution') {
                this.type = "subtitution";
            }
            else{
              this.type = "notFound";
            }
            this.$http.post('http://localhost:8080/requests/'+localStorage.getItem('nik')+'/'+this.type, {
                'requestKey': this.selectedSubCriterion,
                'startDate': this.startDate,
                'endDate': this.endDate,
                'reason': this.reason
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((errors) => {
                console.log(errors)
            })
        }
    }
}
</script>

<style lang="scss">
    .apply {
        margin: 1rem 0;
        &__title {
            color: rgb(51, 51, 51);
            font-size: 20px;
            font-weight: 500;
            line-height: 26.4px;
        }

        &__wrapper {
            display: block;
        }

        &__sub-wrapper {
            margin-top: 5px;
            margin-bottom: 5px;
            display: inline-block;

            &--left {
                margin-right: 3%;
                width: 46%;
            }

            &--right {
                margin-left: 3%;
                width: 46%;
            }
            &--full {
                width: 100%;
            }
        }

        &__input-wrapper {
            margin: 0.5rem 0;
            display: flex;
        }

        &__label {
            width: 100px;
            padding-top: 5px;
            display: inline-block;

            &--reason {
                display: block;
                margin: 0 0 5px 0;
            }
        }

        &__input {
            flex-grow: 1;
            height: 30px;

            &--selector {
                font-size: 14px;
                color: #555;
                background-color: #fff;
                border: 1px solid #ccc;
                border-radius: 4px;
                -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
                box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
            }

            &--full {
                width: 100%;
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
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
        }

        &__submit {
            padding: 8px 12px;
            font-size: 14px;
            text-align: center;
            border: 1px solid transparent;
            border-radius: 4px;
            background-color: #b3dcff;
            cursor: pointer;

            &-helper {
                flex-grow: 1;
            }
        }
    }
</style>
