<template>
  <v-app class="offset xs-2" justify-center height='100px'>
    <!-- right side menu -->
      <img :href="'#/'" class="logo" src="./../../static/img/suppliermalaysia.gif">
    <!-- top menu -->
    <v-container align-start justify-center>
      <v-text-field
       prepend-inner-icon="search"
        solo-inverted
          type="text" v-model="inputSearch"
            v-on:keyup.enter="submitSearch" />
            <v-chip
              v-for="s in searchKeywords"
              :key="s"
              close
              @input="removeKeyword(s)"
            >{{ s }}</v-chip>
    </v-container>
    <filter-menu @clicked="selectedKeyword"/>
<!-- product -->
<v-container >
        <v-layout row warp>
            <v-flex xs12>
                <v-card class="white" >
                    <v-container fluid>
                        <v-layout class="hidden-sm-and-down" row v-for="product in products" v-bind:key="product" v-if="product.show">
                            <v-flex xs6 sm4 md>
                                <v-card-media
                                class="image"
                                :src="product.photo"
                                height="150px"
                                >
                                </v-card-media>
                            </v-flex>
                                <v-flex xs4 sm8 md6>
                                    <v-card-title primary-title>
                                        <div class="headline" ><strong>{{product.name}}</strong></div>
                                    </v-card-title>
                                    <v-card-text >
                                        <div class="text-md-left">Supplier : {{product.supplier}}</div>
                                        <div class="text-md-left">Website : {{product.website}}</div>
                                        <div class="text-xs-center">
                                          <v-btn :href="'#/product/'+ product.id" color="orange lighten-1" dark>Product Detail</v-btn>
                                    </div>
                                    </v-card-text>                              
                                </v-flex>
                        </v-layout>
                        <!-- mobile side -->
                        <v-card class="hidden-md-and-up" text-xs-center>
                          <v-layout  column v-for="product in products" v-bind:key="product" v-if="product.show">
                              <v-flex xs12 sm6 >
                                  <v-card-media
                                  class="image"
                                  :src="product.photo"
                                  height="150px"
                                  >
                                  </v-card-media>
                              </v-flex>
                                  <v-flex xs4 sm8>
                                      <v-card-title primary-title>
                                          <div class="headline" ><strong>{{product.name}}</strong></div>
                                      </v-card-title>
                                      <v-card-text class="text-xs-center" >                                        
                                            <v-btn :href="'./product/' + product.id" color="orange lighten-1" dark>Product Detail</v-btn>
                                      </v-card-text>                              
                                  </v-flex>
                          </v-layout>
                        </v-card>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
<!-- footer -->
    <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title height="50px" class="orange lighten-1">
        <strong class="subheading">Share & get connected with us on social networks!</strong>
        <v-spacer></v-spacer>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-actions class="grey darken-3 justify-center">
        <strong> &copy;2018 </strong>
      </v-card-actions>
    </v-card>
  </v-footer>
  </v-app>
</template>


<script>
import filterMenu from "./filterMenu.vue";

export default {
  name: "app",
  data() {
    return {
      searchKeywords: [],
      search: " ",
      inputSearch: "",
      icons: [
        "fab fa-facebook",
        "fab fa-twitter",
        "fab fa-google-plus",
        "fab fa-linkedin",
        "fab fa-instagram"
      ],
      products: [
        {
          id: 1,
          name: "T-PK-01 T-SHIRT PKBM SHORT SLEEVE",
          supplier: "PASUKAN KADET BERSATU MALAYSIA (PKBM)",
          createdDate: "2018-7-24",
          website: "http://www.dexwin.com.my",
          photo:
            "https://cdn2.npcdn.net/images/product/500x1000-1-0/726816-product2011343.jpg",
          show: false
        },
        {
          id: 2,
          name: "T-PP T-SHIRT PANDU PUTERI",
          supplier: "Dexwin School Uniform",
          createdDate: "2018-7-24",
          website: "http://www.dexwin.com.my",
          photo:
            "https://cdn2.npcdn.net/images/product/500x1000-1-0/726816-product2011343.jpg",
          show: false
        }
      ]
    };
  },
  components: {
    filterMenu
  },
  methods: {
    submitSearch(e) {
      // this.inputSearch = e.target.value;
      // console.log(this.inputSearch)
      // this.$router.push({ name: 'itemIndex', query: { q: e.target.value }});
      var products = this.products;
      var x;
      for (x in products) {
        products[x].show = false;
        if (
          products[x].name
            .toLowerCase()
            .indexOf(e.target.value.toLowerCase()) !== -1
        )
          products[x].show = true;
      }
    },
    handleClick() {
      console.log("click");
    },
    selectedKeyword(value) {
      var index = this.searchKeywords.indexOf(value);
      if (index === -1) this.searchKeywords.push(value);
    },
    removeKeyword(value) {
      var index = this.searchKeywords.indexOf(value);
      if (index !== -1) this.searchKeywords.splice(index, 1);
    }
  }
};
</script>