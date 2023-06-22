<template>
<h1>Edu Martorell Ortuño</h1>
<div id="presentation">
    <h4 style="text-align: center;">Software Developer</h4>
    <p>Hey there! I'm Edu, a budding software developer with a fresh perspective and a hunger for knowledge. I'm ready to tackle different projects and adapt to new technologies.</p>
    <p>I have always seen myself as a blend of creative and logical thinking. From a young age, my fascination with understanding how things work, particularly computers and applications, has drawn me towards this field.
        Programming isn't just a career path for me; it's a genuine passion. I spend my free time exploring different coding concepts, experimenting with new languages, and delving into various frameworks and libraries. Whether it's reading programming books, following online tutorials, or participating in coding challenges, I'm always looking for ways to improve and expand my knowledge.</p>
    <p>Looking ahead, I want to master both front-end and back-end development, seamlessly bringing ideas to life. Becoming a full-stack developer will give me the versatility to tackle any project and contribute throughout the entire software development lifecycle.</p>
</div>
<div id="skills">
    <div class="card skill" v-for="skill in skillList" :key="skill.title">
        <h3 class="title">{{ skill.title }}</h3>
        <div class="knowledge" v-for="knowledge in skill.knowledge" :key="knowledge.name">
            <h4 class="kn-name">{{ knowledge.name }}</h4>
            <p class="kn-frame" v-for="framework in knowledge.frameworks" :key="framework">{{ framework }}</p>
        </div>
    </div>
</div>
<hr>
<div class="chart">
    <h2>My Github contributions last year</h2>
    <img class="chart" src="https://ghchart.rshah.org/edmaor" alt="Edu's Github chart" />
</div>
</template>

<script>
import skills from '../../resources/data/skills.json'
export default {
    data() {
        return {
            skillList: skills
        }
    }
}
</script>

<style>
#presentation {
    margin: 32px 24px;
    display: inline-block;
    text-align: justify;
}

#skills {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
}
.skill {
    display: grid;
    gap: 3px;
    grid-template-columns: 1fr 8fr 1fr;
    border: none;
}
.knowledge {
    grid-column: 2;
    display: grid;
    grid-template-columns: 1fr 3fr;
}
.knowledge h4, .knowledge p {
    margin: auto;
}
.kn-frame {
    grid-column: 2;
}

.skill .title {
    grid-column: 1 / span 3;
}

.skill .software-name {
    grid-column: 2;
}
.skill .framework {
    grid-column: 2;
}

.chart {
    margin: auto auto 48vh;
}
.card {
    margin: 32px 24px;
    border-radius: 24px;
    width: 320px;
    padding: 0 0 12px;
    background: #fefefa;
    box-shadow: #2c3e506f 4px 6px 12px 4px;
}

@media (max-width: 480px) {
    .chart {
        display: none;
    }
}
</style>