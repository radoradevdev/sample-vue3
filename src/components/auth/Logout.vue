<template>
  <div>{{msg}}</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class Logout extends Vue {
  mounted() {
    localStorage.removeItem('auth-token');
    this.$router.push('login');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
