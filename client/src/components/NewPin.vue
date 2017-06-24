<template>
  <transition name="overlay">
    <div class="pin-overlay-wrapper"
      v-if="overlayActive">
      <div class="container">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <div class="modal-close" v-on:click="toggleOverlay">
                <i class="fa fa-times"></i>
              </div>
              <h3>New Pin</h3>
              <img class="preview-img" :src="imageURL" alt="Preview" ref="previewImg" @error="handleErrImg">
              <form v-on:submit.prevent="">
                <div class="form-group">
                  <label class="control-label" for="title">Pin Title</label>
                  <input class="form-control" type="text" v-model="title">
                </div>
                <div class="form-group">
                  <label class="control-label" for="imageURL">Image URL</label>
                  <input class="form-control" type="text" v-model="imageURL">
                </div>
                <div class="form-group">
                  <button type="submit"
                    class="btn btn-primary"
                    @click.prevent="handleSubmit"
                    v-bind:class="(title === '' || imageURL === '') ? 'disabled' : ''">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PinOverlay',
  computed: mapGetters(['overlayActive', 'allPins']),
  data() {
    return {
      title: '',
      imageURL: '',
    }
  },
  watch: {
    allPins() {
      this.title = ''
      this.imageURL = ''
    },
  },
  methods: {
    toggleOverlay() {
      this.$store.commit('toggleOverlay')
    },
    handleErrImg() {
      this.$refs.previewImg.src = '/static/missing.gif'
    },
    handleSubmit() {
      if (this.title !== '' && this.imageURL !== '') {
        this.$store.dispatch('addPin', {
          title: this.title,
          imageURL: this.imageURL,
        })
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.overlay-enter-active,
.overlay-leave-active
  transition: opacity .4s

.overlay-enter,
.overlay-leave-to
  opacity: 0

.pin-overlay-wrapper
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  z-index: 90
  background-color: rgba(0, 0, 0, 0.7)

.modal-dialog
  position: relative
  margin: 50px auto

.modal-close
  cursor: hand
  cursor: pointer
  position: absolute
  right: 15px
  z-index: 101
  color: #000
  font-size: 20px

img
  max-width: 100%

.preview-img
  display: block
  padding-bottom: 30px
  max-height: 500px
  max-width: 100%
  width: auto
  margin: 0 auto
</style>
