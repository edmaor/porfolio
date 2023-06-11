<template>
    <div v-if="project">
        <h1>{{ project.id }}</h1>
        <h3>{{ project.description }}</h3>
        <vue-pdf-embed :source="project.documentation" width="80%"/>
    </div>
</template>
<script>
import VuePdfEmbed from 'vue-pdf-embed'
import projects from '../../resources/data/projects.json'
export default {
    data() {
        return {
            project: null
        }
    },
    components: {
        VuePdfEmbed,
    },
    mounted() {
        const pid = this.$route.params.pid.toLowerCase();
        this.project = projects.find((proj) => proj.id.toLowerCase() === pid);
    },
    
}
</script>

<style>

</style>