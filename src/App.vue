<template>
  <div id="app">
    <HeaderComponent />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <ContactSection />
    <Portifolio /> 
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/home/HeaderComponent.vue'
import HeroSection from '@/home/HeroSection.vue'
import ServicesSection from '@/home/ServicesSection.vue'
import ContactSection from '@/home/ContactSection.vue'
import FooterComponent from '@/home/Footer.vue'
import AboutSection from '@/home/AboutSection.vue'
import Portifolio from '@/home/portifolio/Portifolio.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    HeroSection,
    ServicesSection,
    AboutSection,
    ContactSection,
    FooterComponent,
    Portifolio
  }
}
</script>

<style>
/* Importar o CSS original aqui ou usar CSS modules */
@import './assets/main.scss';
</style>