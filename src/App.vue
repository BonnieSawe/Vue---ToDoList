<template>
  <div id="app">
    <Header />

    <!-- 
      // TIP 

      note addition of classes that belong to bootstrap in
      the markup in the component files/views. these classes
      take care of most of the design, and you won't need to 
      add much code. also, it keeps things neat and professional

      for instance, see this 'container' . this class centers content
      within a fixed-width element, keeping design simple, centered and 
      easier for the end user. it will resize accordingly depending on 
      the user's device size. that's a win for you.

    -->
    <div class="container mt-5">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/layout/Header";
export default {
  name: "app",
  components: {
    Header
  }
};
</script>


<style>
/*
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}*/
</style>
