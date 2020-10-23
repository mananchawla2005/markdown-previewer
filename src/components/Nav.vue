<template>
<div class="nav">
    <div class="nav-header">
        <div class="nav-title">
            Markdown Previewer
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Nav'
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}

body {
    margin: 0px;
    font-family: 'segoe ui';
}

.nav {
    width: 100%;
    background-color: #4d4d4d;
    position: relative;
    text-align: center;
}

.nav>.nav-header {
    display: inline;
}

.nav>.nav-header>.nav-title {
    font-family: Arial, Helvetica, sans-serif;
    display: inline-block;
    font-size: 22px;
    color: #fff;
    padding: 20px;

}
</style>
