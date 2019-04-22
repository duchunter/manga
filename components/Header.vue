<template>
  <!-- Header -->
  <header class="header header-relative header-fixed-on-mobile nav-dark" data-bkg-threshold="100" data-sticky-threshold="0">
    <div class="header-inner">
      <div class="row nav-bar">
        <div class="column width-12 nav-bar-inner">
          <div class="logo">
            <div class="logo-inner">
              <a href="/"><img src="/img/logo/logo-dark.png" alt="Faulkner Logo" /></a>
              <a href="/"><img src="/img/logo/logo.png" alt="Faulkner Logo" /></a>
            </div>
          </div>
          <nav class="navigation nav-block secondary-navigation nav-right">
            <ul>
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

              <li class="contains-sub-menu">
                <a href="index.html">Demos</a>
                <ul class="sub-menu">
                  <li>
                    <a href="homepage-consulting.html">Consulting</a>
                  </li>
                  <li>
                    <a href="homepage-crowdfunding.html">Crowdfunding <span class="label rounded bkg-theme color-white pull-right">New</span></a>
                  </li>
                </ul>
              </li>

              <li class="contains-sub-menu">
                <a href="about-style-one.html">Pages</a>
                <ul class="sub-menu">
                  <li class="contains-sub-menu">
                    <a href="about-style-one.html">About</a>
                    <ul class="sub-menu">
                      <li>
                        <a href="about-style-one.html">About Original</a>
                      </li>
                      <li>
                        <a href="about-style-two.html">About Style 2</a>
                      </li>
                      <li>
                        <a href="about-style-three.html">About Style 3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="maintenance.html">Maintenance</a>
                  </li>
                </ul>
              </li>

              <li class="contains-mega-sub-menu">
                <a href="elements-accordions.html">Elements</a>
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
                    <a href="elements-forms.html">Forms</a>
                    <ul>
                      <li>
                        <a href="elements-forms.html">Contact Forms</a>
                      </li>
                      <li>
                        <a href="elements-signup-forms.html">Subscribe Forms</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="elements-accordions.html">UI</a>
                    <ul>
                      <li>
                        <a href="elements-accordions.html">Accordions</a>
                      </li>
                      <li>
                        <a href="elements-buttons.html">Buttons</a>
                      </li>
                      <li>
                        <a href="elements-icons.html">Icons</a>
                      </li>
                      <li>
                        <a href="elements-modals.html">Modals</a>
                      </li>
                      <li>
                        <a href="elements-tabs.html">Tabs</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="elements-slider.html">Sliders</a>
                    <ul>
                      <li>
                        <a href="elements-slider.html">Full Width Slider</a>
                      </li>
                      <li>
                        <a href="elements-carousel-slider.html">Carousel Slider</a>
                      </li>
                      <li>
                        <a href="elements-logo-slider.html">Logo Slider</a>
                      </li>
                      <li>
                        <a href="elements-team-slider.html">Team Slider</a>
                      </li>
                      <li>
                        <a href="elements-testimonial-slider.html">Testimonial Slider</a>
                      </li>
                      <li>
                        <a href="elements-hero-slider.html">Hero Slider</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="elements-testimonials.html">Other Elements</a>
                    <ul>
                      <li>
                        <a href="elements-testimonials.html">Testimonials</a>
                      </li>
                      <li>
                        <a href="elements-boxes.html">Boxes</a>
                      </li>
                      <li>
                        <a href="elements-color-swatches.html">Color Swatches</a>
                      </li>
                      <li>
                        <a href="elements-feature-columns.html">Feature Columns</a>
                      </li>
                      <li>
                        <a href="elements-progress-bars.html">Progress Bars</a>
                      </li>
                      <li>
                        <a href="elements-pricing-tables.html">Pricing Tables</a>
                      </li>
                      <li>
                        <a href="elements-typography.html">Typography</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
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
