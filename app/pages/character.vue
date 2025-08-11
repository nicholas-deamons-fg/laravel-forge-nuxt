<template>
  <div v-if="loggedIn">
    <div class="flex flex-row">
      
    </div>
    
    <div class="flex flex-row mt-5" v-if="!pending">
      
    <realm-select :realms="realms" :realm="realmInputValue" @realmChange="realmInputValue = $event" />
    <character-input v-model="characterInputValue" />
    <UButton @click="submitCharacter">Submit</UButton>
    </div>


    <character-viewer v-if="!pending && realmInputValue" :armor-items="armorItems"  />
  </div>
</template>

<script setup>
import { ref } from 'vue';
const { loggedIn, user, session, fetch, clear, openInPopup } = useUserSession()

const realmInputValue = ref('');
const characterInputValue = ref('');
const responseData = ref({value:null});
const realms = ref([]);
const pending = ref(true);
const armorItems = ref([]);
const characterData = ref(null);

onMounted(async () => {
    pending.value = true;
    await $fetch('https://us.api.blizzard.com/data/wow/realm/index?namespace=dynamic-us&locale=en_US', {
        headers: {
            'Authorization': `Bearer ${user.value.tokens.token}`,
            'Content-Type': 'application/json'
        }
        


    }).then((data) => {
        //responseData.value = data;
        console.log('Response Data:', data);
        realms.value = data.realms.map(realm => {
            return { label: realm.name, value: realm.slug };
        });
        console.log('Realms:', realms.value);
    }).catch((error) => {
        console.error('Error fetching realms:', error);
    }).finally(() => {
        pending.value = false;
    });
    
});

function submitCharacter() {
    if (!realmInputValue.value || !characterInputValue.value) {
        console.error('Realm and character inputs are required');
        return;
    }

    pending.value = true;

    // Simulate API call
    setTimeout(() => {
        armorItems.value = [
            { id: 1, name: 'Armor Piece 1', type: 'chest', rarity: 'rare' },
            { id: 2, name: 'Armor Piece 2', type: 'legs', rarity: 'epic' }
        ];
        characterData.value = {
            name: characterInputValue.value,
            realm: realmInputValue.value,
            armor: armorItems.value
        };
        pending.value = false;
    }, 1000);
}

</script>
