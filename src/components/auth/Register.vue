<template>
  <div>
    <form @submit.prevent="onSubmit()">
      <input type="email" v-model="email" placeholder="Email..."/>
      <input type="password" v-model="password" placeholder="Password..."/>
      <button type="submit">Register</button>
    </form>
    <p class="error" v-for="error of errors" :key="error">{{error}}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import axios from '../../axios';
import { isValidEmail, isValidPass } from '../../helpers/validators.helper';

@Options({
  props: {}
})
export default class Register extends Vue {
  email: string = 'rado@sd.sd';
  password: string = 'sdsdsdsdsd';

  errors: string[] = [];

  async onSubmit() {
    this.errors = [];
    if(!isValidEmail(this.email)) {
      this.errors.push('Wrong email!');
      return;
    }
    if(!isValidPass(this.password)) {
      this.errors.push('Wrong password!');
      return;
    }
    try {
      let response = await axios.post('/register', {
        email: this.email, password: this.password
      });
      const { token } = response.data;
      localStorage.setItem('token', token);
      this.$router.push('login');
    } catch(e) {
      console.error(e);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.error {
  color: red;
}
</style>
