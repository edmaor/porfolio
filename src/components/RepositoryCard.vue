<template>
  <div class="card repo">
    <h2 class="repo-title">{{ repository.id }}</h2>
    <a class="repo-button" v-if="repository.url" :href="repository.url" target="_blank" rel="noopener noreferrer">GitHub</a>
    <p v-else class="repo-description">No url</p>
  </div>
</template>

<script>
export default {
    props:['repository']
}
</script>