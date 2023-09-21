<template>
  <div>
    <img class="logo" src="../assets/restrant_logo-removebg-preview.png" />
    <h1>SignUp</h1>
    <div class="register">
      <input type="text" v-model="user.name" placeholder="Enter Name" />
      <input type="text" v-model="user.email" placeholder="Enter Email" />
      <input
        type="Password"
        v-model="user.password"
        placeholder="Enter Password"
      />
      <button v-on:click="signUp">SignUp</button>
      <p>
        <router-link to="/login">login</router-link>
      </p>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "SignUp",
  data() {
    return {
      user: {},
    };
  },
  methods: {
    async signUp(){
        // console.warn('signUp', this.user);
        let result = await axios.post('http://localhost:3000/users',this.user);

        console.warn(result);
        if (result.status == 201) {
            localStorage.setItem('user-info', JSON.stringify(result.data))
            this.$router.push({name: 'home'})
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
.register input{
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}
.register button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background-color: skyblue;
  color: #fff;
  cursor: pointer;
}
</style> -->
