<template>
  <div class="floating-card">
    <i :class="icon" style="font-size: 2.5rem; color: #ff8c00; margin-bottom: 1rem;"></i>
    <h3>{{ title }}</h3>
    <p style="padding-bottom: 10px;">{{ description }}</p>
    <div v-if="WhatsAppBtn" >
      <WhatsAppButton
        phone="5562998626461"
        message="Olá, minha mensagem de teste do whatsapp"
        buttonText="Entre em contato"
      />
    </div> 
  </div>
</template>

<script>
import WhatsAppButton from '@/components/callToAction/Button.vue'
export default {
  name: 'FloatingCard',
  components: {
    WhatsAppButton
  },
  props: {
    WhatsAppBtn : {
      type: Boolean,
      default: true
    },
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