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
    @import "../../_scss/_color.scss";
    .unapproved {
        display: flex;
        border-radius: 4px;
        border: 1px solid transparentize($panel__blue,0.5);
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
                background-color: $button__blue;
                &:hover{
                    background-color: $button__blue-hover;
                }
            }

            &--decline {
                background-color: $button__red;
                &:hover{
                    background-color: $button__red-hover;
                }
            }
        }
    }
</style>