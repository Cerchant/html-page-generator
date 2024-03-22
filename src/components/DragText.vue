<template>
    <draggable-resizable-vue
    class=" drag"
      v-model:x="element.x"
      v-model:y="element.y"
      v-model:h="element.height"
      v-model:w="element.width"
      v-model:active="element.isActive"
      :parent="true"
    > 
    <textarea ></textarea> 
  </draggable-resizable-vue>
</template>
  
<script setup>

import DraggableResizableVue from 'draggable-resizable-vue3';
import { ref } from 'vue';

  
  const element = ref({
    x: 0,
    y: 0,
    width: 100,
    height: 20,
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

  
textarea{
    width: 100%;
    height: 100%;
    background-color: gray;
    outline: none;
    appearance: none;
    border: none;
    box-shadow: none;
    border-style: none;
    padding: 0;
    margin: 0;
    overflow: hidden;
    resize: none;
 
  }

  </style>