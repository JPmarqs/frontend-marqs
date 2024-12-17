
<template>
  <Header/> 
  <Banner/>
  <div class="call-to-action" @click="openWhatsapp">
    <p>Traga seu projeto para a MARQS Solutions </p> 
    <i class="pi pi-arrow-right" style="font-size: 1.5rem"></i> 
  </div>
  <Content/>
</template>
  
<script setup>
  import Header from './home/header/Header.vue'
  import Banner from './home/banner/Banner.vue'
  import Content from './home/content/Content.vue'

  const openWhatsapp = () => {
    window.open('https://api.whatsapp.com/send?phone=5562998626461&text=Olá%20%2C%20minha%20mensagem%20de%20teste%20do%20WhatsApp%20da%20MARQS%20Solutions%21', '_blank');
  }

</script>

<style> 
  @import './assets/main.scss';
  .call-to-action {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3pc;
    width: 100%;
    background-color: #19065c;
    color: white;
    > p {
      margin-right: 10px;
      font-size: 1.25rem;
      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }
</style>