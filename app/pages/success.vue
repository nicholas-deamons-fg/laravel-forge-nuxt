<template>
<div>
  <h1>horray! You have successfully logged in.</h1>
  
</div>
</template>

<script setup>
import { onMounted } from "vue";
//const config = useRuntimeConfig()
//import { onMounted, ref } from 'vue';

const { loggedIn, user, session, fetch, clear, openInPopup } = useUserSession()
//const { loggedIn, user, session, fetch, clear, openInPopup } = useUserSession();



//console.log('User:', user);
// console.error('Session:', session);
onMounted(() => {
  console.log('Component mounted. Logged In:', loggedIn.value, 'User:', user.value);
  // lert(getCookie('nuxt-session'));
  //const params = new URLSearchParams(window.location.search);
  //window.opener.postMessage({
    //success: true,
    //code: params.get('code'),
  //});
})

/*
// await setUserSession(event, userData);
*/
</script>


<style>

</style>