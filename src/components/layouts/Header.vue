<template>
    <header>
        <nav>
            <ul class="nav-list">
                <li class="nav-item ">
                    <h3 class="header-title"><strong class="aqua"> &lt;C/&gt;</strong>  JustFelix</h3>
                </li>
                <li class="nav-item">
                    <a href="https://t.me/DrainEjnoyer">
                        <img src="@/assets/imgs/telegram-icon.svg" alt="">
                        telegram
                    </a>
                    <a to="discordapp.com/users/253546554424557569">
                        <img src="@/assets/imgs/discord-icon.svg" alt="">
                        discord
                    </a>
                    <a href="https://github.com/Sokolvek">
                        <img src="@/assets/imgs/github-icon.svg" alt="">
                        github
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>

</script>

<style scoped>
header{
    background-color: #292F36;
    border-bottom: 1px solid white;
    /* height: 10vh; */
}


.header-title{
    font-size: 32px;
}
nav{
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 40px 70px;
}

.nav-list{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

li.nav-item:nth-child(2) {
display: flex;
gap: 20px;
}

a{
    display: flex;
    gap: 10px;
}

@media (max-width:986px) {
    .nav-item > a {
        font-size: 0;

    }

    .nav-item{
        display: flex;
        gap: 20px;
        align-items: center;
    }

    

    .nav-item > a > img{
        width: 50px;
    }
}

@media (max-width: 700px) {
    .header-title{
        font-size: 20px;
    }
    .nav-item > a > img{
        width: 30px;
    }

    nav{
        padding: 40px 10px;
    }
}

</style>