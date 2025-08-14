<template>
  <div class="service-card">
    <span class="service-icon">{{ icon }}</span>
    <h3>{{ title }}</h3>
    <p class="service-description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>
