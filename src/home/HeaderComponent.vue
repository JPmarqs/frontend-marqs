<template>
  <header>
    <nav>
      <div class="logo-container">
        <img
          :src="logo"
          alt="Marqs Solutions"
          class="img-logo"
        />
        <a href="#" class="logo">Marqs Solutions</a>
      </div>
      <ul class="nav-links">
        <li><a href="#home">Início</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import logo from '@/assets/MARQS.png'
export default {
  name: 'HeaderComponent',
  data() {
    return {
      logo
    }
  }
}
</script>