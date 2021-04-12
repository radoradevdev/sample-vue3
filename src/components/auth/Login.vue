<template>
  <div>
    <form @submit.prevent="onSubmit()">
      <input type="email" v-model="email" placeholder="Email..."/>
      <input type="password" v-model="password" placeholder="Password..."/>
      <button type="submit">Login</button>
    </form>
    <p class="error" v-for="error of errors" :key="error">{{error}}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import axios from '../../axios';
import { isValidEmail } from '../../helpers/validators.helper';

@Options({
  props: {}
})
export default class Login extends Vue {
  email: string = '';
  password: string = '';

  errors: string[] = [];

  async onSubmit() {
    this.errors = [];
    try {
      let response = await axios.post('/login', {
        email: this.email, password: this.password
      });
      const { token } = response.data;
      localStorage.setItem('auth-token', token);
      this.$router.push('/home');
    } catch(e) {
      console.error(e);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
