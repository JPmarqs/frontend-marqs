<template>
  <div class="portifolio-content">
    <h1 class="title-portifolio">Portifólio</h1>
    <h3 class="description-portifolio">
      Confira alguns dos nosso projetos e sites que ja realizamos!
    </h3>
    <v-carousel hide-delimiters>
      <template v-slot:prev="{ props }">
        <i
          class="pi pi-angle-left"
          style="font-size: 2rem"
          @click="props.onClick"
        ></i>
      </template>
      <template v-slot:next="{ props }">
        <i
          class="pi pi-angle-right"
          style="font-size: 2rem"
          @click="props.onClick"
        ></i>
      </template>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        :transition="500"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import { ref } from "vue";
import { VCarousel, VCarouselItem } from "vuetify/components";
import site1 from "../../assets/carousel/adv-ex.png";
export default {
  components: {
    VCarousel,
    VCarouselItem,
  },
  setup() {
    const items = ref([
      {
        src: site1,
      },
    ]);

    return {
      items,
    };
  },
};
</script>

<style scoped lang="scss">
.portifolio-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  width: 100%;
  height: 100%;
  border-radius: 30px;
}
.title-portifolio {
  margin-bottom: 30px;
  text-align: center;
  font-weight: bold;
  color: #fdfdfd;
}
.description-portifolio {
  color: white;
  text-align: center;
  padding: 0 3px;
}
</style>
