<template>
  <div class="content-container">
    <Card
      v-for="card in cards"
      :key="card.title"
      :icone="card.icone"
      :title="card.title"
      :content="card.content"
    />
  </div>
</template>

<script setup>
import Card from "../../components/cards/Card.vue";
import img1 from "../../assets/carousel/browser.png";
import img2 from "../../assets/carousel/card_credit.png";
import img3 from "../../assets/carousel/start.png";
import img4 from "../../assets/carousel/content.png";

import { ref } from "vue";
const cards = ref([
  {
    icone: img1,
    title: "Landing page",
    content:
      "Transforme visitantes em clientes com uma landing page otimizada e aumente sua conversão!",
  },
  {
    icone: img2,
    title: "E-commerce",
    content:
      "Uma loja virtual bem estruturada aumenta suas vendas e oferece uma experiência incrível aos clientes.",
  },
  {
    icone: img3,
    title: "Pagina Start",
    content:
      "Ideal para quem precisa de um primeiro contato digital com clientes. Tenha seu site no ar sem complicação!",
  },
  {
    icone: img4,
    title: "Site Institutional",
    content:
      "A vitrine digital do seu negócio! Um site institucional transmite credibilidade e fortalece sua marca.",
  },
]);
</script>

<style scoped lang="scss">
.content-container {
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  margin: 20px 0 20px 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
}
</style>
