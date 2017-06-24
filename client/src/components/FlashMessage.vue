<template>
  <div class="container">
    <div
      v-if="flashMessage.show" 
      v-bind:class="`active alert alert-${flashMessage.type}`"
    >
      <p>
        <i
          v-if="flashMessage.message === 'Loading...'"
          class="fa fa-circle-o-notch fa-spin fa-fw"
        ></i>
        {{flashMessage.message}}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FlashMessage',
  computed: {
    ...mapGetters(['flashMessage']),
  },
}
</script>

<style lang="sass" scoped>
.container
  position: relative

</style>
