<script setup>
import DragResize from './DraggableResizableVue.vue';
import creatingBoard from './creatingBoard.vue';
import leftPanel from './leftPanel.vue';
import rightPanel from './rightPanel.vue';
</script>

<template>
    <div class="main-board">
        <leftPanel></leftPanel>
        <creatingBoard></creatingBoard>
        <rightPanel></rightPanel>
        <DragResize class="dr js-board"</DragResize>

        
    </div>
</template>


<style scoped>

.dr{
    display: none;
    
}

.main-board{
    display: flex;
    flex-direction: row;
}
</style>./creating_Board.vue