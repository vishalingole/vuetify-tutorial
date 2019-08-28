<template>
  <v-container>

    <v-breadcrumbs class="pageHeader shadow-lg p-3 mb-5">
            <template>
              <h4>Gallary</h4>
            </template>
        </v-breadcrumbs>

    <gallery :images="images" :index="index" @close="index = null"></gallery>

    <v-row >
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn @click="importIG" small icon color="purple" v-on="on"><v-icon>fab fa-instagram</v-icon></v-btn>
        </template>
        <span>Import IG Photos</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn @click="importIG" small icon color="purple" v-on="on"><v-icon>fab fa-facebook</v-icon></v-btn>
        </template>
        <span>Import Facebook Photos</span>
      </v-tooltip>
    </v-row>

    <v-card
        class="mx-auto image ml-1"
        max-width="260"
        v-for="(image, imageIndex) in result"
        :key="imageIndex"
    >
    <v-img @click="index = imageIndex"
      class="white--text"
      height="200px"
      :src="image.images.low_resolution.url"
    >
      <v-card-title class="align-end fill-height" v-if="image.caption" >{{image.caption.text}}</v-card-title>
    </v-img>

    <!-- <v-card-text>
      <span  v-if="image.caption">{{image.caption.text}}</span><br>
      <span class="text--primary">
        <span>Whitehaven Beach</span><br>
        <span>Whitsunday Island, Whitsunday Islands</span>
      </span>
    </v-card-text> -->

    <v-card-actions>
      <v-btn
        text small
        color="orange"
      >
        Share
      </v-btn>
      <!-- <v-btn small
        text
        color="orange"
      >
        Explore
      </v-btn> -->
      <v-btn icon small>
                <v-icon color="indigo">favorite</v-icon>
              </v-btn>

              <v-btn icon small>
                <v-icon color="indigo">fab fa-facebook</v-icon>
              </v-btn>
              <v-btn icon small>
                  <v-icon color="indigo">fab fa-instagram</v-icon>
              </v-btn>
                {{image.likes.count}}
    </v-card-actions>
  </v-card>
  </v-container>

</template>

<script>
  import VueGallery from 'vue-gallery';

  export default {
    data: function () {
      return {
        result: [],
        images: [
          'https://picsum.photos/1920/1091?random',
          'https://picsum.photos/1920/1082?random',
          'https://picsum.photos/1920/1083?random',
          'https://picsum.photos/1920/1089?random',
          'https://picsum.photos/1920/1090?random',
          'https://picsum.photos/1920/1080?random',
          'https://picsum.photos/1920/1084?random',
          'https://picsum.photos/1920/1085?random',

        ],
        items: [
        {
          text: 'Gallary',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
        index: 0
      };
    },

    components: {
      'gallery': VueGallery
    },
    methods: {
      importIG() {

        window.open('https://api.instagram.com/oauth/authorize/?client_id=4dd46a47113f4737aac49ccee0dd4a45&redirect_uri=http://localhost:8080/gallary&response_type=token')
        console.log(this.$route)
      //   this.$store.dispatch('import_ig',{ client_id : '4dd46a47113f4737aac49ccee0dd4a45', redirect_uri: 'http://localhost:8080/gallary', response_type: 'token'}).then((response) => {
      //   console.log('Everything is awesome.');
      //   // vm.$router.push({ name: 'Dashboard' });
      // }).catch((error) => {
      //   console.log(error)
      //   console.warn('Not ola man :(');
      //   this.error = true;
      //   this.result = "Email or Password is incorrect.";
      //   this.showResult = true;

      // })

      }
    },
    mounted() {
      console.log(this.$store.state.instagram_token)
       if(window.location.hash || this.$store.state.instagram_token) {
      if(this.$store.state.instagram_token) {
        var accessToken = this.$store.state.instagram_token
      } else {
        var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
        var accessToken = hash.split('=')[1]
      }
      localStorage.setItem('instagram_token', accessToken)

        this.$store.dispatch('import_ig',{ token : accessToken}).then((response) => {
          console.log(response.data.data)
          this.result = response.data.data
        // vm.$router.push({ name: 'Dashboard' });
      }).catch((error) => {
        console.log(error)
        console.warn('Not ola man :(');
        this.error = true;
        this.result = "Email or Password is incorrect.";
        this.showResult = true;

      })

  } else {
      // No hash found
  }
    }
  }
</script>

<style scoped>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
    cursor: pointer;
  }
  .pageHeader {
    background: purple;
    margin-bottom: 5px;
    color:honeydew
  }
</style>
