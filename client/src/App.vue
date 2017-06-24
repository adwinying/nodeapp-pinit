<template>
  <div id="app">
    <navbar></navbar>
    <flash-message></flash-message>
    <router-view></router-view>
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
</style>
