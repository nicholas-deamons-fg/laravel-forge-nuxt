<template>
  
    <div>
        <div class="grid grid-cols grid-cols-7">
            <div class="col-span-1">
                <slot name="left-armor">
                    
                </slot>
            </div>
            <div class="col-span-5">
                <slot name="character"></slot>
            </div>,
            <div class="col-span-1">
                <slot name="right-armor"></slot>
            </div>
        </div>
        <div >
            <slot name="main-hand"></slot>
            <slot name="off-hand"></slot>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style>

</style>