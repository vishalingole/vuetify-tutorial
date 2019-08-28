<template>
    <v-container>
       <v-breadcrumbs :items="items" >
            <template v-slot:divider>
              <v-icon>forward</v-icon>
            </template>
        </v-breadcrumbs>

        <carousel style="border:1px solid;height:400px">
            <slide class="mb-5 mt-5">
            <v-card
                class="mx-auto"
                :flat="flat"
                :loading="loading"
                :outlined="outlined"
                :elevation="elevation"
                :raised="raised"
                :width="width"
                :height="height"
                mb-5
                >
                <v-img
                    v-if="media"
                    class="white--text"
                    height="200px"
                    src="https://lh3.googleusercontent.com/-wKWbeB_VoX0/WHdEeqb_yPI/AAAAAAAAAZI/Wo-d53turz8V9juFmAUUl7UlI5x144XjwCEwYBhgL/w140-h139-p/IMG_9049%2B-%2BUG%25281%2529.JPG"
                >
                    <v-card-title class="align-end fill-height" color="primary">Vishal Ingole</v-card-title>
                </v-img>
                <v-card-title v-else>I'm a title</v-card-title>

                <v-card-text>I'm card text</v-card-text>
                <v-card-actions v-if="actions">
                    <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                    </v-btn>
                    <v-btn text>Click</v-btn>
                    <v-btn outlined>Click</v-btn>
                </v-card-actions>
                </v-card>
            </slide>
            <slide class="mb-2 mt-5">
                Slide 2 Content
            </slide>
            <slide class="mb-2 mt-5">
                Slide 3 Content
            </slide>
            </carousel>


    </v-container>
</template>

<script>

import { Carousel, Slide } from 'vue-carousel';

export default {
   data () {
      return {
            items: [
        {
          text: 'Dashboard',
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
      flat: false,
      media: true,
      loading: false,
      actions: true,
      outlined: false,
      elevation: undefined,
      raised: false,
      width: 230,
      height: 330,
      }
      },
      components: {
            Carousel,
            Slide
        }
}
</script>

<style scoped>

</style>
