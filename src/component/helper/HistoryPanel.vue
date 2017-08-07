<template>
    <div :class="'history history--'+item.status">
        <div :class="'history__header history__header--'+item.status">
            <div class="history__text_holder">
                <div>
                    {{item.nik}} - {{item.name}}
                </div>
                <div>
                    Type
                </div>
                <div>
                    <span>start date</span> - <span>end date</span>
                </div>
            </div>
            <div class="history__status-holder">
                <div class="history__status">
                    <strong :class="'history__status--'+item.status">{{item.status}}</strong> by someone
                </div>
            </div>
        </div>
        <div class="history__body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque ornare erat massa, nec laoreet lorem semper ut.
            Curabitur et arcu lectus. Mauris nec fringilla purus.
            Duis sit amet ligula ac neque pellentesque mattis.
            Donec sed malesuada dolor. Vivamus volutpat dapibus dapibus.
            Duis nec bibendum sapien. Aliquam eu ex sed urna suscipit sodales ut quis lorem.
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object
      }
    }
  }
</script>

<style lang="scss" scoped>
    .history {
        border-radius: 4px;
        margin: 10px 0;

        &--approved {
            border: 1px solid rgb(188, 232, 241);
        }

        &--rejected {
            border: 1px solid rgb(235, 204, 209);
        }

        &--waiting {
            border: 1px solid rgb(234, 234, 234);
        }

        &__header {
            display: flex;
            padding: 5px;

            &--approved {
                background-color: rgb(217, 237, 247);
                color: rgb(49, 112, 143);
            }

            &--rejected {
                background-color: rgb(242, 222, 222);
                color: rgb(169, 68, 66);
            }

            &--waiting {
                background-color: rgb(234, 234, 234);
                color: rgb(10, 10, 10);
            }
        }

        &__body {
            padding: 5px;
        }

        &__status-holder {
            margin-left: auto;
            margin-right: 1px;
            display: flex;
            flex-direction: column;
        }

        &__status {
            &--approved {
                color: blue;
            }

            &--rejected {
                color: red;
            }
        }

    }
</style>