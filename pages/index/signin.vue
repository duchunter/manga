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
              <h3>Sign in to continue</h3>
              <p class="mb-20">Need a client account? <a href="/register" class="fade-location">Click Here</a></p>
              <div class="login-form-container">
                <form class="login-form" action="#" method="post" novalidate>
                  <div class="row">
                    <div class="column width-12">
                      <div class="field-wrapper">
                        <label class="color-charcoal">Username/Email:</label>
                        <input type="text" name="login[username]" class="form-username form-element rounded medium" placeholder="JohnDoe" required>
                      </div>
                    </div>
                    <div class="column width-12">
                      <div class="field-wrapper">
                        <label class="color-charcoal">Password:</label>
                        <input type="password" name="login[password]" class="form-password form-element rounded medium" placeholder="••••••••" required>
                      </div>
                    </div>
                    <div class="column width-12">
                      <div class="field-wrapper pt-0 pb-20">
                        <input id="checkbox-1" class="form-element checkbox rounded" name="login[checkbox-1]" type="checkbox" required>
                        <label for="checkbox-1" class="checkbox-label no-margins">Remember Me</label>
                      </div>
                    </div>
                    <div class="column width-12">
                      <input type="submit" value="Sign In" class="form-submit button rounded medium bkg-green bkg-hover-theme bkg-focus-green color-white color-hover-white mb-0">
                    </div>
                  </div>
                </form>
                <p class="text-small mt-20">I forgot my password - <a href="#">Remind me</a></p>
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
