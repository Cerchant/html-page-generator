<template>
    <draggable-resizable-vue
    class="dragimg"
      v-model:x="element.x"
      v-model:y="element.y"
      v-model:h="element.height"
      v-model:w="element.width"
      v-model:active="element.isActive"
      :parent="true"
      :lock-aspect-ratio="true"
    > 
  </draggable-resizable-vue>
</template>
  
<script setup>

import DraggableResizableVue from 'draggable-resizable-vue3';
import { ref } from 'vue';

  
  const element = ref({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    isActive: true,
  })
  </script>

  

  
  <style>

  .delete{
    display: none;
  }
  .drag{
    border: none;
  }
img{
    width: 100%;
    height: 100%;
}

  </style>