<template lang="pug">
  div#app
    to-do(
      :list="list"
    )
</template>

<script>
import ToDo from '@/components/ToDo.vue'

const list = [
  {
    title: 'hoge',
  },
  {
    title: 'fuga',
  }
]
export default {
  name: 'app',
  data() {
    return {
      list: list
    }
  },
  components: {
    ToDo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
