<template lang="pug">
  div.item
    p.title {{title}}
    button.button(
      type="button"
      @click="handleClick"
    ) x
</template>
<script>
export default {
  name: 'ToDoItem',
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  computed: {
    title() {
      return this.context.title
    },
    id() {
      return this.context.id
    }
  },
  methods: {
    handleClick() {
      this.$emit('delete-item', this.id)
    }
  },
}
</script>
<style scoped lang='scss'>
.item {
  display: flex;
  justify-content: center;
  height: 30px;
}
.title{
  margin: 0;
}
.button{
  flex: 0 0 30px;
  margin-left: auto;
}
</style>