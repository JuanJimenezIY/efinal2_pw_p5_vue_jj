<template>
<h1>Examen Final</h1>

  <NavBar/>
   <router-view/>
 
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import EstudiantePage from './pages/EstudiantePage.vue'

export default {
  name: 'App',
  components: {
    NavBar

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
