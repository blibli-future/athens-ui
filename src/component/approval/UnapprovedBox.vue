<template>
    <div class="unapproved">
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
        <div class="unapproved__button-holder">
            <button class="unapproved__button unapproved__button--accept">Accept</button>
            <button class="unapproved__button unapproved__button--decline">Decline</button>
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