<template>
    <v-container>
        <v-layout align-start justify-start column fill-height>
                <CardFilter title="Signals" btn1="Submit" btn2="Cancel"></CardFilter>
                <CardFilter title="Signals" btn1="Submit" btn2="Cancel"></CardFilter>
        </v-layout>
    </v-container>
</template>

<script>
import CardFilter from "../CardFilter.vue";

export default {
  components: {
    CardFilter
  },
};
</script>
