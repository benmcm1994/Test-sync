<template>
    <v-container>
        <v-layout row wrap>
                <CardFilter title="Accounts" body="Accounts body" action="Account action"></CardFilter>
        </v-layout>
    </v-container>
</template>

<script>
import CardFilter from "../CardFilter.vue";

export default {
  components: {
    CardFilter
  }
};
</script>
