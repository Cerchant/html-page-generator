<template>
  <header class="page-header">
    <div class="page-header__container">
      <div class="page-header__logo">
        <img src="../assets/logo.png" alt="" class="page-header__img">
      </div>
      <div class="page-header__avatar">
        <img src="../assets/avatar.png" alt="" class="page-header__img2">
      </div>
    </div>
  </header>
    
</template>

<script>
export default{

}
</script>

<style scoped>

.page-header{
  display: block;
  position: relative;
  width: 100%;
  height: 166px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  overflow-x: hidden;
  overflow-y: hidden;
}

.page-header::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0079C0;
  }

.page-header__container{
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 1920px;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
}


.page-header__logo{
  width: 358px;
    display: inline-block;
    height: 166px;
}
.page-header__img{
  width: 100%;
  height: 100%;
}
.page-header__avatar{
  width: 50px;
    display: inline-block;
    height: 50px;
    margin-right: 65px;
}

.page-header__img2{
  width: 100%;
  height: 100%;
}


</style>