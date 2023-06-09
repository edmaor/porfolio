<template>
  <nav>
    <h4 class="title">EDMO</h4>
    <div id="links">
      <router-link to="/" class="link material-symbols-outlined">home</router-link>
      <router-link to="/projects" class="link material-symbols-outlined">view_cozy</router-link>
      <a href="https://github.com/edmaor" target="_blank" rel="noopener noreferrer" class="link-img">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <image xlink:href="../resources/icons/github.svg" width="100%" height="100%" />
        </svg>
      </a>
    </div>
    <p class="invisible">CONTACT</p>
    <div id="links">
      <a href="mailto:edmaor128@gmail.com" class="link material-symbols-outlined">mail</a>
      <a href="https://www.linkedin.com/in/eduardo-martorell-ortu%C3%B1o/" target="_blank" rel="noopener noreferrer" class="link-img">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <image xlink:href="../resources/icons/linkedin.svg" width="100%" height="100%" />
        </svg>
      </a>
    </div>
  </nav>
  <div id="content">
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expanded: true
    }
  },
  methods: {
    toggle_menu() {
      this.expanded = !this.expanded
    },
    menuToggled() {
      if (this.expanded) {
        return "expanded"
      }
      return "collapsed"
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h4, h5 {
  margin: auto;
  font-weight: bold;
}

.invisible {
  margin: auto;
  visibility: hidden;
}

body {
  background: #dde7ec;
}

nav {
  position: fixed; top: 0; left: 0;
  height: 100%; width: 72px;
  padding: 18px 0;
  display: flex;
  background: #1F1F22;
  flex-direction: column;
  text-align: center;
}

nav > .title {
  margin: 4px 0 16px;
  color: #dde7ec;
}

#links {
  background: #161619;
}

#links .link {
  margin: 18px 14px;
  padding: 2px 0 4px;
  display: block;
  color: #CBE2EC;
  text-align: center;
  text-decoration: none;
  font-size: 28px;
}

#links .link-img {
  margin: 21px;
  display: block;
}

nav .link.router-link-exact-active {
  border-radius: 12px;
  background: rgba(66, 185, 131,0.72);
}

#content {
  margin: auto 24px auto 96px;
}
</style>
