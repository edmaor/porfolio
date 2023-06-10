<template>
  <h1>My projects</h1>
  <div id="myprojects">
    <div v-for="project in projectList" :key="project.id">
      <ProjectCard :project="project"/>
    </div>
  </div>
  <hr>
  <h1>Other Programs</h1>
  <div id="myprojects">
    <div v-for="program in programs" :key="program.id">
    </div>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'
import projects from '../../resources/data/projects.json'
export default {
  components: { ProjectCard },
    data() {
        return {
            projectList: projects,
            programs: []
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