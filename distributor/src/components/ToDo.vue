<template lang="pug">
  div todo
    to-do-list(
      :length="listLength"
    )
      to-do-item(
        slot="item"
        slot-scope="{ i }"
        :context="{...mutableList[i], id: i}"
        @delete-item="onDeleteItem"
      )
    to-do-input(
      @add-item="onAddItem"
    )
</template>
<script>
import ToDoList from '@/components/ToDoList.vue'
import ToDoItem from '@/components/ToDoItem.vue'
import ToDoInput from '@/components/ToDoInput.vue'
export default {
  name: 'ToDo',
  components: {
    ToDoList,
    ToDoItem,
    ToDoInput
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      mutableList: this.list
    }
  },
  computed: {
    listLength() {
      return this.mutableList.length
    }
  },
  methods: {
    onDeleteItem(id){
      this.mutableList = this.mutableList.filter((v, i) => i !== id)
    },
    onAddItem(item){
      this.mutableList =  [
        ...this.mutableList,
        {
          id: this.listLength,
          title: item
        }
      ]
    }
  },
}
</script>
<style scoped lang="scss"></style>
