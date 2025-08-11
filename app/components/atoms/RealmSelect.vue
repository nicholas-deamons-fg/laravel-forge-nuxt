<template>
    <div class="">
        <div class="capitalize">{{ realmValue }}</div>
        <USelect v-model="realmValue" :items="realms" class="min-w-[200px]" />
    </div>
</template>

<script setup>

import { onMounted, ref, toRef } from 'vue';

const props = defineProps({
  realm: String,
  realms: {
    type: Array,
    default: () => []
  }
});


const realmsValue = ref([]);
const realmValue = ref(props.realm);

const emit = defineEmits(['realmChange', 'delete-item']);


onMounted(() => {
  console.log('RealmSelect component mounted', props.realms);
});

watch(realmValue, () => {
  console.log('Selected Realm changed:', realmValue.value);
  emit('realmChange', realmValue.value);
  // props.realm = newValue;
});



</script>