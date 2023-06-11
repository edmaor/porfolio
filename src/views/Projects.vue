<template>
  <h1>My projects</h1>
  <div id="myprojects">
    <div v-for="project in projectList" :key="project.id">
      <project-card :project="project"/>
    </div>
  </div>
  <hr>
  <h1>Repositories</h1>
  <div id="myprojects">
    <div v-for="repository in repositoryList" :key="repository.id">
      <repository-card :repository="repository"/>
    </div>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'
import projects from '../../resources/data/projects.json'
import repositories from '../../resources/data/repositories.json'
import RepositoryCard from '@/components/RepositoryCard.vue'
export default {
  components: { ProjectCard, RepositoryCard },
    data() {
        return {
            projectList: projects,
            repositoryList: repositories
        }
    }
}
</script>

<style>
#myprojects {
  display: flex;
  flex-flow: row 
  wrap;
}

.card {
    margin: 24px 24px 24px 0;
    border-radius: 24px;
    width: 320px;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    background: #fefefa;
}

@media (max-width: 420px) {
  .card {
    width: 240px;
    margin: 8px 8px 8px 0;
  }
}

@media (max-width: 800px) {
  .card {
    width: 280px;
  }
}
</style>