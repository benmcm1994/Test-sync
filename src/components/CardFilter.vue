<template>
    <v-card >
        <v-card-title>{{ title }}</v-card-title>
        <v-card-text></v-card-text>
        <v-card-actions>
            <v-btn flat color="orange">{{ btn1 }}</v-btn>
            <v-btn flat color="orange">{{ btn2 }}</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: {
        title: String,
        btn1: String,
        btn2: String
    }
}
</script>