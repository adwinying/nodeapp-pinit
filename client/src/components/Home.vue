<template>
  <div class="container">
    <pin-list v-bind:pins="allPins"></pin-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PinList from './PinList'

export default {
  name: 'Home',
  data() {
    return {

    }
  },
  computed: mapGetters(['allPins']),
  components: {
    PinList,
  },
}
</script>

<style lang="sass" scoped>
</style>
