<template>
    <div class="card-container">
        <font-awesome-icon :icon="icone" style="font-size: 44px;"/>
        <div class="card-title">
            <h1>{{ title }}</h1>
        </div>
        <div class="card-content">
            <p>{{ content }}</p>
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
        justify-content: center;
        width: 30%;
        height: 100%;
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
</style>