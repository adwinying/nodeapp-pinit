<template>
  <div class="container">
    <pin-list v-bind:pins="activeUserPins"></pin-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PinList from './PinList'

export default {
  name: 'MyPins',
  computed: mapGetters(['activeUserPins']),
  data() {
    return {

    }
  },
  components: {
    PinList,
  },
}
</script>

<style lang="sass" scoped>
</style>
