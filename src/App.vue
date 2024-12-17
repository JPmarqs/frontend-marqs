
<template>
  <Header/> 
  <Banner/>
  <CallToAction/>
  <Content/>
</template>
  
<script setup>
  import Header from './home/header/Header.vue'
  import Banner from './home/banner/Banner.vue'
  import Content from './home/content/Content.vue'
  import CallToAction from './components/callToAction/Button.vue'
</script>

<style> 
  @import './assets/main.scss';
</style>