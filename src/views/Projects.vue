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

.repo {
  border: #2c3e50ca solid 1px;
  width: 320px;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  background: #1F1F22ec;
}

.repo .repo-title {
    grid-column: 1/ span 3;
    grid-row: 1;
    margin: 8px auto 0;
    color: #dde7ec;
}

.repo .repo-description {
    margin: auto 8px;
    grid-column: 2;
    color: #dde7ec;
}
.repo .repo-img {
    grid-column: 2;
    grid-row: 2;
    margin: 8px auto;
    border-radius: 12px;
    height: 72px;
    background: #dde7ec;
}

.repo .repo-button {
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

@media (max-width: 420px) {
  .repo {
    width: 280px;
    margin: 18px auto;
  }
}
</style>