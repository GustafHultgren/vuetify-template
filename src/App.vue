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
html,
body {
  margin: 0;
  padding: 0;
  font-family: "Lato", sans-serif;
}
/* body {
  font-family: "Open Sans", sans-serif;
} */
</style>
