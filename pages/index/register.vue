<template lang="html">
  <div class="content clearfix">
    <div class="section-block hero-5 window-height left show-media-column-on-mobile">
      <div class="media-column width-6 bkg-grey-ultralight">
        <div
          class="window-height form-left"
          style="background-image: url('../img/form1.jpg');"
        />
      </div>
      <div class="row">
        <div class="column width-5 offset-7" v-loading="isLoading">
          <div class="hero-content split-hero-content">
            <div class="hero-content-inner left">
              <h3>Register an Account</h3>
              <p class="mb-20">
                Already have an account? <nuxt-link
                  to="/signin"
                  class="fade-location"
                >
                  Click Here
                </nuxt-link>
              </p>
              <div class="register-form-container">
                <form
                  class="register-form"
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
                          name="register[email]"
                          class="form-email form-element rounded medium"
                          placeholder="johndoe"
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
                          name="register[password]"
                          class="form-password form-element rounded medium"
                          placeholder="•••••••• (8 or more characters)"
                          required
                        >
                      </div>
                    </div>
                    <div class="column width-12 mt-10">
                      <input
                        value="Create Account"
                        class="form-submit button rounded medium bkg-green bkg-hover-theme bkg-focus-green color-white color-hover-white no-margins center"
                        @click="submit"
                      >
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
      isLoading: false,
      form: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    submit() {
      this.isLoading = true;
      this.signUp(this.form).then(() => {
        this.isLoading = false;
      });
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
