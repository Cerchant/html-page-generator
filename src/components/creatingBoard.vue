<script>
import drag from './DraggableResizableVue.vue';

export default{
    components: {drag},
    data() {
    return {
      cards: [],
      add: this.rect1
    }
  },
    methods:{
        rect1: function(){
            // const rectangle = document.querySelector('.js-board');
            // console.log(rectangle);
            // rectangle.style.display = 'block';
            this.cards.push({drag})
            console.log(this.cards)
        }
    }
}
    </script>

<template>
    <div class="creating-board js-board" >
        <div class="wrapper"  v-for="component in cards">
            <drag class="drag"></drag>
            <component :is="component"></component>
        </div>
        

    </div>

</template>


<style scoped>

.drag{
    background-color: #f1f1f1;
    width: 100px;
    height: 100px;
}

.creating-board{
background-color: #ffffff;
width: 100%;
height: 100%;
min-height: 100vh;
}

.rect{
    display: none;
    background-color: #f1f1f1;
    width: 100px;
    height: 100px;
}
</style>