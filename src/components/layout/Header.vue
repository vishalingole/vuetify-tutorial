<template>
    <div>
    <v-toolbar>
        <v-toolbar-title>Trex</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">

            <v-menu offset-y
             content-class="dropdown-menu"
            transition="slide-y-transition">
            <template v-slot:activator="{ on }">
                 <v-btn icon v-on="on">
                    <v-avatar size="40" color="grey lighten-4">
                    <img src="https://lh3.googleusercontent.com/-wKWbeB_VoX0/WHdEeqb_yPI/AAAAAAAAAZI/Wo-d53turz8V9juFmAUUl7UlI5x144XjwCEwYBhgL/w140-h139-p/IMG_9049%2B-%2BUG%25281%2529.JPG">
                    </v-avatar>
                </v-btn>
            </template>
            <v-list dense rounded >
                <v-list-item
                v-for="(item, index) in header_menu"
                :key="index"
                :to="item.link"
                >
                <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list>
            </v-menu>
        </v-toolbar-items>
    </v-toolbar>
    </div>

</template>

<script>
export default {
    name: 'afterlogin',
    data: () => ({
      drawer: null,
      header_menu: [
                {
                    title: 'Profile',
                    link: '/profile',
                    icon: 'logout'
				},
				{
                    title: 'Subscription',
                    link: '/subscription',
                    icon: 'subscriptions'
				},
				{
                    title: 'Reset Password',
                    link: '/reset-password',
                    icon: 'logout'
				},
				{
                    title: 'Logout',
                    link: '/logout',
                    icon: 'logout'
				}
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