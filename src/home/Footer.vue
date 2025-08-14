<template>
  <footer>
    <div class="footer-content">
      <p>&copy; {{ currentYear }} Marqs Solutions. Todos os direitos reservados.</p>
      <p>Transformando ideias em soluções digitais de alto impacto.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>