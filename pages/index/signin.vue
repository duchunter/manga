<template lang="html">
  <div class="content clearfix">
    <div class="section-block hero-5 window-height left show-media-column-on-mobile">
      <div class="media-column width-6 bkg-grey-ultralight">
        <div
          class="window-height form-left"
          style="background-image: url('../img/form2.jpg');"
        />
      </div>
      <div class="row">
        <div class="column width-5 offset-7">
          <div class="hero-content split-hero-content">
            <div class="hero-content-inner left">
              <h3>Sign in to continue</h3>
              <p class="mb-20">
                Need a client account? <nuxt-link
                  to="/register"
                  class="fade-location"
                >
                  Click Here
                </nuxt-link>
              </p>
              <div class="login-form-container">
                <form
                  class="login-form"
                  action="#"
                  method="post"
                  novalidate
                >
                  <div class="row">
                    <div class="column width-12">
                      <div class="field-wrapper">
                        <label class="color-charcoal">Username:</label>
                        <input
                          v-model="form.username"
                          type="text"
                          name="login[username]"
                          class="form-username form-element rounded medium"
                          placeholder="John Doe"
                          required
                        >
                      </div>
                    </div>
                    <div class="column width-12">
                      <div class="field-wrapper">
                        <label class="color-charcoal">Password:</label>
                        <input
                          v-model="form.password"
                          type="password"
                          name="login[password]"
                          class="form-password form-element rounded medium"
                          placeholder="••••••••"
                          required
                        >
                      </div>
                    </div>
                    <div class="column width-12">
                      <a
                        class="button rounded medium bkg-green bkg-hover-theme bkg-focus-green color-white color-hover-white mb-0"
                        @click="submit"
                      >
                        Sign in
                      </a>
                    </div>
                  </div>
                </form>
                <div class="form-response show" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    submit() {
      this.signIn(this.form);
    }
  }
}
</script>

<style lang="css" scoped>
  .form-left {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>
