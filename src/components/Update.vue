<template>
  <div>
    <Header />
    <h1>hello user, welcome to update page</h1>

    <!-- <form class="add">
      <input type="text" name="name" v-model="restaurant.name" placeholder="Enter Name" />
      <input type="text" name="address" v-model="restaurant.address" placeholder="Enter Address" />
      <input type="text" name="contact" v-model="restaurant.contact" placeholder="Enter Contact" />
      <button type="button" v-on:click="addRestaurant" >Add New Restaurant</button>
    </form> -->
    <form class="add">
      <input
        type="text" name="name" v-model=" restaurant.name" placeholder="Enter Name"/>
      <input
        type="text" name="address" v-model="restaurant.address" placeholder="Enter Address"/>
      <input
        type="text" name="contact" v-model="restaurant.contact"  placeholder="Enter Contact"/>
      <button type="button" v-on:click="updateRestaurant">
        Update Restaurant
      </button>
    </form>
  </div>
</template>

<script>
import Header from "./Header.vue";
import axios from 'axios'
export default {
  name: "update",
  components: {
    Header,
  },
  data() {
    return {
      restaurant: {
          name: "",
          address: "",
          contact: "",
      },
    };
  },
   methods: {
    async updateRestaurant(){
      const result = await axios.put('http://localhost:3000/restsurant/'+this.$route.params.id,this.restaurant)
      if (result.status==200) {
        this.$router.push({name: 'home'})
      }
    }
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    const result = await axios.get('http://localhost:3000/restsurant/'+this.$route.params.id)
    console.log(result);
    this.restaurant = result.data
  },
};
</script>
