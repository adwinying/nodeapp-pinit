<template>
  <div class="container">
    <div class="row">
      <div v-masonry
        transition-duration="0.3s"
        item-selector=".item"
      >
        <div v-masonry-tile
          v-for="pin in pins"
          class="item col-xs-12 col-sm-4 col-md-3"
        >
          <div class="panel panel-default">
            <div class="panel-body">
              <img
                class="pin-img"
                :src="pin.imageURL"
                :alt="pin.title"
              >
              <h5 class="text-center">{{pin.title}}</h5>
            </div>
            <div class="panel-footer">
              <img
                class="profile-img"
                :src="pin.owner.profileImageURL"
                :alt="pin.owner.username"
              >
              <div class="panel-ctrl">
                <button class="btn btn-danger"
                  v-if="isLoggedIn && pin.owner._id === profile._id">
                  <i class="fa fa-trash"></i>
                </button>
                <button class="btn btn-primary">
                  <i class="fa fa-star"></i> {{pin.likeCount}}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div><!-- /.row -->
  </div><!-- /.container -->
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
}
</script>

<style lang="sass" scoped>
.pin-img
  width: 100%

.profile-img
  width: 36px
  height: auto

.panel-ctrl
  float: right
</style>
