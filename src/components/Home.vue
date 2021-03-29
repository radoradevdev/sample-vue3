<template>
  <div>
    <h1>Hello, {username}</h1>
    <router-link to="/logout">Logout</router-link>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {}
})
export default class Home extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
