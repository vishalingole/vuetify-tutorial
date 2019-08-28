<template>
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent
        class="sidebar"
        fixed app
      >
      <v-toolbar :color="$root.themeColor" class="toolbar">
      <router-link :to="{ name: 'Dashboard' }">
        <!-- <img src="@/assets/logo.jpg" width="100px"> -->
      </router-link>
    </v-toolbar>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://lh3.googleusercontent.com/-wKWbeB_VoX0/WHdEeqb_yPI/AAAAAAAAAZI/Wo-d53turz8V9juFmAUUl7UlI5x144XjwCEwYBhgL/w140-h139-p/IMG_9049%2B-%2BUG%25281%2529.JPG"></v-img>
          </v-list-item-avatar>

          <v-list-item-title>Vishal Ingole</v-list-item-title>

          <v-btn
            icon
            @click.stop="mini = !mini"
          >
            <v-icon>chevron_left</v-icon>
          </v-btn>
        </v-list-item>

        <v-divider></v-divider>
        <v-list dense rounded>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :to="item.link"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </template>


<script>
export default {
    name: 'sidebar',
    data () {
    return {
      drawer: true,
      item:'',
      items: [
        {
                    link: '/dashboard',
                    title: 'Dashboard',
                    icon: 'dashboard'
				},
				{
                    title: 'Photo Gallary',
                    link: '/gallary',
                    icon: 'photo_album'
				},
				{
                    title: 'Search',
                    link: '/search',
                    icon: 'search'
				},
				{
                    title: 'Success Stories',
                    link: '/success-stories',
                    icon: 'amp_stories'
        },
        {
                    title: 'About Us',
                    link: '/about-us',
                    icon: ''
				},
				{
                    title: 'Contact Us',
                    link: '/contact-us',
                    icon: 'phone'
				},
      ],
      mini: false,
    }
  },
    methods: {
       logout () {
          const vm = this;

            vm.$router.push({ name: 'Login' });
       }
    },
    props: {
      source: String
    }
}
</script>

<style scoped>
.sidebar {
    /* background-image: url('@/../../../assets/images/sidebar.jpg'); */
    background-size: cover;
    overflow:hidden;
    background-position: 100%;
    z-index: 0;
    /* color: white; */
    /* height: 100%; */
    background-repeat: no-repeat !important;
}
</style>

