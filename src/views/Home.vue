<template>
<h1>Edu Martorell Ortuno</h1>
<div id="presentation">
    <h4>Software Developer</h4>
    <p>Hey there! I'm Edu, a budding software developer with a fresh perspective and a hunger for knowledge. I'm ready to tackle different projects and adapt to new technologies.</p>
    <p>Programming isn't just a career path for me; it's a genuine passion. I spend my free time exploring different coding concepts, experimenting with new languages, and delving into various frameworks and libraries. Whether it's reading programming books, following online tutorials, or participating in coding challenges, I'm always looking for ways to improve and expand my knowledge.</p>
    <p>Looking ahead, I want to master both front-end and back-end development, seamlessly bringing ideas to life. Becoming a full-stack developer will give me the versatility to tackle any project and contribute throughout the entire software development lifecycle.</p>
</div>
<div id="knowledge">
    <div class="knowledge">
        <h3 class="kn-title">Programming Languages</h3>
        <h4>Java</h4><p></p>
        <h4>Python</h4><p></p>
        <hr><hr>
        <h4>JavaScript</h4><p></p>
        <h4>HTML</h4><p></p>
        <h4>CSS</h4><p></p>
    </div>
    <div class="knowledge">
        <h3 class="kn-title">Cloud Frameworks</h3>
        <h4>Docker</h4><p></p>
        <h4>AWS</h4><p>EC2</p>
    </div>
    <div class="knowledge">
        <h3 class="kn-title">Other Frameworks</h3>
        <h4>VUE</h4><p></p>
    </div>
    <div class="knowledge">
        <h3 class="kn-title">Languages</h3>
        <h4>Spanish</h4><p>Native</p>
        <h4>Catalan</h4><p>Native</p>
        <h4>English</h4><p>B2</p>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
#knowledge {
    display: grid;
}
.knowledge {
    margin: 32px 24px;
    border-radius: 24px;
    padding: 0 0 12px;
    display: grid;
    grid-template-columns: 128px 1fr;
    gap: 2px;
    background: #fefefa;
}

.kn-title {
    grid-column: 1 / span 2;
}

@media (min-width: 320px) {
    #knowledge {
        grid-template-columns: 1fr;
    }
}

@media (min-width: 720px) {
    #knowledge {
        grid-template-columns: 1fr 1fr;
    }
}

@media (min-width: 1200px) {
    #knowledge {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

</style>