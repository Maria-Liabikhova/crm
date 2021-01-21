<template>
  <v-row justify="center">
    <v-dialog  
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn 
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          class="mt-5"
        >
          Create user
        </v-btn>
      </template>
      <v-card >
        <v-card-title>
          <span class="headline">Please, enter user data</span>
        </v-card-title>
        <v-card-text >
          <v-container>
            <v-row>
<!-- First dada -->
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  label="First name*"
                  required
                ></v-text-field>
              </v-col>
<!-- End First dada -->
<!-- Second dada -->
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  label="Last name*"
                  required
                ></v-text-field>
              </v-col>
<!-- End second dada -->
<!-- Third dada -->
              <v-col cols="12">
                <v-text-field
                  label="Id*"
                  required
                ></v-text-field>
              </v-col>
<!-- End third dada -->
<!-- Fourth dada -->
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['Female', 'Male', 'Transgender']"
                  label="Gender"
                  required
                ></v-select>
              </v-col>
<!-- End fourth dada -->
<!-- Fifth dada -->
              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  :items="['Administrator', 'Client', 'Editor', 'Guest']"
                  label="Role"
                  multiple
                ></v-autocomplete>
              </v-col>
<!-- End fifth dada -->
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    }
  }
}
</script>

<style scoped>
.ll{
  border: 10px dashed red !important;
}
</style>