<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
.layout-enter-active, .layout-leave-active {
  transition: opacity .5s
}
.layout-enter, .layout-leave-active {
  opacity: 0
}
.page-enter-active, .page-leave-active {
  transition: opacity .5s
}
.page-enter, .page-leave-active {
  opacity: 0
}

textarea {
  min-height: 20px;
}
</style>
