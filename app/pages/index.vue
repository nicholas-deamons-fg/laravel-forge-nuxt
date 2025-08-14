<template>
     <div class="p-20 max-w-xxl mx-auto">
      
      <UButton class="btn btn-primary cursor-pointer" 
         to="/auth/battlenet" external >Login with BNet</UButton>
        <div class="grid grid-cols-6 lg:gap-20">
          <AuthState>
            <div class="col-span-1">
               test for login state <br />{{ loggedIn ? 'Logged In' : 'Not Logged In' }}

            </div>
          </AuthState>
            <div class="lg:col-span-5 lg:border-l lg:border-gray-200 lg:pl-10 ">
               <p class="text-md font-semibold">
                {{loggedIn ? `Yo, ${user.user.battletag}!` : 'Welcome to the ND Character Tracker'}}</p>
               <p class="">Here you can track your favorite characters and their details.</p>
              
              <div class="mt-10" v-if="loggedIn && user.user.battletag">

                  <ULink :to="`/character?tag=${user.user.battletag}`">
                    Go to Character Page
                  </ULink>

              </div>
               <div class="grid grid-cols-4 mt-5"
               >
                  <div class="bg-gray-700 p-5 border-1 border-gray-300 rounded-lg col-span-1">
                     <p class="text-lg font-semibold mb-2">Armor Items</p>
                     <div class="mt-1"  v-for="item in armorItems">
                        <ArmorItem
                        
                           :key="item.id"
                           :armorItem="item"
                           class="mb-1"
                        />
                     </div>
                  </div>
                  <div class="col-span-2">
                     <div>
                        <img src="https://placehold.co/600x400" alt="Character Image" class="rounded-lg w-full h-auto mb-4" />
                     </div>
                  </div>
                  <div class="bg-gray-700 p-5 border-1 border-gray-300 rounded-lg col-span-1">
                     <p class="text-lg font-semibold mb-2">Weapons</p>
                     <div class="mt-1"  v-for="item in armorItems">
                        <ArmorItem
                        
                           :key="item.id"
                           :armorItem="item"
                           class="mb-1"
                        />
                     </div>
                     </div>
               </div>
            </div>
        </div>
     </div>
</template>
<script setup>
const config = useRuntimeConfig()
import { onMounted, ref } from 'vue';

const { loggedIn, user, session, fetch, clear, openInPopup } = useUserSession()

const characterInputValue = ref('')
const realmInputValue = ref('')

// const fetchUserData = async

// console.log('Runtime Config:', config, config.public.BNET_ID, config.public.BNET_CLIENT_SECRET);

const BNET_ID = ref(config.public.BNET_ID);
// console.log('BNET_ID:', BNET_ID.value);

watch(user, (newUser) => {
  console.log('User changed:', newUser);

  if (newUser) {
    // Fetch user data from the API
    /*  $fetch('https://us.api.blizzard.com/profile/user/wow?namespace=profile-us&locale=en_US', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${event.data.code}`,
            'Content-Type': 'application/json'
          }
        })
        */
    // fetchUserData(newUser.id);
  }

});
watch(loggedIn, () => {
   console.log('Logged In:', loggedIn.value);
  //if (!loggedIn.value) {
    //navigateTo('/')
  //}
})

onMounted(() => {
  // console.log('Component mounted. Logged In:', loggedIn.value, 'User:', user.value);
  //console.log('Session:', session.value);
  console.log('User:', user.value, 'session', session.value);
 window.addEventListener('message', function(event) {
        // Handle the received message here
        console.log('Message received from popup:', event.data);
        if (event.data.success) {
            console.log('Login successful!');
            console.log('Cookie:', event.data.code);

         }


       
       

        localStorage.setItem('bnet_code', event.data.code);

        console.log('get author token');

         //$fetch('/api/auth', {
          //method: 'POST',
          
        //})
        /*
         fetch('https://oauth.battle.net/token', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/x-www-form-urlencoded'
           },
           body: new URLSearchParams({
             grant_type: 'authorization_code',
             code: localStorage.getItem('bnet_code'),
             redirect_uri: 'http://localhost:3000/success',
             client_id:  config.public.BNET_ID,
             client_secret: config.public.BNET_CLIENT_SECRET
           })
         })
         .then(response => response.json())
         .then(data => {
           console.log('Token response:', data);
         })
         .catch(error => {
           console.error('Error fetching token:', error);
         });  /**/
         });
 });
   // const BNET_CLIENT_SECRET = ref(config
   // .public.BNET_CLIENT_SECRET);

// console.log('BNET_ID:', BNET_ID.value, 'BNET_CLIENT_SECRET:', BNET_CLIENT_SECRET.value);

const armorItems = ref([
  {
    id: 1,
    name: 'Helmet of Valor',
    description: 'A sturdy helmet that provides excellent protection.',
    image: 'https://placehold.co/600x400'
  },
  {
    id: 2,
    name: 'Chestplate of Strength',
    description: 'A heavy chestplate that enhances the wearer\'s strength.',
    image: 'https://placehold.co/600x400'
  },
  {
    id: 3,
    name: 'Boots of Agility',
    description: 'Lightweight boots that increase agility and speed.',
    image: 'https://placehold.co/600x400'
  }
])
</script>