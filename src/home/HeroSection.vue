<template>
  <section id="home" class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <h1>Transformamos <span class="highlight">ideias</span> em soluções</h1>
        <p>
          Criamos sites modernos e softwares personalizados que impulsionam seu
          negócio para o próximo nível.
        </p>
        <div class="cta-buttons">
          <a :href="whatsappLink" target="_blank" class="btn-primary">Iniciar Projeto</a>
          <a href="#services" class="btn-secondary">Nossos Serviços</a>
        </div>
      </div>
      <div class="hero-visual">
        <FloatingCard
          icon="pi pi-lightbulb"
          title="Soluções Personalizadas"
          description="Criação de sites, aplicativos e logotipos para sua empresa"
          :WhatsAppBtn=false
        />
        <FloatingCard
          icon="pi pi-globe"
          title="Desenvolvimento website"
          description="Sites landing page, sites e-commerce, sites de vendas, sites de marketing e outros"
          :WhatsAppBtn=false
        />
        <FloatingCard
          icon="pi pi-mobile"
          title="Aplicativos Mobile"
          description="Aplicativos mobile para iOS e Android, com foco na performance e experiência do usuário"
          :WhatsAppBtn=false
        />
      </div>
    </div>
  </section>
</template>

<script>
import FloatingCard from "@/components/cards/FloatingCard.vue";

export default {
  name: "HeroSection",
  components: {
    FloatingCard,
  },
  data() {
    return {
      whatsappLink: '',
      message: 'Olá, Gostaria de mais informações sobre a criação de sites.'
    }
  },
  computed: {
    whatsappLink() {
      return `https://api.whatsapp.com/send?phone=5562998626461&text=${encodeURIComponent(this.message)}`
    }
  }
};
</script>
