<template>
    <section class="summary">
        <h3 class="summary__title">Employee's Summary</h3>
        <div class="summary__container">
            <div class="summary__status status">
                <h5 class="status__title">Annual leave right</h5>
                <div class="status__progress">
                    <div class="status__progress-bar status__progress-bar--blue" style="width: 50%">
                       50%
                    </div>
                </div>
            </div>
            <div class="summary__status">
                <h5 class="status__title">Substitution leave right</h5>
                <div class="status__progress">
                    <div class="status__progress-bar status__progress-bar--blue" style="width: 50%">
                        50%
                    </div>

                </div>
            </div>
            <div class="summary__status">
                <h5 class="status__title">Number of Late</h5>
                <div class="status__progress">
                    <div class="status__progress-bar status__progress-bar--red" style="width: 50%">
                        50%
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
}
</script>

<style lang="scss">
    .summary {
        &__container {
            display: flex;
            flex-wrap: wrap;
        }

        &__status {
            flex-grow: 1;
            margin: 0 1rem 1rem 1rem;
            min-width: 200px;
        }

        &__title {
            color: rgb(51, 51, 51);
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
            font-size: 20px;
            font-weight: 500;
            line-height: 26.4px;
            margin-bottom: 10px;
        }
    }

    .status {
        &__title {
            margin: 0 0 5px 0;
        }

        &__progress {
            height: 20px;
            background-color: #ececec;
            border-radius: 4px;
        }

        &__progress-bar {
            height: 20px;
            border-radius: 4px;
            overflow: hidden;
            text-align: center;
            color: white;

            &--blue {
                background-color: #3b96dc;
            }

            &--red {
                background-color: #ff6f6d;
            }
        }
    }

.progress {
    height: 20px;
    /*margin-bottom: 20px;*/
    background-color: #ececec;
    border-radius: 4px;
    overflow: hidden;
}
    .progress--bar{
        float: left;
        width: 0;
        height: 100%;
        font-size: 12px;
        line-height: 20px;
        color: #fff;
        text-align: center;
        box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);

        transition: width .5s ease;
        p{
            margin: 0;
            padding:0;
        }
    }

    .progress--bar-blue{
        background-color: #3b96dc;
    }
    .progress--bar-red{
        background-color: #ff6f6d;
    }
    .col--md-4{
        width:32%;
        float: left;
        margin: 5px;
    }
</style>