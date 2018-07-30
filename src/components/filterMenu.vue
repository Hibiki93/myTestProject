<template>
 <!-- hidden on moblie side  -->
    <v-container>
      <v-layout class="hidden-md-and-down offset xs-2" justify-start grid-list-xs row wrap>
        <v-menu offset-y v-for="list in keywordList" :key="list">
                <v-btn
                  slot="activator"
                  color="orange lighten-1"
                  dark
                  class="text-capitalize"
                >
                <v-icon left>{{list.icon}}</v-icon> {{list.title}}
                </v-btn>
                <v-list>
                  <v-list-tile
                    v-for="keyword in list.keywords"
                    :key="keyword"
                    @click="selectedKeyWord"
                  >
              <v-list-tile-title>{{ keyword }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-layout>
    <!-- show on moblie side -->
    <v-menu class="hidden-lg-and-up">
      <v-btn
              slot="activator"
              color="orange lighten-1"
              dark
              class="text-capitalize"
            ><v-icon>fas fa-shopping-cart</v-icon>Category</v-btn>
            <v-list>
              <v-list-tile
                    v-for="category in keywordList" :key="category"
                    @click="selectedKeyWord"
                  >
          <v-list-tile-title
            @click="selectedKeyWord"
            >{{ category.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "./../../static/img/menu.jpg"
        }
      ],
      keywordList: [
        {
          title: "Accommodation",
          icon: "fas fa-plane",
          keywords: [
            "Tourism & Recreation",
            "Hotel",
            "Popular Places",
            "Travel Bureaus",
            "Chauffeur Services",
            "Travel Bus",
            "Luggage",
            "Boat Rental",
            "Apartment"
          ]
        },
        {
          title: "Fashion",
          icon: "fas fa-tshirt",
          keywords: [
            "Apparel",
            "Uniforms",
            "Bags",
            "Fashions",
            "Tee - Shirts Printing",
            "Tee - Shirts - Wholesaler & Manufactures"
          ]
        },
        {
          title: "Automotive",
          icon: "fas fa-car",
          keywords: [
            "Car Accessories",
            "Automotive Components",
            "Automotive Equipment",
            "Car Spare Parts",
            "Motorcar accessories",
            "Car Tinted Film",
            "Lorry Servicing",
            "Racing Kit",
            "Wheel Balancer Tyre Changer",
            "Motorcycle Store",
            "Motorcycle Accessories",
            "Heavy Vehicles"
          ]
        },
        {
          title: "Computers & Information Technology",
          icon: "fas fa-laptop",
          keywords: [
            "Software Development",
            "Cable",
            "IT Services",
            "Point Of Sales System",
            "Telecommunication Equipment & Supplies",
            "Computer Accessories Distributor",
            "Ink Cartridge",
            "Electronics Cash Register",
            "Mobile Telephone Equipment & Systems",
            "Laptop Repairing",
            "Internet Services Providers",
            "Internet Service Consultants"
          ]
        },
        {
          title: "Education",
          icon: "fas fa-graduation-cap",
          keywords: [
            "Learning Centre",
            "Education",
            "Course",
            "Tranining Centre",
            "Kindergarten",
            "Language Schools",
            "Music Centre",
            "Tuition",
            "Mental Arithmetic",
            "Tuition Centre",
            "Art Schools",
            "Beauty Culture Schools"
          ]
        },
        {
          title: "Electronic",
          icon: "fas fa-bolt",
          keywords: [
            "CCTV",
            "Safety & Security",
            "Door Access System",
            "Electrical Product",
            "Electronic Components",
            "Air Conditioner Service",
            "Industrial Equipment",
            "Electric Transformers",
            "Electronic Parts Assemblers",
            "Hi-Fi And Stereophonic System & Equipment",
            "Refrigeration Equipment - Commercial, Servicing",
            "Projector"
          ]
        },
        {
          title: "Food",
          icon: "fas fa-utensils",
          keywords: [
            "Food Products",
            "Frozen Foods",
            "Food Ingredients & Additives",
            "Beverage",
            "Frozen Foods - Wholesale",
            "Snacks",
            "Vegetarian Foods",
            "Paste",
            "Paper & Plastic Cups, Containers & Utensils",
            "Bird's Nest",
            "Cooking Sauces",
            "Takoyaki"
          ]
        },
        {
          title: "Health & Beauty",
          icon: "fas fa-heart",
          keywords: [
            "Health & Beauty",
            "Beauty product",
            "Health Care Products",
            "Skin Care Product",
            "Health Products",
            "Beauty - Face & Body Spa Slimming",
            "Traditional Chinese Medicine",
            "Spa",
            "Optical Premises",
            "Bridal Makeup",
            "Soap",
            "Hair Beauty Equipment"
          ]
        }
      ]
    };
  },
  methods: {
    selectedKeyWord(e) {
      console.log(e.target.value);
      this.$emit("clicked", e.target.textContent);
    }
  }
};
</script>