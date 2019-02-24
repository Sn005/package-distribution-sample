<template lang="pug">
  div
    p(
      v-if="isEmpty"
    ) 文言を入力してください
    p
      input(
        v-model="title"
        type="text"
      )
    button(
      @click="handleClick"
    ) 追加する
</template>
<script>
export default {
  name: 'ToDoInput',
  data() {
    return{
      title: '',
      isEmpty: false
    }
  },
  methods: {
    handleClick(){
      this.isEmpty = false
      if(!this.title) {
        this.isEmpty = true
        return
      }
      this.$emit('add-item', this.title)
    }
  },
}
</script>
<style scoped lang='scss'>
</style>