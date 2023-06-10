<template>
  <div class="project-card">
    <h2 class="pc-title">{{ project.id }}</h2>
    <p class="pc-description">{{ project.description }}</p>
    <img :src="project.img" alt="">
    <router-link class="pc-button" :to="'/project/' + project.id" >DETAILS</router-link>
    <a class="pc-button" v-if="project.url" :href="project.url" target="_blank" rel="noopener noreferrer">SITE</a>
  </div>
</template>

<script>
export default {
    props: ['project']
}
</script>

<style>
.project-card {
    margin: 24px;
    border-radius: 24px;
    width: 320px;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    background: #fefefa;
}

.project-card .pc-title {
    grid-column: 1/ span 3;
}

.project-card .pc-description {
    margin: auto 8px;
    grid-column: 1 / span 2;
    text-align: justify;
}
.project-card img {
    height: 48px;
    grid-column: 3;
}

.project-card .pc-button {
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