<template lang="html">
  <div class="content clearfix">
    <div class="section-block">
      <div class="row">
        <div class="column width-12 center">
          <h1 class="weight-semi-bold">
            Chapter name
          </h1>

          <img v-for="index in 10" :key="index" src="~/static/img/portrait.jpg" alt="">
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
