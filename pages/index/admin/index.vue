<template lang="html">
  <div class="content clearfix">
    <div class="section-block bkg-white pt-40">
      <div class="row">
        <div class="column width-12">
          <nuxt-link
            to="/admin/manga"
            class="button rounded medium bkg-green bkg-hover-theme bkg-focus-green color-white color-hover-white mb-0"
          >
            Manga List
          </nuxt-link>

          <nuxt-link
            to="/admin/user"
            class="button rounded medium bkg-green bkg-hover-theme bkg-focus-green color-white color-hover-white mb-0"
          >
            User List
          </nuxt-link>
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
</style>
