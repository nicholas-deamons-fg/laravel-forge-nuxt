<template>
  <div>
    Character Viewer test
    <div class="lg:col-span-5 lg:border-l lg:border-gray-200 lg:pl-10">
      <p class="text-md font-semibold">
        {{
          loggedIn
            ? `Yo, ${user.user.battletag}!`
            : "Welcome to the ND Character Tracker"
        }}
      </p>
  
      <div class="grid grid-cols-4 mt-5">
        <div
          class="bg-gray-700 p-5 border-1 border-gray-300 rounded-lg col-span-1"
        >
          <p class="text-lg font-semibold mb-2">Armor Items</p>
          <div class="mt-1" v-for="item in armorItems">
            <ArmorItem :key="item.id" :armorItem="item" class="mb-1" />
          </div>
        </div>
        <div class="col-span-2">
          <div class="overflow-hidden">
            <img
              :src="avatarImg"
              alt="Character Image"
              class="rounded-lg w-full h-auto mb-4 scale-150"
            />
          </div>
        </div>
        <div
          class="bg-gray-700 p-5 border-1 border-gray-300 rounded-lg col-span-1"
        >
          <p class="text-lg font-semibold mb-2">Weapons</p>
          <div class="mt-1" v-for="item in armorItems">
            <ArmorItem :key="item.id" :armorItem="item" class="mb-1" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const { loggedIn, user, session, fetch, clear, openInPopup } = useUserSession()

const avatarImg = ref('https://render.worldofwarcraft.com/us/character/lothar/30/261996574-main-raw.png');

defineProps({
  armorItems: {
    type: Array,
    default: () => []
  }
});
</script>

