<template>
  <div>
    <DrawerNav />

    <div class="wrapper reveal-side-navigation">
      <div class="wrapper-inner">
        <Header />

        <div class="content clearfix">

          <!-- 404 Section -->
          <div class="section-block replicable-content window-height">
            <div class="media-overlay bkg-charcoal opacity-03"></div>
            <div class="row flex v-align-middle">
              <div class="column width-8 offset-2 center">
                <h1 class="status-code-title status-code color-white">404</h1>
                <h3 class="title-large color-white mb-10">Content not found :v</h3>
                <ul class="lead list-unstyled mb-0">
                  <nuxt-link tag="li" to="/">
                    <a class="color-white color-hover-theme">
                      Home
                    </a>
                  </nuxt-link>
                </ul>
              </div>
            </div>
          </div>
          <!-- 404 Section End -->

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '~/components/Header'
  import DrawerNav from '~/components/DrawerNav'

  export default {
    components: {
      DrawerNav,
      Header
    },
    props: ['error']
  }
</script>

<style scoped>
</style>
