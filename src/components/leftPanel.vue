
<template>
        <div class="left-panel">
        </div>
   
</template>


<style scoped>
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
</style>