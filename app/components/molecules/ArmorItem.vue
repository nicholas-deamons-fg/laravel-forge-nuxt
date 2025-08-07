<template>
  <div class="  border-[3px] border-black rounded-sm w-16 h-16 oveflow-x-hidden overflow-y-hidden relative">
   
    <UPopover mode="hover">
       <img
            :src="armorItem.image"
            alt="Armor Item"
            class="block bold object-cover h-full  w-full"
        />

        <template #content>
        <div class="border-1 border-gray-200 rounded-lg p-2 bg-black text-white">
            <div class="text-md font-semibold">{{ armorItem.name }}</div>
            <p class="text-xs text-gray-400">{{ armorItem.description }}</p>
        </div>
        </template>
    </UPopover>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  armorItem: {
    type: Object,
    required: true
    } 
  }
)
</script>

<style>

</style>