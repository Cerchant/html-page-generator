<script>
import axios from 'axios';
import dragImg from './DragImg.vue';
import dragText from './DragText.vue';
import drag from './DraggableResizableVue.vue';
export default{
    components: {drag, dragText, dragImg},
    data() {
    return {
      cards: [],
      cardsText:[],
      cardsImg:[],
      element:{
        coord:'',
        width:'',
        height:''
      }
    }
  },
    methods:{
        rect1: function(){
            this.cards.push('drag')
        },

        text: function(){
            this.cardsText.push('dragText')
        },
        createPost: function(){
            const arr=[]
            const rect = document.querySelector('.js-board').children
            for (const elem of rect){
                this.element.coord=elem.style.transform
                this.element.width = elem.style.width
                this.element.height = elem.style.height
                arr.push(JSON.stringify(this.element))
                console.log(arr)
            }

//             fetch("https://reqres.in/api/articles", {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type':'application/x-www-form-urlencoded'
//   },
//                 body: JSON.stringify(arr)
//             }).then(response=>console.log(response))
//                 .catch(error=>console.log(error))

            axios.post("https://reqres.in/api/articles", arr)
                .then(response=>console.log(response))
                .catch(error=>console.log(error))
        },
        imgFunc: function(){
            this.cardsImg.push('dragImg')
            const img = document.createElement('img')
            const myImg = document.querySelector('.inputImg')
            myImg.onchange = function(event) {
            var target = event.target;

            if (!FileReader) {
                alert('FileReader не поддерживается — облом');
                return;
            }

            if (!target.files.length) {
                alert('Ничего не загружено');
                return;
            }

            var fileReader = new FileReader();
            fileReader.onload = function() {
                img.src = fileReader.result;
            }

            fileReader.readAsDataURL(target.files[0]);
            const drag = document.querySelector('.dragimg')
                console.log(drag)
                drag.append(img)
        }
                }
            }
}

</script>

<template>
    <div class="d-flex flex-wrap align-items-center   top wr">
    
                <div class="link_img" @click="createPost">
                    <img src="../assets/Group.svg" alt="" class="img">
                </div>
        

            <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Формы
            </button>
            <ul class="dropdown-menu">
                <li><button class="dropdown-item" @click="text()" href="#">Текст</button></li>
                <li><button class="dropdown-item" @click="rect1()" href="#">Прямоугольник</button></li>
            </ul>
            </div>

    <!-- <div class="position">
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
            </div> -->

            <input type="file" class="inputImg" @click="imgFunc()">
  </div>

  
    <div class="main-board">
        <div class="left-panel">
        </div>
        <div class="creating-board js-board" >
            <component v-for="component in cards" :is="component"></component>
            <component v-for="component in cardsText" :is="component"></component>
            <component v-for="component in cardsImg" :is="component"></component>
            
    </div>
    <div class="right-panel">

</div>
        
    </div>
</template>


<style scoped>
.btnBtn{
    width: 50px;
    height: 20px;
}

.dropdown{
  
}

.wr{
    gap: 30px;
    padding-left: 0;
}
.wrapper{
    background-color: #ffffff;
width: 100%;
height: 100%;
min-height: 100vh;
}

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
    margin-left: 30px;
    width: 40px;
    height: 50px;
    cursor: pointer;
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

.right-panel{
background-color: #BABDBF;
width: 383px;
height: 100%;
min-height: 100vh;
}

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
.left-panel{
    background-color: #BABDBF;
    width: 383px;
    height: 100%;
    min-height: 100vh;
}
.input-file {
	position: relative;
	display: inline-block;
}
.input-file span {
	position: relative;
	display: inline-block;
	cursor: pointer;
	border-radius: 45px;
    background-color: #ffffff;
    width: 80px;
    height: 82px;
    margin: 20px 27px ;

	box-sizing: border-box;
	border: none;
}
.input-file span::before{

}

.input-file input[type=file]{
    z-index: -1;
    display: block;
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
}

.dr{
    display: none;
    
}

.main-board{
    display: flex;
    flex-direction: row;
}
</style>