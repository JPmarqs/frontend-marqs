<template>
    <div class="card-container">
        <font-awesome-icon :icon="icone" style="font-size: 44px;"/>
        <div class="card-title">
            <h1>{{ title }}</h1>
        </div>
        <div class="card-content">
            <p>{{ content }}</p>
        </div>
        <div class="card-button">
            <p>Saiba mais</p>
            <i class="pi pi-arrow-right" style="font-size: 1.5rem"></i>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        icone:{
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    });
</script>

<style scoped lang="scss">
    .card-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 30%;
        height: 20em;
        padding: 10px;
        border-radius: 10px;
        @media (max-width: 768px) {
           padding-top: 1pc;
           width: 100%;
        }
    }
    .card-container:hover {
        box-shadow: var(--card-box-shadow-hover);
    }
    .card-content {
        font-size: 19px;
    }
    .card-button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 3pc;
        width: 100%;
        background-color: #19065c;
        color: white;
        border-radius: 0 0 10px 10px;
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