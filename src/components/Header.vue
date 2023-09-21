<template>
    <div class="new">
        <div class="nav">
            <router-link to="/">
                Home
                <!-- <a href="#"><img class="logo1" src="../assets/restrant_logo-removebg-preview.png" /> </a> -->
            </router-link>
            <router-link to="/add">
                Add rest
                
            </router-link>
            <!-- <router-link to="/update">Update rest</router-link> -->
            <a v-on:click="logout" href="#">logout </a>
        </div>
    </div>
    
</template>
<script>
    export default{
        name: 'Header',
        methods: {
            logout(){
                localStorage.clear();
                this.$router.push({ name: 'SignUp',})
            }
        }
    }
</script>
<style>
    .nav{
        background-color: #333;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
    }
    .nav a {
        float: left;
        /* display: inline; */
        color: #f2f2f2f2;
        padding: 14px 16px;
        text-align: center;
        font-size: 17px;
        text-decoration: none;
        margin-right: 5px;
    }
    .nav a:hover{
        background: #ddd;
        color: #333;
    }
    .logo1{
        width: 30px;
        height: 17px;
    }
</style>