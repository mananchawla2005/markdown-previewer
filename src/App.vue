<template>
<Nav />
<Preview class="main" />
</template>

<script>
import Nav from './components/Nav.vue'
import Preview from './components/Preview.vue'

export default {
    name: 'App',
    components: {
        Nav,
        Preview
    }
}
</script>

<style scoped>
.main {
    padding: 7% 10%;
}

body {
    margin: 0;
}
</style>
