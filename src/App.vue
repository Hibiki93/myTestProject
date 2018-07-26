<template>
  <v-app id="inspire">
    <!-- right side menu -->
    
    <!-- top menu -->
    <v-flex class="text-md-center">
      <v-toolbar color="red darken-2" dark fixed app>
          <v-layout align-center justify-space-around row fill-height>
            <v-spacer>
            <v-card-text class="hidden-sm-and-down">Welcome to Supplier Malaysia, Join Us and list your product here!
              <br>
              Total Suppliers 2,562, Total Products 714,018
            </v-card-text>
            <v-toolbar-side-icon class="hidden-sm-and-up" @click.stop="drawer = !drawer"><v-icon>fas fa-bars</v-icon></v-toolbar-side-icon>
            </v-spacer>
            <div xs6 class="text-md-center" >
                <v-text-field
                flat
                solo-inverted
                hide-details
                prepend-inner-icon="search"
                label="Search"
                ></v-text-field>
            </div>
            </v-layout>
      </v-toolbar>
    </v-flex>

    <v-content>
      <router-view></router-view>
    </v-content>
<!-- footer -->
    <v-footer color="red darken-2" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>


<script>
export default {
  name: 'app',
  data(){
    return{
      
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
