<template>
    
</template>

<script>

export default {
    mounted(){
        this.$store.dispatch('auth/logout')
    }
}
</script>
