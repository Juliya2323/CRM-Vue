<template lang="pug">
nav.nav
      .nav_logo
        img.nav_logo_img(:src="Logo" alt="logo")
        h1.nav_logo_title Base
      ul.nav_list
        li.nav_list_item 
            router-link.nav-list_item_link(to='/dashboard')  Dashboard 
            router-link.nav-list_item_link(to='/analytics')  Analytict 
</template>

<script setup>
import Logo from '../assets/icons/logo.svg';
</script>

<style scoped lang="scss">

</style>