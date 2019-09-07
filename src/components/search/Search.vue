<template>
	<v-container>
		<v-breadcrumbs class="mb-5 purple accent-6">
			<template>
				<h4>Gallary</h4>
			</template>
		</v-breadcrumbs>
		<gallery :images="images" :index="index" @close="index = null"></gallery>
		<v-card style="cursor:pointer" >
			<v-tabs background-color="white" color="deep-purple accent-4" right>
				<v-tab>instagram
					<v-icon color="indigo" class="pl-2">fab fa-instagram</v-icon>
				</v-tab>
				<v-tab>facebook
					<v-icon color="indigo" class="pl-2">fab fa-facebook</v-icon>
				</v-tab>
				<v-tab>Jodidaar</v-tab>
				<v-tab-item v-for="n in 3" :key="n">
					<v-container fluid>
						<v-row>
							<v-col v-for="(image, imageIndex) in result" :key="imageIndex" md="3">
								<v-hover v-slot:default="{ hover }" :open-delay="openDelay" :close-delay="closeDelay" :value="value">
									<v-card outlined :elevation="hover ? 20 : 2" class="mx-auto" max-width="350">
										<v-img :src="image.images.low_resolution.url" @click="index = imageIndex" class="white--text" height="200px"></v-img>
										<!-- <v-card-title><div>Top western road trips</div><span class="grey--text subtitle-1">1,000 miles of wonder</span></v-card-title> -->
										<v-card-actions>
											<v-btn text small outlined>Share</v-btn>
											<v-btn text small>
												<v-icon color="red" class="mr-2">favorite</v-icon>
                      </v-btn>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                          <v-btn small text color="purple" v-on="on"><v-icon>mdi-eye</v-icon></v-btn>
                        </template>
                        <span>Remove this photo</span>
                      </v-tooltip>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                          <v-btn small text  v-on="on"><v-icon  class="mr-2" color="red">mdi-heart</v-icon>{{image.likes.count}}</v-btn>
                        </template>
                        <span>Likes</span>
                      </v-tooltip>
										</v-card-actions>
										<v-expand-transition>
											<div v-show="show">
												<v-card-text>I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
											</div>
										</v-expand-transition>
									</v-card>
								</v-hover>
							</v-col>
						</v-row>
					</v-container>
				</v-tab-item>
			</v-tabs>
		</v-card>
	</v-container>
</template>
<script>

import VueGallery from 'vue-gallery';

  export default {
    data: () => ({
      show: false,
      result: [],
      images: [],
      openDelay: '0',
      closeDelay: '0',
      index: 0,
      value: false,
    }),
    mounted () {
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

          for (var i=0;i<this.result.length;i++)
          {
              // this.images[i] = this.result[i].images.standard_resolution.url
              this.images.push(this.result[i].images.standard_resolution.url)
          }
          console.log(this.images)
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
    components: {
      'gallery': VueGallery
    },
  }
</script>
