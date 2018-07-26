<template>
  <div class="flex">
    <!-- hidden on moblie side  -->
    <v-layout class="hidden-sm-and-down" align-start justify-center row fill-height>
          <v-menu offset-y>
            <v-btn
              slot="activator"
              color="primary"
              dark
              class="text-capitalize"
            >
            <v-icon left>fas fa-plane</v-icon>Accommodation
            </v-btn>
            <v-list>
              <v-list-tile
                v-for="(accommodation, index) in accommodationList"
                :key="index"
                @click=""
              >
          <v-list-tile-title>{{ accommodation.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-menu offset-y>
            <v-btn
              slot="activator"
              color="primary"
              dark
              class="text-capitalize"
            >
            <v-icon left>fas fa-tshirt</v-icon>Fashion
            </v-btn>
            <v-list>
              <v-list-tile
                v-for="(fashion, index) in fashionList"
                :key="index"
                @click=""
              >
          <v-list-tile-title>{{ fashion.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-menu offset-y>
            <v-btn
              slot="activator"
              color="primary"
              dark
              class="text-capitalize"
            >
            <v-icon left>fas fa-car</v-icon>Automotive
            </v-btn>
            <v-list>
              <v-list-tile
                v-for="(automotive, index) in automotiveList"
                :key="index"
                @click=""
              >
          <v-list-tile-title>{{ automotive.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-menu offset-y>
            <v-btn
              slot="activator"
              color="primary"
              dark
              class="text-capitalize"
            >
            <v-icon left>fas fa-laptop</v-icon>Computers & Information Technology
            </v-btn>
            <v-list>
              <v-list-tile
                v-for="(IT, index) in computersITList"
                :key="index"
                @click=""
              >
          <v-list-tile-title>{{ IT.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    </v-layout>
   <v-layout class="hidden-sm-and-down" align-start justify-center row fill-height>
    <v-menu offset-y>
            <v-btn
              slot="activator"
              color="primary"
              dark
              class="text-capitalize"
            >
            <v-icon left>fas fa-graduation-cap</v-icon>Education
            </v-btn>
            <v-list>
              <v-list-tile
                v-for="(education, index) in educationList"
                :key="index"
                @click=""
              >
          <v-list-tile-title>{{ education.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-menu offset-y>
            <v-btn
              slot="activator"
              color="primary"
              dark
              class="text-capitalize"
            >
            <v-icon left>fas fa-bolt</v-icon>Electronics
            </v-btn>
            <v-list>
              <v-list-tile
                v-for="(electronic, index) in electronicList"
                :key="index"
                @click=""
              >
          <v-list-tile-title>{{ electronic.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-menu offset-y>
            <v-btn
              slot="activator"
              color="primary"
              dark
              class="text-capitalize"
            >
            <v-icon left>fas fa-utensils</v-icon>Food
            </v-btn>
            <v-list>
              <v-list-tile
                v-for="(food, index) in foodList"
                :key="index"
                @click=""
              >
          <v-list-tile-title>{{ food.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-menu offset-y>
            <v-btn
              slot="activator"
              color="primary"
              dark
              class="text-capitalize"
            >
            <v-icon left>fas fa-heart</v-icon>Health & Beauty
            </v-btn>
            <v-list>
              <v-list-tile
                v-for="(hb, index) in hbList"
                :key="index"
                @click=""
              >
          <v-list-tile-title>{{ hb.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
        </v-span>
      </v-layout>
    <!-- show on moblie side -->
    <v-carousel>
      <v-carousel-item class="image"
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src:'./../../static/img/menu.jpg'
          },
        ],
        accommodationList: [
          {title: 'Tourism & Recreation'},
          {title: 'Hotel'},
          {title: 'Popular Places'},
          {title: 'Travel Bureaus'},
          {title: 'Chauffeur Services'},
          {title: 'Travel Bus'},
          {title: 'Luggage'},
          {title: 'Boat Rental'},
          {title: 'Apartment'},
        ],
        fashionList: [
          {title: 'Apparel'},
          {title: 'Uniforms'},
          {title: 'Bags'},
          {title: 'Fashions'},
          {title: 'Tee - Shirts Printing'},
          {title: 'Tee - Shirts - Wholesaler & Manufactures'},
        
        ],
        automotiveList: [
          {title: 'Car Accessories'},
          {title: 'Automotive Components'},
          {title: 'Automotive Equipment'},
          {title: 'Car Spare Parts'},
          {title: 'Motorcar accessories'},
          {title: 'Car Tinted Film'},
          {title: 'Lorry Servicing'},
          {title: 'Racing Kit'},
          {title: 'Wheel Balancer Tyre Changer'},
          {title: 'Motorcycle Store'},
          {title: 'Motorcycle Accessories'},
          {title: 'Heavy Vehicles'},
        ],
        computersITList:[
          {title:'Software Development'},
          {title:'Cable'},
          {title:'IT Services'},
          {title:'Point Of Sales System'},
          {title:'Telecommunication Equipment & Supplies'},
          {title:'Computer Accessories Distributor'},
          {title:'Ink Cartridge'},
          {title:'Electronics Cash Register'},
          {title:'Mobile Telephone Equipment & Systems'},
          {title:'Laptop Repairing'},
          {title:'Internet Services Providers'},
          {title:'Internet Service Consultants'},
        ],
        educationList:[
          {title:'Learning Centre'},
          {title:'Education'},
          {title:'Course'},
          {title:'Tranining Centre'},
          {title:'Kindergarten'},
          {title:'Language Schools'},
          {title:'Music Centre'},
          {title:'Tuition'},
          {title:'Mental Arithmetic'},
          {title:'Tuition Centre'},
          {title:'Art Schools'},
          {title:'Beauty Culture Schools'},
        ],
        electronicList:[
          {title:'CCTV'},
          {title:'Safety & Security'},
          {title:'Door Access System'},
          {title:'Electrical Product'},
          {title:'Electronic Components'},
          {title:'Air Conditioner Service'},
          {title:'Industrial Equipment'},
          {title:'Electric Transformers'},
          {title:'Electronic Parts Assemblers'},
          {title:'Hi-Fi And Stereophonic System & Equipment'},
          {title:'Refrigeration Equipment - Commercial, Servicing'},
          {title:'Projector'},
        ],
        foodList:[
          {title:'Food Products'},
          {title:'Frozen Foods'},
          {title:'Food Ingredients & Additives'},
          {title:'Beverage'},
          {title:'Frozen Foods - Wholesale'},
          {title:'Snacks'},
          {title:'Vegetarian Foods'},
          {title:'Paste'},
          {title:'Paper & Plastic Cups, Containers & Utensils'},
          {title:"Bird's Nest"},
          {title:'Cooking Sauces'},
          {title:'Takoyaki'},
        ],
        hbList:[
          {title:'Health & Beauty'},
          {title:'Beauty product'},
          {title:'Health Care Products'},
          {title:'Skin Care Product'},
          {title:'Health Products'},
          {title:'Beauty - Face & Body Spa Slimming'},
          {title:'Traditional Chinese Medicine'},
          {title:'Spa'},
          {title:'Optical Premises'},
          {title:'Bridal Makeup'},
          {title:'Soap'},
          {title:'Hair Beauty Equipment'},
        ]
      }
    }
  }
</script>

<style scoped>

</style>
