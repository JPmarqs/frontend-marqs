<template>
  <div class="card-container">
    <div v-if="icone.length > 0">
      <img :src="icone.toString()" alt="Ícone" class="icon-image" />
    </div>
    <div class="card-title">
      <h2>{{ title }}</h2>
    </div>
    <div class="card-content">
      <p>{{ content }}</p>
    </div>
    <div class="card-button">
      <p>Saiba mais</p>
      <i class="pi pi-arrow-right" style="font-size: 1.5rem"></i>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icone: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  height: 20em;
  margin: 10px;
  border-radius: 14px;
  background-color: rgba(255, 255, 255, 0.2);
  border: 3px solid #0248a7;
  @media (max-width: 768px) {
    padding-top: 1pc;
    width: 100%;
  }
}
.card-container:hover {
  border-radius: 15px;
  border: 3px solid transparent;
  border-image: linear-gradient(90deg, #2575fc, #ff6600);
  border-image-slice: 1;
  .card-button {
    border-radius: 0;
  }
}
.icon-image {
  width: 30%;
}
.card-content {
  font-size: 19px;
  padding: 5px;
}
.card-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3pc;
  width: 100%;
  background-color: #0248a7;
  color: white;
  border-radius: 0 0 10px 10px;
  &:hover {
    cursor: pointer;
    background: linear-gradient(90deg, #2575fc, #ff6600);
  }
  > p {
    &:hover {
      cursor: pointer;
      color: #19065c;
    }
    margin-right: 10px;
    font-size: 1.25rem;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
}
</style>
