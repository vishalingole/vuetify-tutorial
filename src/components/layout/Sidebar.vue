<template>
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent
        class="sidebar"
      >
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
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

        <v-list dense>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </template>


<script>
export default {
    name: 'sidebar',
    data () {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ],
      mini: true,
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
.v-list__tile__title a{
  text-decoration: none;
  color: black;
}
.router-link-active{
  color:navy !important;
}
.sidebar {
    background-image: url('@/../../../assets/images/sidebar.jpg');
    background-size: cover;
    overflow:hidden;
    background-position: 100%;
    z-index: 2;
    color: white;
    height: 100%;
    background-repeat: no-repeat !important;
}
</style>

