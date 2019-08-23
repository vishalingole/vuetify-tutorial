<template>
  <v-app id="forgot" >
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-end justify-end >
          <v-flex lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <img src="@/assets/logo.jpg" alt="Vue Material Admin" width="250px" >
                 <h2 class="flex my-1">Forgot My Password</h2>
                 <div class="flex my-3">Please provide your e-mail below. We will send you instructions to reset your password. </div>
                </div>

                <v-form>
                <div style="margin-top:10px">
                  <v-text-field
                    append-icon="person"
                    name="email"
                    label="Email"
                    type="text"
                    v-model="userEmail"
                    :error="error"
                    :rules="[rules.required]"/>
                </div>
                </v-form>
              </v-card-text>
              <v-card-actions >
                <v-spacer></v-spacer>
                <v-btn class="ma-2" @click="login" small outlined color="primary" >Submit</v-btn>
              </v-card-actions>
              <v-divider></v-divider>
              <v-layout row>
                <v-flex xs6>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline red--text">Can We Help?</div>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs6 align-content-end>
                  <v-card-title primary-title class="green--text">
                    <div>
                      <div><router-link class="green--text loginLinks" to ="/login">Sign In</router-link></div>
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

      var params = {
        email: vm.userEmail,
        password: vm.password,
      }
      // vm.$router.push({ name: 'Login' });
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
  #forgot {
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
