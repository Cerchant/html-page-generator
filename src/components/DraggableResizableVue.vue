<template>
    <draggable-resizable-vue
      v-model:x="element.x"
      v-model:y="element.y"
      v-model:h="element.height"
      v-model:w="element.width"
      v-model:active="element.isActive"
      :show-grid="true"
      grid-color="rgba(0, 0, 0, 0.3)"
      
      axis="x"
    > 
    <div class="rect"></div>
  </draggable-resizable-vue>
  </template>
  
  <script setup>

import DraggableResizableVue from 'draggable-resizable-vue3';
import { ref } from 'vue';

  
  const element = ref({
    x: 300,
    y: 70,
    width: 200,
    height: 200,
    isActive: false,
  })
  </script>
  <style>

  .rect{
    background-color: red;
    width: 200px;
    height: 200px;
  }
  </style>