<template>
  <!-- Header -->
  <header class="header header-relative header-fixed-on-mobile nav-dark" data-bkg-threshold="100" data-sticky-threshold="0">
    <div class="header-inner">
      <div class="row nav-bar">
        <div class="column width-12 nav-bar-inner">
          <div class="logo">
            <div class="logo-inner">
              <nuxt-link tag="a" to="/"><img src="/img/logo/logo-blue.png" alt="Faulkner Logo" /></nuxt-link>
              <a href="/"><img src="/img/logo/logo.png" alt="Faulkner Logo" /></a>
            </div>
          </div>
          <nav class="navigation nav-block secondary-navigation nav-right">
            <ul>
              <li>
                <!-- Dropdown Login -->
                <div class="v-align-middle">
                  <div class="dropdown">
                    <a href="#" class="button small rounded no-page-fade no-margin-bottom"><span class="icon-lock left"></span>Sign In</a>
                    <div class="dropdown-list custom-content">
                      <h5>Access Your Account</h5>
                      <div class="login-form-container">
                        <form class="login-form" action="#" method="post" novalidate>
                          <div class="row">
                            <div class="column width-12">
                              <div class="field-wrapper">
                                <input type="text" name="login[email]" class="form-name form-element rounded small" placeholder="E-mail" tabindex="1" required>
                              </div>
                            </div>
                            <div class="column width-12">
                              <div class="field-wrapper">
                                <input type="password" name="login[password]" class="form-email form-element rounded small" placeholder="Password" tabindex="2" required>
                              </div>
                            </div>
                            <div class="column width-12">
                              <div class="row flex">
                                <div class="column width-6">
                                  <input type="submit" value="Sign In" class="form-submit button small rounded bkg-theme bkg-hover-theme color-white color-hover-white">
                                </div>
                                <div class="column width-6 v-align-middle right">
                                  <div>
                                    <a class="recuperate-password" href="">Password?</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                        <div class="form-response"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              
              <li>
                <!-- Button -->
                <div class="v-align-middle">
                  <nuxt-link
                    to="/signin"
                    class="buy-template button small rounded no-label-on-mobile no-margin-bottom fade-location">
                    Sign in
                  </nuxt-link>
                </div>
              </li>
              <li class="aux-navigation hide">
                <!-- Aux Navigation -->
                <a href="#" class="navigation-show side-nav-show nav-icon">
                  <span class="icon-menu"></span>
                </a>
              </li>
            </ul>
          </nav>
          <nav class="navigation nav-block primary-navigation nav-left sub-menu-indicator">
            <ul>
              <li>
                <el-input placeholder="Search" v-model="search"></el-input>
              </li>

              <nuxt-link tag="li" to="/" active-class="current" exact>
                <a>Popular</a>
              </nuxt-link>

              <li class="contains-mega-sub-menu">
                <a>Genre</a>
                <ul class="mega-sub-menu">
                  <li>
                    <a href="elements-column-structure.html">Grid Structure</a>
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
                    <a href="elements-lightbox.html">Media</a>
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
                    <a href="elements-lightbox.html">Media</a>
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

              <nuxt-link tag="li" to="/subscribed" active-class="current" exact>
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
  }
}
</script>

<style scoped>

</style>
