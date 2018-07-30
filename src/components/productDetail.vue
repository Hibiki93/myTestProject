<template>
    <v-app class="productPage" row xs10 offset-xs1 >
        <router-link to="/">
            <img class="logo" src="./../../static/img/suppliermalaysia.gif">
        </router-link>
        
        <v-container>
            <v-flex xs10 offset-xs1>
              <v-layout row wrap >
                <v-flex>
                  <v-card-media
                    src="https://cdn2.npcdn.net/images/product/500x1000-1-0/726816-product2011343.jpg"
                    contain
                    height="250"
                  ></v-card-media>
                </v-flex>
                <v-flex class="text-xs-left" >
                  <v-card-title>
                    <div>
                      <div class="headline">{{product.name}}</div>
                      <div>
                          <v-chip>
                              <v-icon left>fas fa-building</v-icon>
                                Supplier :
                                    {{product.supplier}}</v-chip></div>
                          <div>
                              <v-chip>
                                  <v-icon left>fas fa-calendar-alt</v-icon>
                                  Created Date :
                                  {{product.createdDate}}</v-chip></div>
                            <div>
                              <v-chip>
                                  <v-icon left>fas fa-globe</v-icon>
                                  Website :
                                  {{product.website}}</v-chip></div>
                    </div>
                  </v-card-title>
                        </v-flex>
                </v-layout>
          </v-flex>
        </v-container>
        <v-container row wrap>
            <!-- contact supplier form -->
            <v-card-media>
                <img src="./../../static/img/map.jpg" >
                <v-card-text class="text-xs-left" >
                    <div><v-icon left>fas fa-globe-americas</v-icon>  Main Office</div>
                    <div><strong>Dexwin School Uniform</strong><p>(1030237-M)</p></div>
                    <div>16, Lorong Rusa 2, Taman Selamat, 14000 Bukit Mertajam, Penang, Malaysia.</div>
                    <div>Tel: +604-5514134</div>
                    <div>Fax: +604-5518134</div>
                    <div>Email: jiaquan@dexwin.com.my</div>
                </v-card-text>
            </v-card-media>
                        <div>
                            <v-btn
                                color="orange lighten-1"
                                dark
                                >Contact Supplier</v-btn>
                                <v-container xs6 >
                                        <v-card>
                                            <v-flex>
                                                <v-text-field
                                                    outline
                                                    v-validate="'required|max:10'"
                                                    label="Your Name"
                                                    :rules="nameRules"
                                                    v-model="name"
                                                    :counter="10"
                                                    ></v-text-field>
                                            <v-text-field
                                                outline
                                                label="Your Contact Number"
                                                v-model="contactNumber"
                                                ></v-text-field>
                                                <v-text-field
                                                outline
                                                label="Email"
                                                :rules="emailRules"
                                                v-model="email"
                                                ></v-text-field>
                                                    <v-textarea
                                                    name="input-7-1"
                                                    outline
                                                    label="Leave Your Message Here"
                                                    auto-grow
                                                    rows="2"
                                                    v-model="message"
                                                    ></v-textarea>
                                                    <v-checkbox
                                                        v-model="checkbox"
                                                        :rules="[v => !!v || 'You must click to continue!']"
                                                        label="I'm not a robot"
                                                        required
                                                        ></v-checkbox>
                                                        <v-btn @click="submit">submit</v-btn>
                                                        <v-alert
                                                            :value="alert"
                                                            type="success"
                                                            transition="scale-transition"
                                                            >
                                                            Successful Submit
                                                            </v-alert>
                                            </v-flex>
                                        </v-card>
                                </v-container>
                            </div>
        </v-container>
    </v-app>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      alert: false,
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      checkbox: false,
      message: "",
      select: null,
      sheet: false,
      product: {
        id: 1,
        name: "T-PK-01 T-SHIRT PKBM SHORT SLEEVE",
        supplier: "PASUKAN KADET BERSATU MALAYSIA (PKBM)",
        createdDate: "2018-7-24",
        website: "http://www.dexwin.com.my",
        photo: ""
      }
    };
  },
  methods: {
    submit() {
      console.log("clicked!");
      if (this.name != null && this.email != null && this.checkbox == true) {
        this.alert = true;
      } else {
        alert("Please infill the information");
      }
      //   if (this.$refs.form.validate()) {
      //   alert("submit success!");
      //   }
    }
  },
  clear() {
    this.$refs.form.reset();
  }
};
</script>
