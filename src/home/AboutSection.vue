<template>
  <section id="about" class="about" :style="{ backgroundImage: `url(${aboutImage})`, backgroundSize: 'cover'}"> 
    <div class="container" >
      <div class="about-content" > 
        <div class="about-text">
          <h2>Por que escolher a Marqs Solutions?</h2>
          <p class="p-about"> 
            Na Marqs Solutions, unimos criatividade, tecnologia e metodologias ágeis para desenvolver soluções digitais. 
            Nosso foco é transformar a presença online das empresas, criando projetos que encantam visualmente e geram resultados reais para o negócio.
          </p>
          
        </div>
        <div class="about-visual">
          <FloatingCard title="Nossa abordagem" description="Metodologia ágil, comunicação transparente e foco total nos resultados do cliente" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StatItem from '@/components/stat.vue'
import FloatingCard from '@/components/cards/FloatingCard.vue'
import aboutImage from '@/assets/photo-about.jpeg'

export default {
  name: 'AboutSection',
  components: {
    StatItem,
    FloatingCard
  },
  data() {
    return {
      aboutImage: aboutImage,
      stats: [
        {
          id: 1,
          number: '100+',
          label: 'Projetos Entregues'
        },
        {
          id: 2,
          number: '98%',
          label: 'Satisfação dos Clientes'
        },
        {
          id: 3,
          number: '5+',
          label: 'Anos de Experiência'
        }
      ]
    }
  }
}
</script>