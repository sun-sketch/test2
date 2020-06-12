/**
 * Created by Yang on 2020/6/4.
 */
import axios from 'axios'
/*
 export function request(config,success,failure){
 //1.创建axios实例
 const instance1=axios.create({
 baseURL:'http://123.207.32.32.:8000',
 timeout:5000
 })
 //发送真正的网络请求
 instance1(config)
 .then(res=>{
 //console.log(res);
 success(res)
 })
 .catch(ree=>{
 //console.log(err);
 failure(err)
 })

 }*/
/*export function request(config){
 //1.创建axios实例
 const instance1=axios.create({
 baseURL:'http://123.207.32.32.:8000',
 timeout:5000
 })
 //发送真正的网络请求
 instance1(config.url)
 .then(res=>{
 //console.log(res);
 config.success(res)
 })
 .catch(ree=>{
 //console.log(err);
 config.failure(err)
 })

 }*/
export function request(config){
    //1.创建axios实例
    const instance1=axios.create({
        baseURL:'http://123.207.32.32.:8000',
        timeout:5000
    })
    //2.axios拦截器
    instance1.interceptors.request.use(config=>{
            //1.比如config中一些信息不符合要求
            //2.比如每次发送网络请求时，都希望在界面显示一个请求图标
            //3.某些网络请求（比如登录）必须携带一些特殊信息
        console.log(config);
        return config;
    },
    err=>{
        console.log(err)
    })
    instance1.interceptors.response.use(res=>{
        console.log(res.data)
        return res.data
    },err=>{
        console.log(err)
    })
    return instance1(config)

}
