<template>
  <div class='app container column'>
    <card :data='sizes' />
    <modal/>
  </div>
</template>

<script>
  import card from '~/components/card'
  import modal from '~/components/modal'
  import {
    mapState
  }
  from 'vuex'

  export default {
    name: 'app',
    components: {
      card,
      modal
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
    overflow: hidden;
    width: 100%;
  }
</style>
