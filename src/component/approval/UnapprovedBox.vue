<template>
    <div class="unapproved">
        <div class="unapproved__header">
            <div class="unapproved__text-holder">
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
            <div class="unapproved__button-holder">
                <button class="unapproved__button unapproved__button--accept">Accept</button>
                <button class="unapproved__button unapproved__button--decline">Decline</button>
            </div>
        </div>
        <div class="unapproved__body">
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
    unapproved: {
      type: Object
    }
  },
  methods: {
      approving: function() {
        this.$http.put('http://localhost:8080/requests/'+this.unapproved.type+'/'+this.unapproved.id, {
            nik:localStorage.getItem('nik'),
            isApproved:true
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
      },
      rejecting: function() {
        this.$http.put('http://localhost:8080/requests/'+this.unapproved.type+'/'+this.unapproved.id, {
            nik:localStorage.getItem('nik'),
            isApproved:false
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
      }
  },
}
</script>

<style lang="scss">
    .unapproved {
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        border: 1px solid rgb(188, 232, 241);
        margin: 10px 0;

        &__header {
            padding: 5px;
            margin: 0;
            width: 100%;
            display: flex;
            background-color: #c1e5ff;
        }

        &__button-holder {
            margin-left: auto;
            margin-right: 1px;
            display: flex;
            flex-direction: column;
        }

        &__body {
            padding: 5px;
        }

        &__button {
            margin: 5px 0;
            border: 1px solid transparent;
            border-radius: 4px;
            cursor: pointer;
            color: white;

            &--accept {
                background-color: rgb(49, 112, 143);
            }

            &--decline {
                background-color: rgb(169, 68, 66);
            }
        }
    }
</style>
