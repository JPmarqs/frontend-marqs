<template>
  <v-app>
    <v-container>
      <Header />
      <Banner />
      <Content />
      <CallToAction />
      <Form />
      <Portifolio />
      <Footer />
    </v-container>
  </v-app>
</template>

<script setup>
import Header from "./home/header/Header.vue";
import Banner from "./home/banner/Banner.vue";
import Content from "./home/content/Content.vue";
import Form from "./home/form/Form.vue";
import Portifolio from "./home/portifolio/Portifolio.vue";
import Footer from "./home/footer/Footer.vue";
import CallToAction from "./components/callToAction/Button.vue";
</script>

<style>
@import "./assets/main.scss";
</style>
