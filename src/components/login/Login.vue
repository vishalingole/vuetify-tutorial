<template>
  <v-app id="login" >
      <v-content>
        <v-container fluid fill-height>
        <v-layout align-center justify-center >
          <v-flex xs12 sm8 md4 lg5>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <img src="./../../assets/logo.png" alt="Vue Material Admin" width="250px" >
                  <h2 style="color:black">Welcome To Trex  </h2>
                </div>
                <v-form>
                  <v-text-field
                    append-icon="person"
                    name="login"
                    label="Email"
                    type="text"
                    v-model="userEmail"
                    :error="error"
                    :rules="[rules.required]"/>
                  <v-text-field
                    :type="hidePassword ? 'password' : 'text'"
                    :append-icon="hidePassword ? 'visibility_off' : 'visibility'"
                    name="password"
                    label="Password"
                    id="password"
                    :rules="[rules.required]"
                    v-model="password"
                    :error="error"
                    @click:append="hidePassword = !hidePassword"/>
                </v-form>
              </v-card-text>
              <v-card-actions >
                <v-spacer></v-spacer>
                <v-btn class="ma-2" @click="login" outlined color="primary" >Login</v-btn>
              </v-card-actions>
              <v-divider></v-divider>
               <v-layout row>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline red--text">Can We Help?</div>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5 align-content-end>
                  <v-card-title primary-title class="green--text">
                    <div>
                      <div><router-link class="green--text loginLinks" to="forgot-password">Forgot My Password</router-link></div>
                      <div><router-link class="green--text loginLinks" to="register">Register New Account</router-link></div>
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
  data() {
    return {
      loading: false,
      userEmail: 'vishal.ingole3@gmail.com',
      password: 'test@1234',
      hidePassword: true,
      error: false,
      showResult: false,
      result: '',
      rules: {
        required: value => !!value || 'Required.'
      }
    }
  },

  methods: {
    login() {
      const vm = this;

      if (!vm.userEmail || !vm.password) {

        vm.result = "Email and Password can't be null.";
        vm.showResult = true;

        return;
      }

    //   var params = {
    //     email: vm.userEmail,
    //     password: vm.password,
    //   }
      vm.$router.push({ name: 'Dashboard' });
      //  vm.axios.post('http://192.168.2.33:8080/api/v1/users/login', params).then((response) => {
      //    console.log(response.data);
      //       console.log('Everything is awesome.');
      //      vm.$router.push({ name: 'Dashboard' });

      //   }).catch((error) => {
      //       console.warn('Not good man :(');
      //       vm.error = true;
      //       vm.result = "Email or Password is incorrect.";
      //       vm.showResult = true;
      //   })
    }
  }
}
</script>

<style scoped lang="css">
  #login {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    /* content: ""; */
    /* z-index: 50; */
    /* background-image: url('@/../../../assets/images/background.jpg'); */
    /* background: green; */
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