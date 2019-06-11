<template>
  <!-- Header -->
  <header
    class="header header-relative header-fixed-on-mobile nav-dark"
    data-bkg-threshold="100"
    data-sticky-threshold="0"
  >
    <div class="header-inner">
      <div class="row nav-bar">
        <div class="column width-12 nav-bar-inner">
          <div class="logo">
            <div class="logo-inner">
              <nuxt-link
                tag="a"
                to="/"
              >
                <img
                  src="/img/logo/logo-grey.png"
                  style="height: 9rem; transform: translateY(-1rem)"
                >
              </nuxt-link>
              <nuxt-link
                tag="a"
                to="/"
              >
                <img src="/img/logo/logo.png">
              </nuxt-link>
            </div>
          </div>
          <nav class="navigation nav-block secondary-navigation nav-right">
            <ul>
              <li>
                <!-- Button -->
                <div class="v-align-middle">
                  <nuxt-link
                    v-if="!isLoggedIn"
                    to="/signin"
                    class="button small rounded hide-on-mobile no-label-on-mobile no-margin-bottom fade-location"
                  >
                    Sign in
                  </nuxt-link>
                </div>
              </li>
              <li>
                <!-- Button -->
                <div class="v-align-middle">
                  <nuxt-link
                    v-if="!isLoggedIn"
                    to="/register"
                    class="button small rounded hide-on-mobile no-label-on-mobile no-margin-bottom fade-location"
                  >
                    Sign up
                  </nuxt-link>
                </div>
              </li>
              <li>
                <!-- Button -->
                <div class="v-align-middle">
                  <a
                    v-if="isLoggedIn"
                    class="button small rounded hide-on-mobile no-label-on-mobile no-margin-bottom fade-location"
                    @click="signOut"
                  >
                    Sign out
                  </a>
                </div>
              </li>
              <li class="aux-navigation hide">
                <!-- Aux Navigation -->
                <a
                  href="#"
                  class="navigation-show side-nav-show nav-icon"
                >
                  <span class="icon-menu" />
                </a>
              </li>
            </ul>
          </nav>
          <nav class="navigation nav-block primary-navigation nav-left sub-menu-indicator">
            <ul>
              <li>
                <el-input
                  v-model="search"
                  placeholder="Search"
                />
              </li>

              <nuxt-link
                tag="li"
                to="/"
                active-class="current"
                exact
              >
                <a>Popular</a>
              </nuxt-link>

              <li class="contains-mega-sub-menu">
                <a>Genre</a>
                <ul class="mega-sub-menu">
                  <li>
                    <ul>
                      <li>
                        <a href="elements-column-structure.html">Column Structure</a>
                      </li>
                      <li>
                        <a href="elements-animation.html">Column &amp; Element Animation</a>
                      </li>
                      <li>
                        <a href="elements-sticky-columns.html">Sticky Columns</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <a href="elements-lightbox.html">Lightbox</a>
                      </li>
                      <li>
                        <a href="elements-maps.html">Maps</a>
                      </li>
                      <li>
                        <a href="elements-rollovers.html">Rollovers</a>
                      </li>
                      <li>
                        <a href="elements-video.html">Video</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <a href="elements-lightbox.html">Lightbox</a>
                      </li>
                      <li>
                        <a href="elements-maps.html">Maps</a>
                      </li>
                      <li>
                        <a href="elements-rollovers.html">Rollovers</a>
                      </li>
                      <li>
                        <a href="elements-video.html">Video</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <nuxt-link
                v-if="isLoggedIn"
                tag="li"
                to="/subscribed"
                active-class="current"
                exact
              >
                <a>Subscribed</a>
              </nuxt-link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- Header End -->
</template>

<script>
export default {
  data() {
    return {
      search: ''
    }
  },

  computed: {
    isLoggedIn() { return this.$store.state.isLoggedIn },
    isAdmin() { return this.$store.state.isAdmin }
  },

  mounted() {
    if (process.client) {
      const token = window.localStorage.getItem('token');
      if (token) {
        this.$store.commit('SET_TOKEN', token);
        this.$store.commit('SET_LOGGED_IN', true);
        this.$store.commit('SET_ADMIN', true);
      } else {
        this.$store.commit('SET_TOKEN', '');
        this.$store.commit('SET_LOGGED_IN', false);
        this.$store.commit('SET_ADMIN', false);
      }
    }
  }
}
</script>

<style scoped>

</style>
