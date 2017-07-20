<template>
    <div :class="'approval-history approval-history--'+item.status">
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
    .approval-history {
        display: flex;
        border-radius: 4px;
        margin: 10px 0px;
        padding: 5px;

        &--approved {
            background-color: rgb(217, 237, 247);
            border: 1px solid rgb(188, 232, 241);
            color: rgb(49, 112, 143);
        }

        &--rejected {
            background-color: rgb(242, 222, 222);
            border: 1px solid rgb(235, 204, 209);
            color: rgb(169, 68, 66);
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