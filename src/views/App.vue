<template>
    <div>
        <router-link to='/'>home</router-link>
        <router-link to='/about'>about</router-link>
        <router-view />
    </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      name: 'xiaohei',
    }
  },
  created() {},
}
</script>

<style lang="scss" scoped>
</style>
