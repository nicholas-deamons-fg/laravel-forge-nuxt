<template>
     <div class="p-20 max-w-xxl mx-auto">
      <button class="btn btn-primary cursor-pointer" 
         @click="openInPopup('https://oauth.battle.net/authorize?client_id=' + BNET_ID + '&redirect_uri=http://localhost:3000/success&response_type=code&region=us&state=ndcharactert')">Login with BNet</button>
        <div class="grid grid-cols-6 lg:gap-20">
            <div class="col-span-1">
               test {{ loggedIn ? 'Logged In' : 'Not Logged In' }}

            </div>
            <div class="lg:col-span-5 lg:border-l lg:border-gray-200 lg:pl-10 ">
               <p class="text-md font-semibold">Welcome to the ND Character Tracker</p>
               <p class="">Here you can track your favorite characters and their details.</p>
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
const runtimeConfig = useRuntimeConfig();
import { ref } from 'vue';

const { loggedIn, user, session, fetch, clear, openInPopup } = useUserSession()

const config = useRuntimeConfig()

console.log('Runtime Config:', config, config.public.BNET_ID, config.public.BNET_CLIENT_SECRET);

const BNET_ID = ref(config.public.BNET_ID);
console.log('BNET_ID:', BNET_ID.value);

watch(user, (newUser) => {
  console.log('User changed:', newUser);
});
watch(loggedIn, () => {
   console.log('Logged In:', loggedIn);
  if (!loggedIn.value) {
    navigateTo('/')
  }
})

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