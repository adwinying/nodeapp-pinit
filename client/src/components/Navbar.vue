<template>
<nav class="navbar navbar-inverse">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed"
        @click.prevent="toggleMobile">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <router-link class="navbar-brand" to="/">
        <i class="fa fa-thumb-tack"></i> PinIt
      </router-link>
    </div>

    <div class="navbar-collapse"
      v-bind:class="{ active: mobileToggle }">
      <ul class="nav navbar-nav">
        <li><router-link to="/about">About</router-link></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li v-if="!isLoggedIn">
          <a href="/api/auth/login"><i class="fa fa-twitter"></i> Login</a>
        </li>
        <li v-if="isLoggedIn">
          <a href="#" v-on:click.prevent="toggleOverlay">New Pin</a>
        </li>
        <li v-if="isLoggedIn">
          <router-link :to="`/user/${profile._id}`">My Pins</router-link>
        </li>
        <li v-if="isLoggedIn" class="dropdown" v-bind:class="{ open: isDropdownActive }">
          <a href="#"
            class="dropdown-toggle"
            v-on:click.prevent="toggleDropdown"
          >
            <img
              :src="profile.profileImageURL"
              :alt="profile.username"
              class="profile-thumb"
            >{{profile.displayName}} <span class="caret"></span>
          </a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="#" @click.prevent="handleLogout">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  computed: mapGetters(['isLoggedIn', 'profile']),
  data() {
    return {
      isDropdownActive: false,
      mobileToggle: false,
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownActive = !this.isDropdownActive
    },
    toggleOverlay() {
      this.$store.commit('toggleOverlay')
    },
    toggleMobile() {
      this.mobileToggle = !this.mobileToggle
    },
    handleLogout() {
      this.$store.dispatch('logoutUser')
    },
  },
}
</script>

<style lang="sass" scoped>
li > a.router-link-exact-active
  color: #fff !important
  background-color: #006687 !important

.profile-thumb
  width: 21px
  height: auto
  margin-right: 10px

@media screen and (max-width: 767px)
  .navbar-collapse
    overflow-y: hidden
    max-height: 0
    transition: all .5s cubic-bezier(0, 1, 0.5, 1)

  .navbar-collapse.active
    display: block
    max-height: 220px
</style>
