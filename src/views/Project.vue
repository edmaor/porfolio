<template>
    <div class="app-header">
        <template v-if="isLoading"> Loading... </template>
    </div>
    <div v-if="project">
        <h1>{{ project.id }}</h1>
        <h3>{{ project.description }}</h3>
        <div id="p-documentation">
            <div id="pdf-nav">
                <button @click="page--" :disabled="page <= 1">←</button>
                {{ page }} ⚭ {{ pageCount }}
                <button @click="page++" :disabled="page >= pageCount"> → </button>
            </div>
            <vue-pdf-embed ref="pdfRef" :page="page" :source="documentationPath" @rendered="handleDocumentRender" @password-requested="handlePasswordRequest"/>
        </div>
        
    </div>
</template>
<script>
import VuePdfEmbed from 'vue-pdf-embed'
import projects from '../../resources/data/projects.json'
export default {
    data() {
        return {
            page: 1,
            pageCount: 1,
            showAllPages: false,
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
      this.pageCount = this.$refs.pdfRef.pageCount
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
    margin: auto;
    display: inline-block;
    width: 100%;
    max-width: 900px;
}
#pdf-nav {
    border-radius: 18px 18px 0 0;
    width: 100%;
    background: #2c3e5048;
}
#pdf-nav button {
    margin: 8px;
    border: none;
    border-radius: 8px;
    padding: 0 8px 3px;
    background: #2c3e50;
    color: #CBE2EC;
    font-size: 28px;
}
#pdf-nav button:hover {
    cursor: pointer;
}
#pdf-nav button:disabled {
    background: #2c3e50cc;
}
#pdf-nav button:disabled:hover {
    cursor: default;
}
#pdf-nav input[type=text] {
    background: none;
    border: none;
    width: 24px;
}
</style>