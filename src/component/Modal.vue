<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <slot name="header">
                            default header
                        </slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body">
                            default body
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            &nbsp;
                            <button class="modal-button form__button" @click="$emit('close')">
                                Cancel
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<style lang="scss">
    .modal{
        &-mask {
            position: fixed;
            z-index: 9998;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .5);
            transition: opacity .3s ease;


        }
        &-wrapper {
            display: flex;
            align-content: center;
            vertical-align: middle;
        }
        &-container {
            flex-basis:30%;
            margin: 0px auto;
            padding: 20px 30px;
            background-color: #fff;
            border-radius: 2px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
            //transition: all .3s ease;
            //transition: all 5px;
            font-family: Helvetica, Arial, sans-serif;
        }
        &-header {
            margin-top: 0;
            color: #529fff;
            font-weight: bold;
        }
        &-body {
            margin: 20px 0;
        }
        &-footer{
            padding: 10px;
        }
        &-button {
            float: right;
        }
    }


    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter , .modal-leave-active {
        .modal-container{
        transform: scale(0.7);
    }

    }
</style>