<template>
    <draggable-resizable-vue
    
    class=" drag drag_rect"
      v-model:x="element.x"
      v-model:y="element.y"
      v-model:h="element.height"
      v-model:w="element.width"
      v-model:active="element.isActive"
      :parent="true"
      :z="element.zIndex"
    > 
    <div class="rect" id="прямоугольник_"></div>
  </draggable-resizable-vue>
  </template>
  
  <script setup>

import DraggableResizableVue from 'draggable-resizable-vue3';
import { ref } from 'vue';

  
  const element = ref({
    x: 0,
    y: 0,
    width: 200,
    height: 200,
    isActive: false,
  })

  

  </script>

  

  
  <style>

  .delete{
    display: none;
  }
  .grad{
    border: none;
  }

  .rect{
    background-color: red;
    width: 100%;
    height: 100%;
  }
  </style>