<template>
  <div class="card">
    <div class="card-body">
      <!-- 

      // TIP
      Vue has shorthand directives for some v-** directives, not all

      e.g. v-bind:key.. -> :key=..
            v-on:del-todo -> @del-todo=..

      I believe this will come in handy in several other places
      -->
      <div :key="todo.id" v-for="(todo,i) in todos">
        <TodoItem
          :id="`${todo.id}-${todo.userId}`"
          :todo="todo"
          @markComplete="moveItem(i)"
          v-on:del-todo="$emit('del-todo', todo.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "Todos",
  components: {
    TodoItem
  },
  props: ["todos"],
  methods: {
    moveItem(i) {
      this.todos.push(this.todos.splice(i, 1)[0]);
    }
  },
  mounted() {
    this.todos.forEach((element, index) => {
      if (element.completed) {
        this.moveItem(index);
      }
    });
  }
};
</script>

<style scoped>
</style>

