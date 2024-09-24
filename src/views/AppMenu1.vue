<template>
  <v-container>
    <!-- Radio group -->
    <v-row justify="center" class="mb-4">
      <v-col cols="auto">
        <v-radio-group v-model="color" hide-details inline>
          <v-radio color="indigo" label="indigo" value="indigo"></v-radio>
          <v-radio
            color="indigo-darken-3"
            label="indigo-darken-3"
            value="indigo-darken-3"
          ></v-radio>
          <v-radio color="primary" label="primary" value="primary"></v-radio>
          <v-radio
            color="secondary"
            label="secondary"
            value="secondary"
          ></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>

    <!-- Card display -->
    <v-row>
      <!-- Generate 16 cards -->
      <v-col v-for="n in 16" :key="n" cols="12" sm="6" md="3">
        <v-card :color="color" :variant="variant" class="mx-auto">
          <v-card-item>
            <div>
              <div class="text-overline mb-1">{{ variant }}</div>
              <div class="text-h6 mb-1">Headline {{ n }}</div>
              <div class="text-caption">
                Greyhound divisely hello coldly fonwderfully
              </div>
            </div>
          </v-card-item>
          <v-card-actions>
            <v-btn>Button</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

// eslint-disable-next-line no-unused-vars
const color = ref("indigo");
// eslint-disable-next-line no-unused-vars
const variant = "elevated"; // Can be dynamically set if needed
</script>

<style scoped>
.v-card {
  height: 100%;
}
.v-row {
  margin-bottom: 0;
}
.v-col {
  padding: 4px;
}
</style>
