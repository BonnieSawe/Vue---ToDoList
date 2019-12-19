<template>
  <div class="mb-5">
    <form @submit.prevent="addTodo">
      <div class="form-group">
        <input
          type="text"
          class="form-control form-control-lg"
          v-model="title"
          name="title"
          placeholder="Add Todo..."
        />
      </div>
      <!-- 

      // TIP

      for the button/input, we can disable it if there is no input, to avoid adding empty todos
      instead of complicated validation, we'll use a computed property called isNull, which checks
      the `title` value and returns true if it is empty
      
      -->
      <input :disabled="isNull" type="submit" value="Submit" class="btn btn-primary btn-block" />
    </form>
  </div>
</template>

<script>
// import uuid from 'uuid';
export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  computed: {
    isNull() {
      return this.title === "";
    }
  },
  methods: {
    addTodo() {
      const newTodo = {
        title: this.title,
        completed: false
      };
      // Send up to parent
      this.$emit("add-todo", newTodo);

      this.title = "";
    }
  }
};
</script>

<style scoped>
/*
  form {
    display: flex;
  }

  input[type="text"] {
    flex: 10;
    padding: 5px;
  }

  input[type="submit"] {
    flex: 2;
  }

  */
</style>


