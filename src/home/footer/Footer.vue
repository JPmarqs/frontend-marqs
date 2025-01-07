<template>
    <div class="footer-container">
        <div class="footer-content">
            <p>Este site foi desenvolvido por: Marqs Solutions</p>
            <p>2025 © Todos os direitos reservados.</p>
        </div>        
    </div> 
</template>

<script setup>
</script>

<style scoped lang="scss">
    .footer-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
    .footer-content {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        padding-top: 20px;
        width: 100%;
        height: 100%;
        background-color: #0248a7;
    }
    p {
        font-size: 15px;
        margin-bottom: 10px;
        text-align: center;
        color: white;
        margin-right: 5px;
    }   
</style>
