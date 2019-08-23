<template>
    <v-container>
         <v-breadcrumbs :items="items">
            <template v-slot:divider>
              <v-icon>forward</v-icon>
            </template>
        </v-breadcrumbs>
  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">
      Personal Details
      <small>Summarize if needed</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card color="" class="mb-12" height="200px">
        <v-row>
        <v-col
          v-for="n in 2"
          :key="n"
          cols="6"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            .col-6
          </v-card>
        </v-col>
      </v-row>
        <v-text-field outlined></v-text-field>

      </v-card>
      <v-btn outlined color="primary" @click="e6 = 2">Next</v-btn>
      <v-btn text >Back</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">Horoscope Details :</v-stepper-step>

    <v-stepper-content step="2">
      <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      <v-btn outlined color="primary" @click="e6 = 3">Next</v-btn>
      <v-btn @click="e6 = 1" outlined color="primary" class="ml-4">Back</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">Eductional Details :</v-stepper-step>

    <v-stepper-content step="3">
      <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      <v-btn color="primary" @click="e6 = 4">Next</v-btn>
      <v-btn text>Back</v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">Professional Details :</v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      <v-btn color="primary" @click="e6 = 5">Next</v-btn>
      <v-btn text>Back</v-btn>
    </v-stepper-content>
    <v-stepper-step step="5">Residence Details :</v-stepper-step>
    <v-stepper-content step="5">
      <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      <v-btn color="primary" @click="e6 = 6">Next</v-btn>
      <v-btn text>Back</v-btn>
    </v-stepper-content>
  <v-stepper-step step="6">Family Details :</v-stepper-step>
  <v-stepper-content step="6">
      <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      <v-btn color="primary" @click="e6 = 7">Next</v-btn>
      <v-btn text>Back</v-btn>
    </v-stepper-content>
  <v-stepper-step step="7">Expectations :</v-stepper-step>
  <v-stepper-content step="7">
      <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      <v-btn outlined color="primary" @click="e6 = 1">Finish</v-btn>
      <v-btn text>Cancle</v-btn>
    </v-stepper-content>
  </v-stepper>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        e6: 1,
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
      }
    },
  }
</script>