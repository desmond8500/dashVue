<template>
  <div id="app">
    <div id="nav" class="dash_nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->

      <div class="dash_nav_logo">
            <img src="./assets/dash/theme/icon/cell.png" height="40px" alt="">
        </div>
        <div class="dash_nav_menus">
                <div class="dash_nav_menu">Images</div>
                <div class="dash_nav_menu">Gifs</div>
                <div class="dash_nav_menu">Videos</div>
        </div>
        <div class="dash_nav_profile">
            <img src="./assets/dash/theme/icon/user.png" height="40px" alt="">
            Profile
        </div>
    </div>
    <router-view/>
  </div>
</template>




<script>
export default {

}
</script>

<style>

@font-face{
    font-family: 'Lato';
    src: url('./assets/dash/theme/lato/Lato-Regular.ttf');
}

body{
    margin: 0px;
    background: #F5F5F5;
    font-family: 'Lato';
}
  .dash_nav{
    display: flex;
    background: white;
    align-content: center;
}

.dash_nav_logo{
    flex: 1;
    height: 50px;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
}
.dash_nav_menus{
    flex: 10;
    display: flex;
    justify-content: center;
    /* background: chocolate; */
    height: 50px;
}
.dash_nav_menu{
    width: 100px;
    /* background: turquoise; */
    padding-top: 13px;
    text-align: center;
}
.dash_nav_menu:hover{
    border-bottom: 3px solid black;
}
.dash_nav_profile{
    flex: 2;
    /* background: chartreuse; */
    align-content: flex-end;
    display: flex;
    align-items: center;
    padding: 5px;
}
.dash_nav_profile img{
    margin-right: 10px;
}

</style>
