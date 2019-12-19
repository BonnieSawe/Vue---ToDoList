<template>
  <div class="todo-item" :class="{'is-complete':todo.completed}">
    <label class="form-group custom-checkbox" :for="id">
      <input
        class="form-control"
        type="checkbox"
        @change="markComplete"
        :id="id"
        :checked="todo.completed"
      />
      <p class="todo-text m-0">{{todo.title}}</p>
    </label>
    <button class="ml-auto btn btn-outline-danger btn-sm" @click="$emit('del-todo', todo.id)">Delete</button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo", "id"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;

      //simple trick to move this element to last position
      this.$emit("markComplete");
    }
  }
};
</script>

<style scoped>
/**

// TIP

the good thing about using bootstrap, is that it 
removes most of the need to write custom components

especially now that we're dealing with raw bootstrap,
we can create a really custom theme just by changing 
a couple of variables. this way, it's really easy to
maintain clean code but with a really simple and uniform
design

*/

/*
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}

.is-complete {
  text-decoration: line-through;
}

.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}

*/
</style>

