<template>
  <div class="new">
    <div>
      <img class="logo" src="../assets/restrant_logo-removebg-preview.png" />
      <h1>Login</h1>
      <div class="login">
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input
          type="Password"
          v-model="password"
          placeholder="Enter Password"
        />
        <button v-on:click="login">Login</button>
        <p>
          <router-link to="/sign-up">Sign Up</router-link>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "Login",
  data(){
    return {
       email:'',
       password: '',
    }
  },
  methods:{
    async login(){
        // let result = axios.get(
        //     `http://localhost:3000/users?email=${this.}`
        // )
        let result = await axios.get('http://localhost:3000/users?email=${this.email}&password=${this.password}');
        console.warn(result);
        if (result.status == 200 && result.data.length>0) {
            localStorage.setItem('user-info', JSON.stringify(result.data[0]))
            this.$router.push({name: 'home'})
        }
        else{
          alert('sdfghj')
          this.$router.push({name: 'SignUp'})
        }

    }
  },
  mounted(){
    let user = localStorage.getItem('user-info');
    if (user) {
        this.$router.push({name: 'home'}) 
    }
  }
};
</script>
<!-- <style>

.login input{
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}
.login button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background-color: skyblue;
  color: #fff;
  cursor: pointer;
}</style> -->