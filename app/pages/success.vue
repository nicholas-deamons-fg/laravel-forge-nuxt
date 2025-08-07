<template>
<div>
  <h1>horray! You have successfully logged in.</h1>
  
</div>
</template>

<script setup>
const { loggedIn, user, session, fetch, clear, openInPopup } = useUserSession()
console.log('User:', user);
console.error('Session:', session);
await setUserSession(event, userData);

</script>


<style>

</style>