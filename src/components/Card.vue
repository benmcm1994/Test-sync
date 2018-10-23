<template>
        <v-card >
            <v-card-title><h5>{{ title }}</h5></v-card-title>
            <v-card-text>{{ content }}</v-card-text>
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
        content: String,
        btn1: String,
        btn2: String
    }
}
</script>