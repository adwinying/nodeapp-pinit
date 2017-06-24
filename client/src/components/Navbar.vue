<template>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <router-link class="navbar-brand" to="/">
        <i class="fa fa-thumb-tack"></i> PinIt
      </router-link>
    </div>

    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li><a href="#">About</a></li>
        <li><a href="#">All Pins</a></li>
        <li><a href="#">My Pins</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li v-if="!isLoggedIn">
          <a href="/api/auth/login"><i class="fa fa-twitter"></i> Login</a>
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
            <li><a href="#">Logout</a></li>
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
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownActive = !this.isDropdownActive
    },
  },
}
</script>

<style lang="sass" scoped>
li > a.router-link-active
  color: #fff !important
  background-color: #006687 !important

.profile-thumb
  width: 24px
  height: auto
  margin-right: 10px
</style>
