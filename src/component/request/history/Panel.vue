<template>
    <div class="panel">
        <div class="panel__header">
            <h4 class="panel__title">
                <slot name="title">Panel Title</slot>
            </h4>
            <div class="panel__sub-title">
                <slot name="sub-title">Panel Sub Title</slot>
            </div>
        </div>
        <div class="panel__body">
            <slot name="body">
                Panel Body
            </slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .panel {
        margin-bottom: 20px;
        background-color: #fff;
        border: 1px solid #abd4f8;
        border-radius: 4px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
        height: 170px;

        &__header {
            padding: 1px 10px;
            border-radius: 5px 5px 0 0;
            background-color: #c1e5ff;
            color: #3d7fca;
        }

        &__title {
            margin: 5px;
        }

        &__sub-title {
            margin: 5px;
        }

        &__body {
            padding: 15px;
            overflow: scroll;
            height: 120px;
        }
    }

    /*.panels {*/
        /*margin-bottom: 20px;*/
        /*background-color: #fff;*/
        /*border: 1px solid #abd4f8;*/
        /*border-radius: 4px;*/
        /*-webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);*/
        /*box-shadow: 0 1px 1px rgba(0, 0, 0, .05);*/
        /*height: 170px;*/

    /*&--head{*/
         /*padding: 1px 18px;*/
         /*border-radius: 5px 5px 0 0;*/
         /*background-color: #c1e5ff;*/
         /*color: #3d7fca;*/
     /*}*/
    /*&--body{*/
         /*padding: 15px;*/
         /*overflow: scroll;*/
         /*height: 70px;*/
     /*}*/
    /*}*/
</style>