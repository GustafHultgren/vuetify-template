<template>
  <v-container fluid class="pa-0">
    <div class="block"></div>
    <div class="img-wrapper">
      <img
        src="https://stripe.com/img/v3/home/app-illustrations/catawiki.svg"
        alt="hello"
      />
    </div>
    <div class="text">
      <h1>This is a Hero message!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia
        accusantium obcaecati eum necessitatibus aut veniam, provident
        repellendus rem, tempora sit! Magni incidunt accusantium perspiciatis
        eaque culpa modi impedit dolores!
      </p>
    </div>
    <div style="height: 300px"></div>
    <section class="pa-4 my-4">
      <h1 class="grey--text text--darken-3 text-center">Features</h1>
      <v-layout row justify-center wrap class="mt-4">
        <v-card
          v-for="feature in features"
          :key="feature.title"
          elevation="1"
          outlined
          width="360"
          class="pa-3 mx-5 text-center"
        >
          <v-layout column align-center>
            <v-avatar size="140" color="primary">
              <v-icon size="96" dark>{{ feature.icon }}</v-icon>
            </v-avatar>
            <h4 class="my-2">{{ feature.title }}</h4>
            <div class="body-2">{{ feature.body }}</div>
          </v-layout>
        </v-card>
      </v-layout>
    </section>
    <section
      class="white--text"
      :style="{ background: $vuetify.theme.themes['light'].primary }"
    >
      <v-container>
        <v-layout>
          <v-layout column>
            <div style="height: 170px"></div>
            <h1 class="mb-2">Our Mission</h1>
            <p style="max-width: 400px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              voluptatem distinctio rerum. Fugiat maiores ab eos mollitia nemo
              corporis consequuntur labore ipsam excepturi ipsa fugit provident,
              tenetur praesentium minus beatae?
            </p>
            <p style="max-width: 400px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              voluptatem distinctio rerum.
            </p>
          </v-layout>
          <v-layout
            column
            align-content-center
            justify-center
            style="min-height: 100%"
          >
            <!-- <v-avatar size="340" style="border-color: white; border-width: 2px; border-style: solid"> -->
            <v-img
              contain
              height="300"
              width="300"
              max-height="300"
              max-width="300"
              src="../assets/mission-image.svg"
            />
            <!-- </v-avatar> -->
          </v-layout>
        </v-layout>
      </v-container>
    </section>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    features: [
      { title: "Secure", body: "Feature body", icon: "mdi-fingerprint" },
      { title: "Feature 2", body: "Feature body", icon: "mdi-account-circle" },
      { title: "Feature 3", body: "Feature body", icon: "mdi-account-circle" }
    ]
  })
};
</script>

<style scoped>
.block {
  width: 100%;
  height: 760px;
  background: linear-gradient(150deg, #53f 15%, #05d5ff 70%, #a6ffcb 94%);
  transform: skewY(-12deg);
  transform-origin: 0;
  position: absolute;
  top: 0;
  background: #11998e; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #38ef7d,
    #11998e
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #38ef7d,
    #11998e
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.text {
  position: relative;
  height: 760px;
  display: flex;
  margin: -60px 0 0 150px;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  max-width: 1024px;
}
.text h1 {
  font-size: 40px;
  opacity: 0;
  animation: fadein 1s;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
}
.text p {
  color: #d9fcff;
  font-size: 20px;
  max-width: 50%;
  font-size: 17px;
  line-height: 28px;
  opacity: 0;
  animation: fadein 1s;
  animation-delay: 0.8s;
  animation-fill-mode: forwards;
}

.img-wrapper {
  position: absolute;
  opacity: 0;
  top: 400px;
  right: 100px;
  transform: translateY(100px) rotate(-12deg);
  background: #fff;
  padding: 8px 38px;
  border-radius: 24px;
  box-shadow: inset 0 4px 7px 1px #fff,
    inset 0 -5px 20px rgba(173, 186, 204, 0.25), 0 2px 6px rgba(0, 21, 64, 0.14),
    0 10px 20px rgba(0, 21, 64, 0.05);
  animation: up 1s;
  animation-delay: 0.6s;
  animation-fill-mode: forwards;
}
.img-wrapper img {
  width: 500px;
  height: auto;
}

@keyframes up {
  0% {
    transform: translateY(100px) rotate(-12deg);
    opacity: 0;
  }
  100% {
    transform: translateY(0) rotate(-12deg);
    opacity: 1;
  }
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media screen and (max-width: 830px) {
  .img-wrapper {
    display: none;
  }
}

@media screen and (max-height: 600px) {
  .text {
    margin: -200px 0 0 150px;
  }
  .block {
    height: 500px;
  }
  .img-wrapper {
    top: 280px;
  }
}
</style>
