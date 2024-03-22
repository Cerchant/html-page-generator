<script setup>
import layerPanel from './layerPanel.vue';
</script>

<template>
    <div class="left-panel">
        <div class="layers-button__wrapper">
            <button class="layers-button">
                Слои
            </button>
        </div>
        <div class="layers-toolbar__wrapper">
            <div class="layers-plus__icon">
                <img height="16" width="17" src="../assets/Union.svg"></img>
            </div>
            <div class="layers-delete__icon">
                <img height="16" width="17" src="../assets/delete.svg"></img>
            </div>
        </div>
        <div class="layers">

            <layerPanel></layerPanel>
            <layerPanel></layerPanel>
            <layerPanel></layerPanel>
            <div class="layer-example1__wrapper">
                <div class="layer-example1">
                    <div class="layer-example1__img">
                        <img height="36" width="24" src="../assets/eyeClose.svg"></img>
                    </div>
                    <div class="layer-example1__title">
                        Слой2
                    </div>
                </div>
            </div>

            <div class="layer-example__wrapper">
                <div class="layer-example">
                    <div class="layer-example__img">
                        <img height="36" width="24" src="../assets/eyeOpen.svg"></img>
                    </div>
                    <div class="layer-example__title">
                        Слой3
                    </div>
                </div>
            </div>
            
        </div>
    </div>

</template>


<style scoped>
.left-panel{
background-color: #BABDBF;
width: 383px;
height: 100%;
min-height: 100vh;
}

.layers-button{
padding: 4px 25px 4px; 
background-color: #ffffff;
}

.layers-toolbar__wrapper{
height: 26px;
display: flex;
justify-content: right;
}



.layers-plus__icon{
padding-right: 5px;
}

.layers-delete__icon{
padding-right: 5px;
}

.layer-example__wrapper{
height: 40px;
background-color: #EEEEEE;
}

.layer-example__img{
padding-left: 10px;
}

.layer-example{
display: flex;
}

.layer-example__title{
padding: 5px 20px 0px;
}

.layer-example1__wrapper{
height: 40px;
background-color: #D9D9D9;
}

.layer-example1{
display: flex;
}

.layer-example1__img{
padding-left: 10px;
}

.layer-example1__title{
padding: 5px 20px 0px;
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
</style>