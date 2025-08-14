<template>
  <div class="stat-item">
    <div class="stat-number">{{ number }}</div>
    <div class="stat-label">{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: 'StatItem',
  props: {
    number: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  }
}
</script>