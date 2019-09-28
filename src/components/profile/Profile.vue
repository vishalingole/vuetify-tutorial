<template>
    <v-container>
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
              <v-icon>forward</v-icon>
            </template>
        </v-breadcrumbs>
  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1" class="font-weight-light">
      Personal Details
      <small>Summarize if needed</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card color="" class="mb-12" min-height="200px">
        <v-row>
        <v-col
          cols="6"
          md="6"
        >
          <v-text-field
            v-model="first_name"
            label="First Name"
            outlined
            shaped
          ></v-text-field>
        </v-col>

        <v-col
          cols="6"
        >
          <v-text-field
            v-model="last_name"
            label="Last Name"
            outlined
            shaped
          ></v-text-field>
        </v-col>
        <v-col
          cols="6"
        >
          <v-text-field
            v-model="middle_name"
            label="Middle Name"
            outlined
            shaped
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="Weight"
            value="30"
            suffix="Kgs"
            outlined
            shaped
          ></v-text-field>
        </v-col>
      <v-col sm="6">
         <v-select
            v-model="sub_caste"
            :items="list"
            label="Sub Caste"
            outlined
            shaped
            dense
                      ></v-select>
      </v-col>
      <v-col sm="6">
         <v-select
            v-model="marrige_status"
            :items="maritial_status"
            label="Maritial Status"
            outlined
            shaped
            dense
          ></v-select>
      </v-col>

      <v-col sm="6">
         <v-select
            v-model="blood_group"
            :items="maritial_status"
            label="Blood Group"
            outlined
            shaped
            dense
          ></v-select>
      </v-col>

      <v-col cols="6" md="6">
         <v-select
            v-model="complexion"
            :items="maritial_status"
            label="Complexion"
            outlined
            shaped
            dense
          ></v-select>
      </v-col>

      </v-row>
      </v-card>
      <v-btn outlined color="primary" @click="e6 = 2">Next</v-btn>
      <v-btn outlined color="primary" class="ml-4">Back</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">Horoscope Details :</v-stepper-step>

    <v-stepper-content step="2">
      <v-card color="" class="mb-12" height="200px">
        <v-container>
        <v-row>
        <v-col
          cols="6"
        >
          <v-text-field
            v-model="birth_place"
            label="Birth Place"
            outlined
            shaped
          ></v-text-field>
        </v-col>

        <v-col
          cols="6"
        >
          <v-text-field
            v-model="gotra"
            label="Gotra / Devak"
            outlined
            shaped
          ></v-text-field>
        </v-col>
        <v-col
          cols="6"
        >
          <v-text-field
            v-model="middle_name"
            label="Middle Name"
            outlined
            shaped
          ></v-text-field>
        </v-col>

      </v-row>
    </v-container>

      </v-card>
      <v-btn outlined color="primary" @click="e6 = 3">Next</v-btn>
      <v-btn @click="e6 = 1" outlined color="primary" class="ml-4">Back</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">Eductional Details :</v-stepper-step>

    <v-stepper-content step="3">
      <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      <v-btn outlined color="primary" @click="e6 = 4" >Next</v-btn>
      <v-btn outlined color="primary" class="ml-4">Back</v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">Professional Details :</v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      <v-btn outlined color="primary" @click="e6 = 5">Next</v-btn>
      <v-btn outlined color="primary" class="ml-4">Back</v-btn>
    </v-stepper-content>
    <v-stepper-step step="5">Residence Details :</v-stepper-step>
    <v-stepper-content step="5">
      <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      <v-btn outlined color="primary" @click="e6 = 6">Next</v-btn>
      <v-btn outlined color="primary" class="ml-4">Back</v-btn>
    </v-stepper-content>
  <v-stepper-step step="6">Family Details :</v-stepper-step>
  <v-stepper-content step="6">
      <v-card color="grey lighten-3" class="mb-12" height="200px">


        <v-col
          class="text-right"
          cols="6"
        >
        <v-autocomplete
              v-model="friends"
              :disabled="isUpdating"
              :items="people"
              label="Preferred City"
              multiple
              outlined
              shaped
            >
              <template v-slot:selection="data">
                <v-chip
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  close
                  @click="data.select"
                  @click:close="remove(data.item)"
                >
                  <v-avatar left>
                    <v-img :src="data.item.avatar"></v-img>
                  </v-avatar>
                  {{ data.item.name }}
                </v-chip>
              </template>
              <template v-slot:item="data">
                <template v-if="typeof data.item !== 'object'">
                  <v-list-item-content v-text="data.item"></v-list-item-content>
                </template>
                <template v-else>
                  <v-list-item-avatar>
                    <img :src="data.item.avatar">
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="data.item.name"></v-list-item-title>
                    <v-list-item-subtitle v-html="data.item.group"></v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </template>
            </v-autocomplete>
        </v-col>
      </v-card>
      <v-btn outlined color="primary" @click="e6 = 7">Next</v-btn>
      <v-btn outlined color="primary" class="ml-4">Back</v-btn>
    </v-stepper-content>
  <v-stepper-step step="7">Expectations :</v-stepper-step>
  <v-stepper-content step="7">
      <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      <v-btn outlined color="primary" @click="e6 = 1">Finish</v-btn>
      <v-btn outlined color="primary" class="ml-4">Cancle</v-btn>
    </v-stepper-content>
  </v-stepper>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        e6: 6,
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
        list: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        maritial_status: ['Unmarried', 'Divorcee', 'Window', 'Windower'],
        people: ['Hingoli','pune']

      }
    },
    methods: {
      remove (item) {
        console.log(item)
        const index = this.people.indexOf(item.name)
        if (index >= 0) this.people.splice(index, 1)
      },
    },
  }
</script>