<template>
  <v-app>
    <navbar />
    <v-content>
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
