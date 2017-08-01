<template>
    <div class="unapproved">
        <div>
            <div>
                <span>{{unapproved.nik}}</span> - <span>{{unapproved.fullName}}</span>
            </div>
            <div>
                {{unapproved.type}}
            </div>
            <div>
                <span>{{unapproved.startDate}}</span> - <span>{{unapproved.endDate}}</span>
            </div>
        </div>
        <div class="unapproved__button-holder">
            <button class="unapproved__button unapproved__button--accept" v-on:click="approving">Accept</button>
            <button class="unapproved__button unapproved__button--decline" v-on:click="rejecting">Decline</button>
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
        border-radius: 4px;
        border: 1px solid rgb(188, 232, 241);
        margin: 10px 0px;
        padding: 5px;

        &__button-holder {
            margin-left: auto;
            margin-right: 1px;
            display: flex;
            flex-direction: column;
        }

        &__button {
            margin: 5px 0px;
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
