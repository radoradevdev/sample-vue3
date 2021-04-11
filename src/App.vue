<template>
  <div id="nav">
    <router-link to="/login" v-if="!isLoggedIn">Login | </router-link>
    <router-link to="/register" v-if="!isLoggedIn">Register</router-link>
    <router-link to="/logout" v-if="isLoggedIn">Logout</router-link>
  </div>
  <router-view/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { RouteLocationNormalized } from 'vue-router';

@Options({
  props: {},
  watch: {
    $route(to: RouteLocationNormalized, from: RouteLocationNormalized) {
      this.checkIsLoggedIn();
    }
  }
})
export default class App extends Vue {
  isLoggedIn: boolean = localStorage.getItem('auth-token') ? true : false;

  checkIsLoggedIn() {
    this.isLoggedIn = localStorage.getItem('auth-token') ? true : false;
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
