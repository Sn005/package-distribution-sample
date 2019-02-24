<template lang="pug">
  ul
    li.list(
      v-for="item, i in length"
      :key="i"
    )
      slot(
        name="item"
        :i="i"
      ) default
</template>
<script>
export default {
  name: 'ToDoList',
  props: {
    length: {
      type: Number,
      required: true
    }
  }
}
</script>
<style scoped lang='scss'>
.list {
  list-style-type: none;
  margin-bottom: 16px;
  & + & {
    border-top: 1px solid #ccc;
    padding-top: 15px;
  }
}
</style>