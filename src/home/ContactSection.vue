<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="contact-content">
        <div class="contact-info">
          <h2>Vamos transformar sua ideia em realidade?</h2>
          <p>
            Entre em contato conosco e descubra como podemos impulsionar seu
            negócio com soluções digitais inovadoras e eficientes.
          </p>
          <p>
            Nosso time está pronto para entender suas necessidades e criar a
            solução perfeita para sua empresa.
          </p>
        </div>
        <ContactForm @form-submit="handleFormSubmit" />
      </div>
    </div>
  </section>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'

export default {
  name: 'ContactSection',
  components: {
    ContactForm
  },
  methods: {
    handleFormSubmit(formData) {
      // Aqui você pode processar os dados do formulário
      console.log('Dados do formulário:', formData)
      // Implementar lógica de envio de email ou integração com API
    }
  }
}
</script>