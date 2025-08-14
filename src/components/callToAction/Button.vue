<template>
  <div class="bnt-whatsapp">
    <a :href="whatsappLink" target="_blank"> 
      <button class="btn-whatsapp"> {{ buttonText }} <i :class="icone"></i></button>
    </a>
  </div>
</template>

<script>
import { icon } from '@fortawesome/fontawesome-svg-core';

export default {
  name: 'WhatsAppButton',
  props: {
    phone: {
      type: String,
      default: '5562998626461'
    },
    message: {
      type: String,
      default: 'Olá, minha mensagem de teste do whatsapp'
    },
    buttonText: {
      type: String,
      default: 'Entre em contato via WhatsApp'
    },
    icone: {
      type: String,
      default: ''
    }
  },
  computed: {
    whatsappLink() {
      return `https://api.whatsapp.com/send?phone=${this.phone}&text=${encodeURIComponent(this.message)}`
    }
  }
}
</script>