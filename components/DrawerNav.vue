<template>
  <aside
    class="side-navigation-wrapper enter-right"
    data-no-scrollbar
    data-animation="push-in"
  >
    <div class="side-navigation-scroll-pane">
      <div class="side-navigation-inner">
        <div class="side-navigation-header">
          <div class="navigation-hide side-nav-hide">
            <a href="#">
              <span class="icon-cancel medium" />
            </a>
          </div>
        </div>
        <nav class="side-navigation nav-block">
          <div
            class="field-wrapper"
            style="padding: 20px 5%"
          >
            <input
              v-model="search"
              type="text"
              class="form-name form-element rounded medium"
              style="height: 40px; margin-bottom: 0"
              placeholder="Search"
              @keyup.enter="searchByName"
            >
          </div>

          <ul>
            <nuxt-link
              tag="li"
              to="/"
              active-class="current"
              exact
            >
              <a>Popular</a>
            </nuxt-link>

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

            <li>
              <a
                href="#"
                class="contains-sub-menu"
              >Genre</a>
              <ul class="sub-menu">
                <nuxt-link
                  v-for="item in genres"
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

            <hr>

            <nuxt-link
              v-if="!isLoggedIn"
              tag="li"
              to="/signin"
              active-class="current"
              exact
            >
              <a>Sign in</a>
            </nuxt-link>

            <nuxt-link
              v-if="!isLoggedIn"
              tag="li"
              to="/register"
              active-class="current"
              exact
            >
              <a>Sign up</a>
            </nuxt-link>

            <li>
              <a
                v-if="isLoggedIn"
                @click="signOut"
              >
                Sign out
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </aside>
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
    isAdmin() { return this.$store.state.isAdmin },
    genres() { return this.$store.state.genres },
  },

  methods: {
    searchByName() {
      if (process.client) {
        window.location = `/search?name=${this.search}`;
      }
    }
  }
}
</script>

<style scoped>

</style>
