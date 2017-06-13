<template>
    <div class="request-box">
        <div>
            <div>
                <span>{{req.nik}}</span> - <span>{{req.name}}</span>
            </div>
            <div>
                Type
            </div>
            <div>
                <span>start date</span> - <span>end date</span>
            </div>
        </div>
        <div class="button-container">
            <button class="button-container__accept">Accept</button>
            <button class="button-container__decline">Decline</button>
        </div>
    </div>
</template>

<script>
export default {
  data() {

  },
  props: {
    req: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
    .request-box {
        display: flex;
        border-radius: 4px;
        border: 1px solid deepskyblue;
        margin: 10px 0px;
        padding: 5px;
    }

    .button-container {
        margin-left: auto;
        margin-right: 1px;
        display: flex;
        flex-direction: column;

        button {
            margin: 5px 0px;
            border: 1px solid transparent;
            border-radius: 4px;
            cursor: pointer;
            color: white;
        }

        &__accept {
            background-color: rgb(40, 96, 144);
        }

        &__decline {
            background-color: rgb(201, 48, 44);
        }
    }
</style>