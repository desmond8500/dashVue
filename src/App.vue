<template>
  <div id="app">
    <div id="nav" class="dash_nav">

      <div class="dash_nav_logo">
            <img src="./assets/dash/theme/icon/cell.png" height="40px" alt="">
        </div>
        <div class="dash_nav_menus">
                <router-link v-for="menu in menus" :key="menu.id" :to="menu.link" class="dash_nav_menu">{{ menu.name }}</router-link>
                
        </div>
        <div class="dash_nav_profile">
            <img src="./assets/dash/theme/icon/user.png" height="40px" alt="">
            Profile
        </div>
    </div>
    <div class="dash_wrapper">
        <router-view/>
    </div>
  </div>
</template>




<script>
export default {
    data(){
        return{
            menus:[
                { id: 1, name: 'Projets', link: '/projets'},
                { id: 2, name: 'Stock', link: '/stock'},
                { id: 2, name: 'Medias', link: '/medias'},
            ]
        }
    }
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

.dash_wrapper{
    margin: 10px 20px;
}

.dash_page_title{
    font-size: 25px;
    padding: 10px 0;
}
.dash_breadcrumbs{
    text-align: right;
}

</style>
