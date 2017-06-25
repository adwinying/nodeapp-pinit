<template>
  <div class="row">
    <div v-if="pins.length === 0">
      <p><i>No Pins Found</i></p>
    </div>
    <div v-masonry
      transition-duration="0.3s"
      item-selector=".item"
    >
      <div v-masonry-tile
        v-for="(pin, index) in pins"
        class="item col-xs-12 col-sm-4 col-md-3"
      >
        <div class="panel panel-default">
          <div class="panel-body">
            <img
              class="pin-img"
              ref="pinImg"
              :src="pin.imageURL"
              :alt="pin.title"
              @error="handleErrImg(index)"
            >
            <h5 class="text-center">{{pin.title}}</h5>
          </div>
          <div class="panel-footer">
            <router-link :to="`/user/${pin.owner._id}`">
              <img
                class="profile-img"
                :src="pin.owner.profileImageURL"
                :alt="pin.owner.username"
              >
            </router-link>
            <div class="panel-ctrl">
              <button class="btn btn-danger"
                v-if="isLoggedIn && pin.owner._id === profile._id"
                @click.prevent="handleDelete(pin)"
              >
                <i class="fa fa-trash"></i>
              </button>
              <button class="btn btn-primary">
                <i class="fa fa-star"></i> {{pin.likeCount}}
              </button>
            </div><!-- /.panel-ctrl -->
          </div><!-- /.panel-footer -->
        </div><!-- /.panel -->
      </div><!-- /.item -->
    </div>
  </div><!-- /.row -->
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PinList',
  props: ['pins'],
  computed: mapGetters(['profile', 'isLoggedIn']),
  data() {
    return {

    }
  },
  methods: {
    handleErrImg(index) {
      this.$refs.pinImg[index].src = '/static/missing.gif'
    },
    handleDelete(pin) {
      this.$store.dispatch('deletePin', pin._id)
    },
  },
}
</script>

<style lang="sass" scoped>
.pin-img
  display: block
  max-width: 100%
  margin: 0 auto
  border: #ccc solid 1px

.profile-img
  width: 36px
  height: auto

.panel-ctrl
  float: right
</style>
