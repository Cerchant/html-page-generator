<script>
import axios from 'axios';
import dragImg from './DragImg.vue';
import dragText from './DragText.vue';
import drag from './DraggableResizableVue.vue';
import editor from './editor.vue';



export default{
    components: {drag, dragText, dragImg, editor},
    data() {
        
    return {
        elem_id: '',
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
            const rect = document.querySelector('.js-board')
            

//             fetch("https://reqres.in/api/articles", {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type':'application/x-www-form-urlencoded'
//   },
//                 body: JSON.stringify(arr)
//             }).then(response=>console.log(response))
//                 .catch(error=>console.log(error))
            const div_rect = rect.innerHTML
            console.log(div_rect)
            axios.post("https://reqres.in/api/articles", div_rect)
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
                },
                figure: function(){
                    const elements = document.querySelectorAll('.drag_rect')
                    const elem = document.querySelector('.drv-active').children[1]
                    const label = document.querySelector('.form-label')
                    if (elem.id === 'прямоугольник_'){
                        const cnt = elements.length
                        elem.id = elem.id+cnt
                        label.innerHTML = elem.id
                    }
                    else{
                        label.innerHTML = elem.id
                    }
                    const colorElem = document.querySelector('#exampleColorInput')
                    // const rectElem = elem.querySelector('#rect')
                    console.log(elem)

                    colorElem.value = elem.style.backgroundColor
                    this.elem_id=elem.id

                    // colorElem.onchange = colorChange('Прямоугольник_1')
                    // colorElem.setAttribute('@change', 'colorChange('+elem.id+')')

                },

                colorChange: function(rect){
                    const colorElem = document.getElementById('exampleColorInput')
                    const color = colorElem.value
                    console.log(color)
                    // const rect = document.querySelector('.drv-active')

                    const rect_obj = document.getElementById(rect)
                 


                    rect_obj.style.backgroundColor = color
                },  
                
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
                <li>
                    <label class="inputImg dropdown-item">
                        <input type="file" @click="imgFunc()">
                        <span>Фон</span>
                    </label>
                </li>
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

  </div>

  
    <div class="main-board">
        <div class="left-panel">
        </div>
        <div class="creating-board js-board" @click="figure()" >
            <component v-for="component in cards" :is="component"></component>
            <component v-for="component in cardsImg" :is="component"></component>
            <component v-for="component in cardsText" :is="component"></component>
            
            
    </div>
    <div class="right-panel">
        <p class="t">Свойства</p>
        <div class="color">
            <label for="exampleColorInput" class="form-label">Выделите объект</label>
        <!-- <editor @click=''></editor> -->
       
<input type="color" class=" color_c form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color" v-on:change="colorChange(elem_id)">

        </div>
        
</div>
        
    </div>
</template>


<style scoped>  

.right-panel{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.t{
    font-size: 24px;
    font-weight: 600;
    font-family: 'HeliosCondC', sans-serif;
}

.form-label{
    font-size: 18px;
    font-weight: 600;
    font-family: 'HeliosCondC', sans-serif;
    line-height: 0.8;
    margin-bottom: 0;
}

.color{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left:15px;
}

.color_c{
    margin-left:15px;
}


.ql-container{
    display: none;
}

.inputImg span {
	position: relative;
	display: inline-block;
}

.inputImg input[type=file] {
	position: absolute;
	z-index: -1;
	opacity: 0;
	display: block;
	width: 0;
	height: 0;
}

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