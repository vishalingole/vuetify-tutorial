<template>
  <v-app id="register" >
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-end justify-end >
          <v-flex xs12 sm8 md4 lg5>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <img src="@/assets/logo.jpg" alt="Vue Material Admin" width="250px" >
                  <h2 style="color:black">Register New Account </h2>
                  <div class="flex my-3"><b>IMPORTANT</b>: YOU MUST ENTER YOUR FIRST AND LAST NAMES EXACTLY AS THEY APPEAR ON YOUR PROFILE. </div>

                </div>
                <v-form>
                   <v-text-field
                    name="first_name"
                    v-model="first_name"
                    label="First Name*"
                    type="text"
                    :error="error"
                    :rules="[rules.required]"/>
                   <v-text-field
                    name="last_name"
                    v-model="last_name"
                    label="Last Name*"
                    type="text"
                    :error="error"
                    :rules="[rules.required]"/>
                  <v-text-field
                    name="email"
                    v-model="email"
                    label="Email*"
                    type="text"
                    :error="error"
                    :rules="[rules.required]"/>
                  <v-text-field
                    :type="hidePassword ? 'password' : 'text'"
                    name="password"
                    v-model="password"
                    label="Password*"
                    id="password"
                    :rules="[rules.required]"
                    :error="error"
                    @click:append="hidePassword = !hidePassword"/>
                    <v-text-field
                    :type="hidePassword ? 'password' : 'text'"
                    name="confirm_password"
                    label="Confirm Password*"
                    id="confirm_password"
                    :rules="[rules.required]"
                    v-model="confirm_password"
                    :error="error"
                    @click:append="hidePassword = !hidePassword"/>
                </v-form>
              </v-card-text>
              <v-card-actions >
                <v-spacer></v-spacer>
                <v-btn class="ma-2" @click="register" small outlined color="primary" >Register</v-btn>
              </v-card-actions>
              <v-divider></v-divider>
              <v-layout row>
                <v-flex xs8>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline red--text">Can We Help?</div>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs4 align-content-end>
                  <v-card-title primary-title class="green--text darken-4">
                    <div>
                      <div><router-link class="green--text loginLinks" to="/login">Sign In</router-link></div>
                      <div><router-link class="green--text loginLinks" to="register">Find More Help</router-link></div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-snackbar
        v-model="showResult"
        :timeout="2000"
        top>
        {{ result }}
      </v-snackbar>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'register',
  data() {
    return {
      loading: false,
      hidePassword: true,
      error: false,
      showResult: false,
      result: '',
      rules: {
        required: value => !!value || 'Required.'
      },
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: ''
    }
  },

  methods: {
    register() {
      const vm = this;
      var firstName = vm.first_name;
      var lastName = vm.last_name;
      var email = vm.email;
      var password = vm.password;
      var confirmPassword = vm.confirm_password;

      this.$store.dispatch('register',{ email, password, firstName, lastName }).then((response) => {
        console.log('Everything is awesome.');
        console.log(response)
        vm.$router.push({ name: 'Dashboard' });
      }).catch((error) => {
        console.log(error)
        console.warn('Not ola man :(');
        vm.error = true;
        vm.result = "Email or Password is incorrect.";
        vm.showResult = true;

      })

    }
  }
}
</script>

<style scoped lang="css">
  #register {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
    background-image: url('@/../../../assets/images/background.jpg');
    background-size: cover;
    overflow:hidden;
  }

  a {
      text-decoration:none;
  }
  .loginLinks {
      font-size:16px;
  }


</style>
