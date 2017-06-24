<template>
  <div class="container">
    <pin-list v-bind:pins="targetUserPins"></pin-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PinList from './PinList'

export default {
  name: 'UserPins',
  computed: mapGetters(['targetUserPins']),
  data() {
    return {

    }
  },
  mounted() {
    this.$store.commit('updateTargetUser', this.$route.params.userId)
  },
  components: {
    PinList,
  },
}
</script>

<style lang="sass" scoped>
</style>
