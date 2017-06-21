<template>
    <div class="container">

        <br/>
        <h2>Shift</h2>
        <alerts></alerts>
        <br/>
        <button class="button" type="submit"><router-link to="/shift/add">Add New</router-link> </button>
        <br/><br/>
        <table>
            <thead>
                <tr>
                    <td>ID Shift</td>
                    <td>Name</td>
                    <td>Start Hour</td>
                    <td>End Hour</td>
                    <td>Department</td>
                    <td>Location</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{}}</td>
                    <td>{{}}</td>
                    <td>{{}}</td>
                    <td>{{}}</td>
                    <td>{{}}</td>
                    <td>{{}}</td>

                </tr>
            </tbody>
        </table>


    </div>
</template>


<script>
    import Alerts from '../../Alert.vue'

    export default {
        data() {
            return {

            };
        },

        components: {Alerts}


    }
</script>

<style lang="scss">
    .container{
        margin:0 15%;
    }
    table{
        width: 100%;
        border-collapse: collapse;
        thead{
            text-align: center;
            font-weight: bold;
        }
        tr{
            td{
                padding:5px ;
                border: solid thin #a1a1a1;

            }
        }
    }
    a{
        text-decoration: none;
    }
    .button{
        display: inline-block;
        padding: 8px 12px;
        margin-bottom: 0;
        font-size: 14px;
        text-align: center;
        border: 1px solid transparent;
        border-radius: 4px;
        background-color: #b3dcff;
        cursor: pointer;
        &:hover{
            background-color: #92ccff;
        }
    }

</style>
