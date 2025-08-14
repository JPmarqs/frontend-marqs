<template>
  <section id="services" class="services">
    <div class="container">
      <div class="section-header">
        <h2>Nossos Serviços</h2>
        <p>
          Oferecemos soluções completas em desenvolvimento digital, desde
          sites institucionais até sistemas complexos
        </p>
      </div>
      <div class="services-grid">
        <ServiceCard
          v-for="service in services"
          :key="service.id"
          :icon="service.icon"
          :title="service.title"
          :description="service.description"
        />
      </div>
      <WhatsAppButton style="margin-top: 2pc;" :icone="'pi pi-whatsapp'"></WhatsAppButton>
    </div>
  </section>
</template>

<script>
import ServiceCard from '@/components/cards/Card.vue'
import WhatsAppButton from '@/components/callToAction/Button.vue'

export default {
  name: 'ServicesSection',
  components: {
    ServiceCard,
    WhatsAppButton
  },
  data() {
    return {
      services: [
        {
          id: 1,
          icon: '🌐',
          title: 'Desenvolvimento de Sites',
          description: 'Sites responsivos, modernos e otimizados para SEO. Desde landing pages até e-commerce completo, criamos experiências digitais que convertem visitantes em clientes.'
        },
        {
          id: 2,
          icon: '⚡',
          title: 'Desenvolvimento de Software',
          description: 'Sistemas personalizados, aplicações web e mobile. Desenvolvemos soluções sob medida que automatizam processos e aumentam a produtividade do seu negócio.'
        },
        {
          id: 3,
          icon: '🛡️',
          title: 'Manutenção & Suporte',
          description: 'Suporte técnico contínuo, atualizações de segurança e manutenção preventiva para manter seus sistemas sempre funcionando perfeitamente.'
        },
        {
          id: 4,
          icon: '📱',
          title: 'Aplicações Mobile',
          description: 'Desenvolvimento de aplicativos nativos e híbridos para iOS e Android, com foco na performance e experiência do usuário.'
        },
        {
          id: 5,
          icon: '🖌️',
          title: 'Criação de Logotipos',
          description: 'Criação de logotipos para sua empresa, produtos ou serviço.'
        },
        {
          id: 6,
          icon: '🧩',
          title: 'Criação de identidade visual',
          description: 'Desenvolvimento de identidade visual para sua marca, agregando personalidade e valor.'
        }
      ]
    }
  }
}
</script>