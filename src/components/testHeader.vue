<script>
import creatingBoard from './creatingBoard.vue';



export default{
    components:{
        creatingBoard
    },
    data(){
        creatingBoard.data
    },
    methods:{
        
       
    }
}
</script>

<template>
<div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start top">
    
    <a href="#" class="link">
                <div class="link_img">
                    <img src="../assets/Group.svg" alt="" class="img">
                </div>
            </a>

            <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Формы
            </button>
            <ul class="dropdown-menu">
                <li><button class="dropdown-item" href="#">Текст</button></li>
                <li><button class="dropdown-item" @click="" href="#">Прямоугольник</button></li>
            </ul>
            </div>

    <div class="position">
                <div class="position-wrapper">
                    <p class="text">W</p>
                    <p class="text-field">456</p>
                </div>
                <div class="position-wrapper">
                    <p class="text">H</p>
                    <p class="text-field">456</p>
                </div>
                <div class="position-wrapper">
                    <p class="text">X</p>
                    <p class="text-field">456</p>
                </div>
                <div class="position-wrapper">
                    <p class="text">Y</p>
                    <p class="text-field">456</p>
                </div>
            </div>
  </div>

  

  </template>



  <style>

.position-wrapper{
    display: flex;
    flex-direction: row;
    gap: 10px;
    
}
.position-wrapper:first-child{
    margin-left: 50px;
}

.position{
    display: flex;
    flex-direction: row;
    gap: 40px;
}
.link_img{
    margin-left: 60px;
    width: 35px;
    height: 35px;
}
.img{
    width: 100%;
    height: 100%;
}

.top{
background-color: #BABDBF;
display: flex;
flex-direction: row;
}


</style>