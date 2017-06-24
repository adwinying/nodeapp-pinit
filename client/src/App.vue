<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'app',
  created() {
    this.$store.dispatch('updateUser')
    this.$store.dispatch('fetchPins')
  },
  components: {
    Navbar,
  },
}
</script>

<style lang="sass">
</style>
