<template>
  <div class="repository-card card">
    <h2 class="rc-title">{{ repository.id }}</h2>
    <a class="rc-button" v-if="repository.url" :href="repository.url" target="_blank" rel="noopener noreferrer">GitHub</a>
    <p v-else>No url</p>
  </div>
</template>

<script>
export default {
    props:['repository']
}
</script>

<style>

.repository-card .rc-title {
    grid-column: 1/ span 3;
}

.repository-card .rc-description {
    margin: auto 8px;
    grid-column: 1 / span 2;
    text-align: justify;
}
.repository-card img {
    height: 48px;
    grid-column: 3;
}

.repository-card .rc-button {
    grid-column: 2;
    margin: 8px auto;
    border: none; border-radius: 8px;
    width: 100%;
    height: 32px;
    background: #2c3e50;
    text-decoration: none;
    color: #fefefa;
    line-height: 32px;
    text-align: center;
    font-weight: bold;
}
</style>