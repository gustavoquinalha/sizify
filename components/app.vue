<template>
  <div class="app container column">
    <card :data="sizes" />
    <modalQR/>
    <modalAdd/>
  </div>
</template>

<script>
  import card from '~/components/card'
  import modalQR from '~/components/modal-qr'
  import modalAdd from '~/components/modal-add'

  import {
    mapState
  }
  from 'vuex'

  export default {
    name: 'app',
    components: {
      card,
      modalQR,
      modalAdd
    },
    data() {
      return {

      }
    },
    computed: {
      ...mapState(['sizes'])
    }
  }
</script>

<style lang='scss' scoped>
  .app {
    background: #FAFBFC;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, .5);
    overflow: hidden;
    width: 100%;
  }
</style>
