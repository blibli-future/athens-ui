<template>
    <div :class="'history history--'+history.status">
        <div>
            <div>
                <span>{{history.nik}}</span> - <span>{{history.fullName}}</span>
            </div>
            <div>
                {{history.type}}
            </div>
            <div>
                <span>{{history.startDate}}</span> - <span>{{history.endDate}}</span>
            </div>
        </div>
        <div class="history__status-holder">
            <div class="history__status">
                <strong :class="'history__status--'+history.status">{{history.status}}</strong> by someone
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      history: {
        type: Object
      }
    },
    created: function () {
        if (this.history.status === 'rejected') {
          console.log('reject');
        } else {
          console.log('acc');
        }
    }
  }
</script>

<style lang="scss">
    .history {
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
