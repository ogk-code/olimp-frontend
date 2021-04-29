import Vue from 'vue'
import Router from "vue-router";
import Index from "@/components/Index";
import Task from "@/components/Task";
import Result from "@/components/Results";
// import Auth from "@/components/Auth";
// import HomeV2 from "@/components/HomeV2";
// import Registration from "@/components/Registration";
// import NewApp from "@/components/NewApp";
// import FullApp from "@/components/FullApp";
// // import chat from "@/components/chat/chat";
// import Auth from "@/components/Auth.vue"
// import Chat from "@/components/ChatPage"
// import ChatDemo from "@/components/ChatContainer"


Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/', component: Index, name: "Auth",
        }, {
            path: '/task', component: Task, name: "Task",
        },{
            path: '/result', component: Result, name: "Result",
        },
        //
    ],
})
