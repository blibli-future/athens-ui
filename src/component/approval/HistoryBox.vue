<template>
    <div :class="'history history--'+item.status">
        <div>
            <div>
                <span>{{item.nik}}</span> - <span>{{item.name}}</span>
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
</template>

<script>
  export default {
    props: {
      item: {
        type: Object
      }
    },
    created: function () {
        if (this.item.status === 'rejected') {
          console.log('reject');
        } else {
          console.log('acc');
        }
    }
  }
</script>

<style lang="scss">
    @import "../../_scss/_color.scss";
    .history {
        display: flex;
        border-radius: 4px;
        margin: 10px 0px;
        padding: 5px;

        &--approved {
            background-color: transparentize($panel__blue,0.8);
            border: 1px solid transparentize($panel__blue,0.7);
            color: $panel__blue;
        }

        &--rejected {
            background-color: transparentize($panel__red,0.8);
            border: 1px solid transparentize($panel__red,0.7);
            color: $panel__red;
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