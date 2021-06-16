<template>
  <div id="app">
    <v-app>
      <v-main class="app-wrapper">
        <div class="app-wrapper">
          <filters/>
          <hotels class="hotels"/>
        </div>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Hotels from "./components/Hotels";
export default {
  name: 'App',
  components: {
    Hotels,
    Filters: () => import("./components/filters/Filters")
  },
}
</script>

<style lang="scss">

@font-face {
  font-family: "KievitPro";
  src: local("KievitPro"),
  url(./assets/fonts/KievitPro-Regular_26328.ttf) format("truetype");
}


* {
  margin: 0;
  padding: 0;
}

.app-wrapper {
  display: flex;
}
</style>
