<template>
  <div >
    <Header />
    <h1>hello {{ name }}, welcome on the home page</h1>

    <table border="1">
      <tr>
        <td>id</td>
        <td>Name</td>
        <td>Contact</td>
        <td>Address</td>
        <!-- <td>location</td> -->
        <td>Actions</td>
      </tr>
      <tr v-for="item in restaurants" :key="item.id" >
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.contact }}</td>
        <td>{{ item.address }}</td>
        <!-- <td>{{ item.location }}</td> -->
        <td>
          <button type="button" class="btn btn-primary ">
            <router-link :to="'/update/'+ item.id">Update</router-link>
          </button>
          <button v-on:click="deleterestaurant(item.id)">Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios'
export default {
  name: 'Home',
  data(){
    return {
      name: '',
      restaurants: [],
    }
  },
  components: {
    Header
  },
  methods: {
    // async deleterestaurant(){
    //   let result =  await axios.delete('http://localhost:3000/restsurant/' +id);
    //   console.warn(result.status);
    //   if (result.status==200) {
    //       this.loadData();
    //   }
    // },

    async deleterestaurant(id) { // Pass the 'id' as an argument
      try {
        let result = await axios.delete('http://localhost:3000/restsurant/' + id);
        if (result.status === 200) {
          this.loadData();
        }
      } catch (error) {
        console.error('Error deleting restaurant:', error);
      }
    },
    async loadData(){
      let user = localStorage.getItem('user-info');
    this.name = JSON.parse(user).name
    if (!user) {
        this.$router.push({name: 'SignUp'})
        
    }
    let result = await axios.get('http://localhost:3000/restsurant');
    this.restaurants = result.data
    }
  },
  mounted(){
    this.loadData();
  }
 
}
</script>
<style>
td{
  width: 150px;
  height: 30px;
}
.btn{
  text-decoration: none;
  /* background-color: skyblue;
  color: black; */
}
</style>