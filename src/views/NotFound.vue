<template>
    <div class="error-container">
        <h1>404 - Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <a href="/">GO BACK</a>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    .error-container {
        text-align: center;
        height: 86vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h1 {
        font-size: 3rem;
        color: var(--color-text);
    }

    p {
        font-size: 1.5rem;
        color: var(--color-heading);
        margin-bottom: 2%;
    }

    a {
        font-size: 1.5rem;
        color: var(--color-background);
        background-color: var(--color-text);
        padding: 10px 20px;
        border-radius: 5px;
        text-decoration: none;
    }
</style>