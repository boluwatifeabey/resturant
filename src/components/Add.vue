<template>
  <div >
    <Header />
    <h1>hello user, welcome Add rest page</h1>

    <form class="add">
      <input type="text" name="name" v-model="restaurant.name" placeholder="Enter Name" />
      <input type="text" name="address" v-model="restaurant.address" placeholder="Enter Address" />
      <input type="text" name="contact" v-model="restaurant.contact" placeholder="Enter Contact" />
      <!-- <input type="text" name="location" v-model="restaurant.location" placeholder="Enter location" /> -->
      <button type="button" v-on:click="addRestaurant" >Add New Restaurant</button>
    </form>
  </div>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios'
export default {
  name: 'Add',
  components: {
    Header
  },
  data() {
    return {
      restaurant: {
        
          name: '',
          address: '',
          contact: '',
          // location: '',

      },
    };
  },
  methods: {
    async addRestaurant(){
      let result = await axios.post('http://localhost:3000/restsurant',this.restaurant);
      if (result.status==201) {
        this.$router.push({name: 'home'})
      }
      console.warn('result', result);
    }
  },
  mounted(){
    let user = localStorage.getItem('user-info');
    if (!user) {
        this.$router.push({name: 'SignUp'})
        
    }
  }
 
}
</script>
