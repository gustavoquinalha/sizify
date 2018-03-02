<template lang="html">
  <div class="" v-show="config.newSize">
    <transition name="fade">
      <div class="modal container align-center">
        <div class="modal-block">
          <div class="modal-block--head container align-items-center justify-content-between">
            <div class="">
              New size
            </div>
            <div class="close" @click="config.newSize = false">
              <img src="~/assets/images/icons/x.svg" alt="" />
            </div>
          </div>
          <div class="modal-block--content container column align-center">

            <div class="paragraph">
              <p>You can add custom sizes.</p>
            </div>

            <div class="container align-items-center container-sizes">
              <div class="container flex-grow-1 align-items-center">
                <span>W</span>
                <input type="number" v-model="newCard.width" name="" value="" placeholder="Ex: 800">
              </div>

              <div class="margin-20">
                x
              </div>

              <div class="container flex-grow-1 align-items-center">
                <span>H</span>
                <input type="number" v-model="newCard.height" name="" value="" placeholder="Ex: 600">
              </div>
            </div>

            <div class="margin-top-10" style="width: 100%">
              <button type="button" name="button" class="btn btn-primary btn-full-width" :class="{ disable : newCard.width === '' || newCard.height === ''}" @click="addNewSize">Add new size</button>
            </div>

          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import {
    mapState
  }
  from 'vuex'

  export default {
    transition: {
      name: 'fade'
    },
    components: {},
    data() {
      return {
        newCard: {
          id: 10,
          category: 'default',
          name: 'Default',
          width: '',
          height: ''
        }
      }
    },
    methods: {
      addNewSize: function () {
        console.log(this.newCard);
        console.log(this.sizes)

        this.sizes.push({
          id: this.config.lastId++,
          category: this.newCard.category,
          name: this.newCard.name,
          width: this.newCard.width,
          height: this.newCard.height
        })
        //
        this.newCard.width = '',
        this.newCard.height = '',
        this.config.newSize = false
      }
    },
    computed: {
      ...mapState(['config', 'sizes'])
    }
  }
</script>

<style lang="scss" scoped>
  .container-sizes {
    width: 100%;
    input {
      max-width: 100%;
      width: 100%;
      height: 35px;
      text-align: center;
    }
  }

  .paragraph {
    text-align: left;
    width: 100%;
    margin-bottom: 10px;
    font-size: 14px;
  }

  span {
    font-weight: bold;
    margin-right: 5px;
    font-size: 14px;
  }
</style>
