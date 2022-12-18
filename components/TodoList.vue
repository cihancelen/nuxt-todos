<template>
  <div class="flex justify-center items-center min-h-screen bg-[#cbd7e3]">
    <div class="h-auto bg-white rounded-lg p-4">
      <p class="text-xl font-semibold mt-2 text-[#063c76]">To-do List</p>

      <ul role="list" class="my-4">
        <li class="mt-4" id="1" v-for="(todo, index) in todos" :key="index">
          <div class="flex gap-2">
            <div
              class="w-9/12 h-12 bg-[#e0ebff] rounded-[7px] flex justify-start items-center px-3"
            >
              <span
                class="min-w-[30px] min-h-[30px] bg-white rounded-full border border-white transition-all cursor-pointer hover:border-[#36d344] flex justify-center items-center"
                :class="{
                  'bg-green-400	': todo.completed,
                  'border-green-500': todo.completed,
                }"
                @click="todo.completed = !todo.completed"
              ></span>

              <strike
                class="text-sm ml-4 text-[#5b7a9d] font-semibold"
                :class="{ 'no-underline': !todo.completed }"
              >
                {{ todo.title }}
              </strike>
            </div>

            <span
              class="w-1/4 h-12 bg-[#e0ebff] rounded-[7px] flex justify-center text-sm text-[#5b7a9d] font-semibold items-center text-center"
            >
              {{ todo.dateTime.toDateString() }}
              {{ todo.dateTime.toLocaleTimeString() }}
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ITodoItem } from '~/types/todo'

defineProps<{ todos: ITodoItem[] }>()
</script>
