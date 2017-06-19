<template>
    <div>

        <form>
            <input type="text" name="search" id="search" placeholder="search">

            <label for="searchBy">Search By</label>
            <select id="searchBy" class="form--section">
                <option>Nama</option>
                <option>NIK</option>
            </select>

            <label for="filter">Filter</label>
            <select id="filter" class="form--section">
                <option>All Department</option>
                <option value="{{}}">Business Development </option>
                <option value="{{}}">Finance</option>
                <option value="{{}}">Human Resource </option>
                <option value="{{}}">Marketing</option>
                <option value="{{}}">Operations </option>
                <option value="{{}}">Product Management </option>
                <option value="{{}}">Program Management </option>
                <option value="{{}}">Technology </option>
                <option value="{{}}">Trade Partnership</option>
            </select>
            <button class="button">Apply</button>
        </form>
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
    form{
        margin-bottom: 10px;
        width:100%;

    label{
        width: 10%;
        margin: 0 6px;

    }
    input , select{
        width:21%;
        border-radius: 5px;
        line-height:1.5;
        height: 2em;
        border: 1px solid #ccc;
        padding: 7px 15px;
        font-family:Arial;
        font-size:inherit;
        &[type=text]{
            width: 35%;
        }
    }
    }
    button{
        margin: 3px 5px;
        display: inline-block;
        padding: 8px 12px;
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