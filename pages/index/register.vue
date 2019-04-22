<template lang="html">
  <div class="content clearfix">
    <div class="section-block hero-5 window-height left show-media-column-on-mobile">
      <div class="media-column width-6 bkg-grey-ultralight">
        <div class="window-height form-left" style="background-image: url('../img/bg.jpg');">

        </div>
      </div>
      <div class="row">
        <div class="column width-5 offset-7">
          <div class="hero-content split-hero-content">
            <div class="hero-content-inner left">
              <h3>Register an Account</h3>
              <p class="mb-20">Already have an account? <a href="/signin" class="fade-location">Click Here</a></p>
              <div class="register-form-container">
                <form class="register-form" action="#" method="post" novalidate>
                  <div class="row merged-form-elements">
                    <div class="column width-6">
                      <div class="field-wrapper">
                        <label class="color-charcoal">First Name:</label>
                        <input type="text" name="register[firstname]" class="form-firstname form-element rounded medium" placeholder="John" required>
                      </div>
                    </div>
                    <div class="column width-6">
                      <div class="field-wrapper">
                        <label class="color-charcoal">Last Name:</label>
                        <input type="text" name="register[astname}" class="form-lastname form-element rounded medium" placeholder="Doe" required>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column width-12">
                      <div class="field-wrapper">
                        <label class="color-charcoal">Email:</label>
                        <input type="email" name="register[email]" class="form-email form-element rounded medium" placeholder="johndoe@gmail.com" required>
                      </div>
                    </div>
                    <div class="column width-12">
                      <div class="field-wrapper">
                        <label class="color-charcoal">Password:</label>
                        <input type="password" name="register[password]" class="form-password form-element rounded medium" placeholder="•••••••• (8 or more characters)" required>
                      </div>
                    </div>
                    <div class="column width-12 mt-10">
                      <input type="submit" value="Create Account" class="form-submit button rounded medium bkg-green bkg-hover-theme bkg-focus-green color-white color-hover-white no-margins">
                    </div>
                  </div>
                </form>
                <p class="text-small mt-20">By creating an account you agree to our terms - <a href="#">Read More</a></p>
                <div class="form-response show"></div>
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
}
</script>

<style lang="css" scoped>
  .form-left {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>
