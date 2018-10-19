<template>
    
</template>

<script>

export default {
    mounted(){
        localStorage.removeItem('token')
        this.$store.commit('auth/logoutUser')
        this.$router.push({
            name: 'login'
        })
        console.log("Token removed")
    }
}
</script>
