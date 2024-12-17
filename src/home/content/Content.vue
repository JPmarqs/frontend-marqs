 <template>
    <div class="content-container">
        <Card v-for="card in cards" :key="card.title" :icone="card.icone" :title="card.title" :content="card.content" />
    </div>
</template>


<script setup>
    import Card from '../../components/cards/Card.vue';
    import { ref } from 'vue';
    const cards = ref([
        {
            icone: 'lightbulb',
            title: 'Planejamos seu Website',
            content: 'Tudo começa com o desejo de alavancar suas vendas e se projetar no mercado. No processo de planejamento, Definimos o layout do seu site,'+
                     ' desde páginas principal até páginas de produtos.'
        },
        {
            icone: 'cubes',
            title: 'Projetamos seu Website',
            content: 'O projeto de um site é um processo que envolve a criação de um plano de site, a definição de suas páginas, o desenvolvimento de conteúdo e a estruturação do site.' +
                ' Você contará com profissionais para criar o melhor layout para seu site. '
        },
        {
            icone: 'laptop-code',
            title: 'Desenvolvemos seu Website',
            content: 'Você contará com desenvolvedores back-end e front-end para construir seu site, usando as melhores práticas do setor e documentos de especificações detalhadas. '+
                     'Seu site será com a capacidade e escalabilidade para corresponder ao seu potencial de crescimento.'
        }
    ]);
</script>

<style scoped lang="scss">

    .content-container {
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        margin: 20px 0 20px 0;
        @media (max-width: 768px) {
            flex-direction: column;
        }
    }
</style>