<template>
  <TodoList :todos="state.todos" />

  <!-- <h1 class="text-3xl font-bold underline">Hello world!</h1> -->
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import { todosSnap } from '~/api'
import { ITodoItem } from '~/types/todo'

const state = reactive({
  todos: [] as ITodoItem[],
  setTodos(todos: ITodoItem[]) {
    this.todos = todos
  },
})

onMounted(() => {
  console.log(`[IndexPage.OnMounted]`)

  todosSnap.then((result) => {
    state.setTodos(result.docs.map((o) => o.data() as ITodoItem))

    console.log(`[IndexPage.OnMounted]`, state.todos)
  })
})
</script>
