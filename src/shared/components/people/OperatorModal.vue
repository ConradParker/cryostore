<template>
  <v-dialog v-model="dialog" max-width="500px">
    <v-card>
      <v-card-title class="headline">
        Stanley Burgess
        <v-spacer></v-spacer>
        <v-btn icon @click="$emit('closeButtonClicked')">
          <v-icon>close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        We can display a bunch of information on the operator here in this pop up dialog box.
      </v-card-text>

    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: { type: Boolean, required: true },
  },
};
</script>
