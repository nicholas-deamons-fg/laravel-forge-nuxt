<template>
  <UInput v-model="characterValue" />
</template>
<script >
import { ref, toRef } from 'vue';

export default {
setup(props) {
  const characterValue = toRef(props, 'characterInput');

  
  
  return {
    characterValue
  }
},
mounted() {
  // This lifecycle hook is called when the component is mounted
  console.log('CharacterInput component mounted')
}
}
</script>
