<template>
  <div class="card repo">
    <img :src="project.img" alt="" class="repo-img"/>
    <h2 class="repo-title">{{ project.id }}</h2>
    <p class="repo-description">{{ project.description }}</p>
    <router-link class="repo-button" :to="'/project/' + project.id" >DOCUMENTATION</router-link>
    <a class="repo-button" v-if="project.url" :href="project.url" target="_blank" rel="noopener noreferrer">SITE</a>
  </div>
</template>

<script>
export default {
    props: ['project']
}
</script>