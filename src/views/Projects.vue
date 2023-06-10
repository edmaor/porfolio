<template>
  <h1>My projects</h1>
  div
  <div id="myprojects" v-for="project in projectList" :key="project.id">
    <ProjectCard :project="project"/>
  </div>
  <hr>
  <h1>Other Programs</h1>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'
import projects from '../../resources/data/projects.json'
export default {
  components: { ProjectCard },
    data() {
        return {
            projectList: projects
        }
    }
}
</script>

<style>
#myprojects {
  display: flex;
  flex-flow: row wrap;
}
</style>