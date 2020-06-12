import Vue from '../node_modules/vue/dist/vue.js'
import app from './App.vue'
import {Header} from 'mint-ui'
import '../lib/mui/css/mui.min.css'
import axios from 'axios'
Vue.component(Header.name, Header);
var vm=new Vue({
    el:'#app',
    components:{
        app:app
    }
})
//ȫ������
/*axios.defaults.baseURL='http://123.207.32.32.:8000'
axios.defaults.timeout=5000//��ʱʱ��*/

/*axios({
    url:'http://123.207.32.32.:8000/home/multidata',
}).then(res=>{
    console.log(res);
})*/
//���Ͳ�������
/*
axios.all([axios({
    url:'/home/multidata'
}),axios({
    url:'/home/data',
    params:{
        type:'sell',
        page:4
    }
})])
    .then(results=>{
        console.log(results);
        console.log(results[0]);
        console.log(results[1]);
    })*/
/*
 //������Ӧ��axiosʵ��
 const instance1=axios.create({
 baseURL:'http://123.207.32.32.:8000',
 timeout:5000
 })
 instance1({
 url:'/home/multidata'
 }).then(res=>{
 console.log(res);
 })

 instance1({
 url:'/home/data',
 params:{
 type:'sell',
 page:4
 }
 }).then(res=>{
 console.log(res);
 })*/
//5.��װrequestģ��

import {request} from './network/request.js'
 /*request({
    url:'/home/multidata'
},res=>{
    console.log(res)
},err=>{
    console.log(err)
})*/
/*
request({
    url: '/home/multidata',
    success:function(res){
        console.log(res)
    },
    failure:function(err){
        console.log(err)
    }
})*/
request({
    url:'/home/multidata'
}).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})