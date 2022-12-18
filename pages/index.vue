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
    state.setTodos(
      result.docs.map((o) => {
        const todo = o.data() as ITodoItem

        return {
          ...todo,
          dateTime: new Date(
            (todo.dateTime as unknown as { seconds: number }).seconds * 1000
          ),
        }
      })
    )

    console.log(`[IndexPage.OnMounted]`, state.todos)
  })
})
</script>
