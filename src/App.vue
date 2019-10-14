<template>
  <v-app>
    <navbar />
    <v-content class="white">
      <Home />
    </v-content>
  </v-app>
</template>

<script>
import Home from "./views/Home";
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Home,
    Navbar
  },
  data: () => ({
    //
  })
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lato:400,700&display=swap");

html,
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Lato", sans-serif;
}
</style>
