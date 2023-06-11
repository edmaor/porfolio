<template>
    <div class="app-header">
        <template v-if="isLoading"> Loading... </template>
    </div>
    <div v-if="project">
        <h1>{{ project.id }}</h1>
        <h3>{{ project.description }}</h3>
        <div id="p-documentation">
            <vue-pdf-embed :source="documentationPath" @rendered="handleDocumentRender" :width="720"/>
        </div>
    </div>
</template>
<script>
import VuePdfEmbed from 'vue-pdf-embed'
import projects from '../../resources/data/projects.json'
export default {
    data() {
        return {
            project: null,
            isLoading: true,
            documentationPath: ''
        }
    },
    components: {
        VuePdfEmbed,
    },
    mounted() {
        const pid = this.$route.params.pid.toLowerCase();
        this.project = projects.find((proj) => proj.id.toLowerCase() === pid);
        
        this.documentationPath = 'https://raw.githubusercontent.com/edmaor/porfolio/d681b7701c48d0a96aabadfb6c2a5e61aa21c96c/resources/data/documentation/' + this.project.documentation
    },
    methods: {
    handleDocumentRender(args) {
      console.log(args)
      this.isLoading = false
    },
    handlePasswordRequest(callback, retry) {
      callback(prompt(retry ? 'Enter password again' : 'Enter password'))
    }
  }
    
}
</script>

<style>
#p-documentation {
    max-height: 1000px;
    background: #2c3e50;
    display: inline-block;
    overflow: scroll;
}
#p-documentation > * {
    margin: 32px 48px;
}
</style>