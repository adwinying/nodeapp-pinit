<template>
  <div id="app">
    <navbar></navbar>
    <flash-message></flash-message>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import FlashMessage from './components/FlashMessage'

export default {
  name: 'app',
  created() {
    this.$store.dispatch('updateUser')
    this.$store.dispatch('fetchPins')
  },
  components: {
    Navbar,
    FlashMessage,
  },
}
</script>

<style lang="sass">
.fade-enter-active,
.fade-leave-active
  transition: opacity .2s

.fade-enter,
.fade-leave-to,
  opacity: 0
</style>
