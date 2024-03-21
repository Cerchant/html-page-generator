<template>
    <div class="top-panel">
        <div class="top-panel__container">
            <a href="#" class="link">
                <div class="link_img">
                    <img src="../assets/Group.svg" alt="" class="img">
                </div>
            </a>
            <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
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
            <div class="scale">
                .
            </div>
        </div>
    </div>
</template>

<style scoped>

.text{
    font-size: 20px;
    font-weight: 600;
}

.text-field{
    font-size: 20px;
}

.position-wrapper{
    display: flex;
    flex-direction: row;
    gap: 10px;
    
}
.position-wrapper:first-child{
    margin-left: 60px;
}

.position{
    display: flex;
    flex-direction: row;
    gap: 40px;
}

.circle__button{
    background-color: #ffffff;
    width: 40px;
    height: 40px;
}

.top-panel__container{
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: center;
    width: 100%;
  margin-left: auto;
  margin-right: auto;
    background-color: #BABDBF;
    height: 50px;
    overflow-x: hidden;
    z-index: 25;
}

.top-select{
    position: relative;
	display: inline-block;
	cursor: pointer;
	border-radius: 45px;
    background-color: #ffffff;
    width: 40px;
    height: 40px;
    margin: 5px 10px 5px 70px;
    appearance: none;
    outline: none;

	box-sizing: border-box;
	border: none;
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
</style>