<template>

<v-card class="overflow-hidden">
    <v-app-bar
      color="#fcb69f"
      dark
      src="https://picsum.photos/1920/1080?random"
      scroll-target="#scrolling-techniques-2"
      app
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon ></v-app-bar-nav-icon>

      <v-toolbar-title>JodiDaar</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
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
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-2"
      class="overflow-y-auto"
      max-height="600"
    >
      <!-- <v-container style=""></v-container> -->
    </v-sheet>
  </v-card>
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