<template>
    <div class="banner-site-content" >
        <div class="banner-site-card">
            <h2>DESENVOLVIMENTO DE WEBSITES</h2>
            <h3>Soluções feitas sob medida para o seu negócio</h3>
            <div class="banner-site-button-content" @click="openWhatsapp">
                Entre em contato via WhatsApp
            </div>
        </div>
    </div>

</template>
<script setup>
    import { ref } from 'vue';
    const openWhatsapp = () => {
        window.open('https://api.whatsapp.com/send?phone=5562998626461&text=Olá%20Marqs%20est%C3%A1%20bem%3F', '_blank');
    }
</script>

<!-- <style>
.banner-site-content {
    background-image: url("../../assets/banner.png");
    background-size: cover;
    height: 400px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
.banner-site-divider {
    width: 100%;
    height: 3px;
    background-color: #0248A7;
    margin-top: 15px;
}
.banner-site-card {
    color: white;
    z-index: 2;
    position: relative;
    background-color: #ff6600;
    width: 300px;
    height: 180px;
    margin: 100px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
}
.banner-site-button-content {
    color: white;
    margin-top: 15px;
    width: 60%;
    border-radius: 12px;
    display: flex;    
    justify-content: center;
    background-color: #0248A7;
}

</style> -->