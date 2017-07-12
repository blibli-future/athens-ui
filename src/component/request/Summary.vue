<template>
    <section class="summary">
        <h3 class="summary__title">Employee's Summary</h3>
        <div class="summary__container">
            <div class="summary__status summary__status--left">
                <h5 class="summary__sub-title">Annual leave right</h5>
                <div class="summary__progress">
                    <div class="summary__progress-bar summary__progress-bar--blue" style="width: 50%">
                       50%
                    </div>
                </div>
            </div>
            <div class="summary__status">
                <h5 class="summary__sub-title">Substitution leave right</h5>
                <div class="summary__progress">
                    <div class="summary__progress-bar summary__progress-bar--blue" style="width: 50%">
                        50%
                    </div>
                </div>
            </div>
            <div class="summary__status summary__status--right">
                <h5 class="summary__sub-title">Number of Late</h5>
                <div class="summary__progress">
                    <div class="summary__progress-bar summary__progress-bar--red" style="width: 50%">
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
    @import "../../_scss/_color.scss";
    .summary {
        &__container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        &__status {
            flex-grow: 1;
            min-width: 200px;

            &--left {
                margin-right: 1.5rem;
            }

            &--right {
                margin-left: 1.5rem;
            }
        }

        &__title {
            color: rgb(51, 51, 51);
            font-size: 20px;
            font-weight: 500;
            line-height: 26.4px;
            margin-bottom: 10px;
        }

        &__sub-title {
            margin: 0 0 5px 0;
        }

        &__progress {
            height: 20px;
            background-color: whitesmoke;
            border-radius: 4px;
        }

        &__progress-bar {
            height: 20px;
            border-radius: 4px;
            overflow: hidden;
            padding-top: 2px;
            text-align: center;
            color: white;

            &--blue {
                background-color:$progress__blue;
            }

            &--red {
                background-color: $progress__red;
            }
        }
    }
</style>