<template>
  <form class="contact-form" @submit.prevent="submitForm">
    <div class="form-group">
      <label for="name">Nome Completo</label>
      <input
        type="text"
        id="name"
        v-model="form.name"
        placeholder="Seu nome completo"
        required
      />
    </div>
    
    <div class="form-group">
      <label for="message">Mensagem</label>
      <textarea
        id="message"
        v-model="form.message"
        placeholder="Conte-nos sobre seu projeto..."
        required
      ></textarea>
    </div>
    <button type="submit" class="btn-primary" style="width: 100%">
      Enviar Mensagem
    </button>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '', 
        message: ''
      },
      whatsappLink: 'https://api.whatsapp.com/send?phone=5562998626461&text='
    }
  },
  methods: {
    submitForm() {
      // Validação básica
      if (this.form.name &&  this.form.message) { 
        this.whatsappLink += encodeURIComponent(this.form.message);
        window.open(this.whatsappLink, '_blank');
        this.resetForm();
      }
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        message: ''
      }
    }
  }
}
</script>