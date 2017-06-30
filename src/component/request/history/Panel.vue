<template>
    <div class="panel">
        <div class="panel__header">
            <h4 class="panel__title">Cuti Tahunan</h4>
            <div class="panel__date">16 Maret 2017 - 18 Maret 2017</div>
        </div>
        <div class="panel__body">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
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

        &__date {
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