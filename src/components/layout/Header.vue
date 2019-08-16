<template>
    <div>
    <v-toolbar clipped-left dark>
        <v-toolbar-side-icon  @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
        <v-toolbar-title>Trex</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
        <!-- <v-btn flat>Link One</v-btn> -->
        <!-- <v-btn flat>Link Two</v-btn> -->
        <v-menu
            offset-y
            content-class="dropdown-menu"
            transition="slide-y-transition">
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-avatar size="40" color="grey lighten-4">
                    <img src="https://lh3.googleusercontent.com/-wKWbeB_VoX0/WHdEeqb_yPI/AAAAAAAAAZI/Wo-d53turz8V9juFmAUUl7UlI5x144XjwCEwYBhgL/w140-h139-p/IMG_9049%2B-%2BUG%25281%2529.JPG">
                    </v-avatar>
                </v-btn>
            </template>
            <v-card>
                <v-list dense>
                    <v-list-tile
                    v-for="notification in header_menu"
                    :key="notification"
                    >
                    <v-list-tile-action><v-icon>{{notification.icon}}</v-icon></v-list-tile-action>
                    <v-list-tile-title
                        v-text="notification.title" :to="notification.link"
                        />
                    </v-list-tile>
                </v-list>
            </v-card>
        </v-menu>
        </v-toolbar-items>
    </v-toolbar>
    </div>

</template>

<script>
export default {
    name: 'header',
    data: () => ({
      drawer: null,
      header_menu: [
				{
                    title: 'Subscription',
                    link: '/subscription',
                    icon: 'subscriptions'
				},
				{
                    title: 'Reset Password',
                    link: '/reset-password'
				},
				{
                    title: 'Logout',
                    link: '/logout',
                    icon: 'logout'
				}
      ],
      main_menus: [
				{
                    link: '/dashboard',
                    title: 'Dashboard',
                    icon: 'dashboard'
				},
				{
                    title: 'Photo Gallary',
                    link: '/gallary',
                    icon: 'album'
				},
				{
                    title: 'Search',
                    link: '/search',
                    icon: 'search'
				},
				{
                    title: 'Success Stories',
                    link: '/success-stories',
                    icon: 'search'
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
      notifications: [
        'Mike, John responded to your email',
        'You have 5 new tasks',
        'You\'re now a friend with Andrew',
        'Another Notification',
        'Another One'
      ]
    })
}
</script>