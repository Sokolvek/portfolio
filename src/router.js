import { createRouter, createWebHashHistory } from "vue-router";

import index from "./pages/index.vue"

export default createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/portfolio",
            component:index

        }
    ]
})