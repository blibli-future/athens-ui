<template>
    <div>
        <h3>Employee's Summary</h3>
        <div>
            <div class="col--md-4">
                <h5>Annual leave right</h5>
                <div class="progress_ ">
                    <div class="progress--bar progress--bar-blue" style="width: 50%">
                       <p>  50%</p>
                    </div>
                </div>
            </div>
            <div class="col--md-4">
                <h5>Substitution leave right</h5>
                <div class="progress_ ">
                    <div class="progress--bar progress--bar-blue" style="width: 50%">
                        50%
                    </div>

                </div>
            </div>
            <div class="col--md-4">
                <h5>Number of Late</h5>
                <div class="progress_ ">
                    <div class="progress--bar progress--bar-red" style="width: 50%">
                        50%
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  }
}
</script>

<style lang="scss">
.progress_{
    height: 20px;
    margin-bottom: 20px;
    background-color: #ececec;
    border-radius: 4px;
    overflow: hidden;
}
    .progress--bar{
        float: left;
        width: 0;
        height: 100%;
        font-size: 12px;
        line-height: 20px;
        color: #fff;
        text-align: center;
        box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);

        transition: width .5s ease;
        p{
            margin: 0;
            padding:0;
        }
    }

    .progress--bar-blue{
        background-color: #3b96dc;
    }
    .progress--bar-red{
        background-color: #ff6f6d;
    }
    .col--md-4{
        width:32%;
        float: left;
        margin: 5px;
    }
</style>