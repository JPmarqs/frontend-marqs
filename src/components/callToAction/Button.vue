<template>
    <div class="call-to-action" @click="openWhatsapp">
        <p>Traga seu projeto para a MARQS Solutions </p>
        <i class="pi pi-arrow-right" style="font-size: 1.5rem"></i>
    </div>
</template>

<script setup>
    const openWhatsapp = () => {
        window.open('https://api.whatsapp.com/send?phone=5562998626461&text=Olá%20Marqs%20est%C3%A1%20bem%3F', '_blank');
    }
</script>

<style scoped lang="scss">
    .call-to-action {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 3pc;
        width: 100%;
        background-color: #19065c;
        color: white;
        &:hover {
            cursor: pointer;
            background-color: #ff6600;
        }
        > p {
            &:hover {
                cursor: pointer;
                color: #19065c;
            }
            margin-right: 10px;
            font-size: 1.25rem;
            @media (max-width: 768px) {
                font-size: 1rem;
            }
        }
    }
</style>    