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
                <div class="field-wrapper">
                  <input
                    v-model="search"
                    type="text"
                    class="form-name form-element rounded medium"
                    style="height: 40px; margin-bottom: 0"
                    placeholder="Search"
                    @keyup.enter="searchByName"
                  >
                </div>
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
                  <li
                    v-for="(list, index) in dividedGenre"
                    :key="index"
                  >
                    <ul>
                      <nuxt-link
                        v-for="item in list"
                        :key="item"
                        tag="li"
                        :to="`/search?genre=${item}`"
                        active-class="current"
                        exact
                      >
                        <a>{{ item }}</a>
                      </nuxt-link>
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

              <nuxt-link
                v-if="isLoggedIn && isAdmin"
                tag="li"
                to="/admin"
                active-class="current"
                exact
              >
                <a>Admin</a>
              </nuxt-link>

              <nuxt-link
                v-if="isLoggedIn"
                tag="li"
                to="/account"
                active-class="current"
                exact
              >
                <a>Account</a>
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
      search: '',
    }
  },

  computed: {
    isLoggedIn() { return this.$store.state.isLoggedIn },
    isAdmin() { return this.$store.state.isAdmin },
    genres() { return this.$store.state.genres },
    dividedGenre() {
      const list = [...this.genres];
      const length = list.length / 3;
      const list1 = list.splice(0, length);
      const list2 = list.splice(0, length);
      return [ list1, list2, list ];
    }
  },

  mounted() {
    this.getAllGenres();
    if (process.client) {
      const token = window.localStorage.getItem('token');
      if (token) {
        this.getUserInfo(token).then(data => {
          if (data) {
            this.$store.commit('SET_TOKEN', token);
            this.$store.commit('SET_LOGGED_IN', true);
            this.$store.commit('SET_ADMIN', data.isAdmin);
            this.$store.commit('SET_USER', data.user_name);
          } else {
            window.localStorage.removeItem('token');
            this.$router.push('/signin');
            this.$store.commit('SET_TOKEN', '');
            this.$store.commit('SET_LOGGED_IN', false);
            this.$store.commit('SET_ADMIN', false);
            this.$store.commit('SET_USER', '');
          }
        });
      } else {
        this.$store.commit('SET_TOKEN', '');
        this.$store.commit('SET_LOGGED_IN', false);
        this.$store.commit('SET_ADMIN', false);
        this.$store.commit('SET_USER', '');
      }
    }
  },

  methods: {
    searchByName() {
      const to = `/search?name=${this.search}`;
      this.$router.push(to);
    }
  }
}
</script>

<style scoped>

</style>
