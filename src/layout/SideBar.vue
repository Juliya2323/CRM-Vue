<template lang="pug">
.sidebar
  nav.nav
    .nav_logo(@click="onMain")
      img.nav_logo_img(:src="Logo" alt="logo")
      h1.nav_logo_title Base
    ul.nav_list
      router-link.nav_list_item(to='/dashboard' :class="{ active: route.name === 'dashboard' }")
        li.nav_list_item_content
          svg.nav_list_item_svg(:class="{ active: route.name === 'dashboard' }" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg")
            path(:class="{ active: route.name === 'dashboard' }" fill-rule="evenodd" clip-rule="evenodd" d="M4.53988 2H7.91988C9.32988 2 10.4599 3.15 10.4599 4.561V7.97C10.4599 9.39 9.32988 10.53 7.91988 10.53H4.53988C3.13988 10.53 1.99988 9.39 1.99988 7.97V4.561C1.99988 3.15 3.13988 2 4.53988 2ZM4.53988 13.4697H7.91988C9.32988 13.4697 10.4599 14.6107 10.4599 16.0307V19.4397C10.4599 20.8497 9.32988 21.9997 7.91988 21.9997H4.53988C3.13988 21.9997 1.99988 20.8497 1.99988 19.4397V16.0307C1.99988 14.6107 3.13988 13.4697 4.53988 13.4697ZM19.46 2H16.08C14.67 2 13.54 3.15 13.54 4.561V7.97C13.54 9.39 14.67 10.53 16.08 10.53H19.46C20.86 10.53 22 9.39 22 7.97V4.561C22 3.15 20.86 2 19.46 2ZM16.08 13.4697H19.46C20.86 13.4697 22 14.6107 22 16.0307V19.4397C22 20.8497 20.86 21.9997 19.46 21.9997H16.08C14.67 21.9997 13.54 20.8497 13.54 19.4397V16.0307C13.54 14.6107 14.67 13.4697 16.08 13.4697Z" fill="#030229" opacity="0.4")
          span Dashboard
      router-link.nav_list_item(to='/analytics' :class="{ active: route.name === 'analytics' }")
        li.nav_list_item_content
          svg.nav_list_item_svg(width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg")
            g(opacity="0.4" :class="{ active: route.name === 'analytics' }")
              path(:class="{ active: route.name === 'analytics' }" fill-rule="evenodd" clip-rule="evenodd" d="M7.33037 2.00049H16.6694C20.0704 2.00049 21.9904 3.92949 22.0004 7.33049V16.6705C22.0004 20.0705 20.0704 22.0005 16.6694 22.0005H7.33037C3.92937 22.0005 2.00037 20.0705 2.00037 16.6705V7.33049C2.00037 3.92949 3.92937 2.00049 7.33037 2.00049ZM12.0494 17.8605C12.4804 17.8605 12.8394 17.5405 12.8794 17.1105V6.92049C12.9194 6.61049 12.7704 6.29949 12.5004 6.13049C12.2194 5.96049 11.8794 5.96049 11.6104 6.13049C11.3394 6.29949 11.1904 6.61049 11.2194 6.92049V17.1105C11.2704 17.5405 11.6294 17.8605 12.0494 17.8605ZM16.6504 17.8605C17.0704 17.8605 17.4294 17.5405 17.4804 17.1105V13.8305C17.5094 13.5095 17.3604 13.2105 17.0894 13.0405C16.8204 12.8705 16.4804 12.8705 16.2004 13.0405C15.9294 13.2105 15.7804 13.5095 15.8204 13.8305V17.1105C15.8604 17.5405 16.2194 17.8605 16.6504 17.8605ZM8.21937 17.1105C8.17937 17.5405 7.82037 17.8605 7.38937 17.8605C6.95937 17.8605 6.59937 17.5405 6.56037 17.1105V10.2005C6.53037 9.88949 6.67937 9.58049 6.95037 9.41049C7.21937 9.24049 7.56037 9.24049 7.83037 9.41049C8.09937 9.58049 8.25037 9.88949 8.21937 10.2005V17.1105Z" fill="#030229")
          span Analytics
  .sidebar_wrapper 
    .sidebar_upgrade 
      img.upgrade_bg(src='../assets/images/manage_bg.jpg')
      base-button.upgrade_button Upgrade Now
    .sidebar_account 
      .account_info 
        img.account_info_img(src="../assets/images/account.png" alt="photo")
        .account_info_text 
          h3.info_text_name Easin Arafat
          h3.info_text_position Free Account
      img.account_logout(src="../assets/icons/logout.svg" alt="logout")
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from 'vue-router';
import Logo from "../assets/icons/logo.svg";
const router = useRouter();
const route = useRoute();


function onMain() {
  router.push('/dashboard');
  console.log(route.name);
}
</script>

<style scoped lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  width: 219px;
  justify-content: space-between;
  background-color: var(--white);
  padding: 50px 0 30px;
}

.nav {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 38px;

  &_logo {
    display: flex;
    gap: 15px;
    padding: 0 53px 0;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &_title {
      margin: 0;
    }
  }

  &_list {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;

    &_item {
      display: inline-block;
      width: 100%;
      text-decoration: none;
      font-weight: 600;
      font-size: 16px;
      line-height: 18px;
      color: var(--black);
      opacity: 0.4;
      transition: all 0.3s ease-out;

      

      &:hover {
        path {
          fill: var(--purple);
          opacity: 1;
        }

        g {
          opacity: 1;
        }

        
          color: var(--purple);
          opacity: 1;
        
      }

      &_svg {
        width: 24px;
        height: 24px;
        g {
          transition: all 0.3s ease-out;
        }

        path {
          transition: all 0.3s ease-out;
        }
      }

      &_content {
        display: flex;
        gap: 14px;
        align-items: center;
        list-style-type: none;
        padding: 12px 28px;
        box-sizing: border-box;
        cursor: pointer;
        transition: all 0.3s ease-out;
      }
    }
  }
}

.active {
  fill: var(--purple);
  opacity: 1;
  color: var(--purple);
}

.sidebar_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  .sidebar_upgrade {
    position: relative;
    display: flex;
    justify-content: center;
    justify-content: center;

    .upgrade_bg {
      background-color: url("../assets/icons/manage_bg.svg");
    }

    .upgrade_button {
      position: absolute;
      bottom: 20px;
    }
  }

  .sidebar_account {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    cursor: pointer;

    .account_info {
      display: flex;
      justify-content: flex-start;
      gap: 10px;

      &_text {
        display: flex;
        flex-direction: column;
        gap: 6px;
        align-items: flex-start;
        justify-content: center;

        .info_text_name {
          font-weight: 600;
          font-size: 12px;
          margin: 0;
        }

        .info_text_position {
          font-weight: 400;
          font-size: 10px;
          color: var(--medium);
          margin: 0;
        }
      }
    }
  }
}
</style>
