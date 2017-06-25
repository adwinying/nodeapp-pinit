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
  watch: {
    $route: 'updateUser',
  },
  mounted() {
    this.updateUser()
  },
  components: {
    PinList,
  },
  methods: {
    updateUser() {
      this.$store.commit('updateTargetUser', this.$route.params.userId)
    },
  },
}
</script>

<style lang="sass" scoped>
</style>
