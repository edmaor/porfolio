<template>
  <h1 v-if="project">{{ project.id }}</h1>
</template>
<script>
import projects from '../../resources/data/projects.json'
export default {
    data() {
        return {
            project: null,
        }
    },
    mounted() {
        const pid = this.$route.params.pid.toLowerCase();
        this.project = projects.find((proj) => proj.id.toLowerCase() === pid);
    },
}
</script>

<style>

</style>