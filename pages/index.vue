<template>
  <div class="shop">
    <DrawerNav />

    <div class="wrapper reveal-side-navigation">
      <div class="wrapper-inner">
        <Header />

        <nuxt-child />
      </div>
    </div>
  </div>
</template>

<script>
import DrawerNav from '~/components/DrawerNav'
import Header from '~/components/Header'

export default {
  scrollToTop: true,
  components: {
    DrawerNav,
    Header
  }
}
</script>

<style>

</style>
