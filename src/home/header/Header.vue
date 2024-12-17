<template>
    <div class="header-site-logo">
        <div class="logo">
            <img src="../../assets/MARQS.png" style="width: 100%;" alt="logo">
        </div>
    </div>
    <div class="header-site">
        <div class="name">
            <h2>MARQS Solutions</h2>
        </div>
        <div class="header-site-menu">
            <div class="header-site-menu-item">
                <i class="pi pi-whatsapp" style="font-size: 1.5rem" @click="openWhatsapp"></i>
            </div>
            <div class="header-site-menu-item">
                <i class="pi pi-instagram" style="font-size: 1.5rem" @click="openInstagram"></i>
            </div>
            <div class="header-site-menu-item">
                <i class="pi pi-envelope" style="font-size: 1.5rem" @click="openEmail"></i>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const openWhatsapp = () => {
        window.open('https://api.whatsapp.com/send?phone=5562998626461&text=Olá%20%2C%20minha%20mensagem%20de%20teste%20do%20WhatsApp%20da%20MARQS%20Solutions%21', '_blank');
    }
    const openInstagram = () => {
        window.open('https://www.instagram.com/joao.pedromarqs/', '_blank');
    }
    const openEmail = () => {
        window.open('mailto:contato@marqs.dev.br', '_blank');
    }
</script>

<!-- <style>
@import "../../assets/main.scss";

.header-site {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0248A7;
    height: 80px;
    width: 100%;
    color: white;
}
.header-site-logo {
    height: 200px;
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
}
.header-site-menu {
    display: flex;
    margin-right: 20px;
}
.header-site-menu-item {
    margin-left: 20px;
}
.logo {
    height: 200px;
    width: 200px;
}
.name {
    margin-left: 20px;
}
</style> -->