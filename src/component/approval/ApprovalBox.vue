<template>
    <div>
        <div>
            <div>
                <span>{{req.nik}}</span> - <span>{{req.name}}</span>
            </div>
            <div>
                Type
            </div>
            <div>
                <span>start</span> - <span>end</span>
            </div>
        </div>
        <div>
            <button>Decline</button>
            <button>Accept</button>
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

<style type="scss">

</style>