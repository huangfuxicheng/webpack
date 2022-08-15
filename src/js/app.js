import {sum,sub} from "./module1";
import {data,message} from "./module2";
import s from "./module3";
import json from "../json/test.json"
import '../css/demo.css'
import '../css/demo2.less'
import  '@babel/polyfill'
sum(3,4)
sub(5,6)

console.log(data);
console.log(message);

console.log(s);
console.log(json);
//webpack不能转化为es5
const test = ()=>{console.log("age")}
const {name} = s
console.log(name)

const p = new Promise((resolve)=>{
    setTimeout(()=>{
       resolve(900)
    },1000)
    p.then((value)=> console.log(value),
        reason => console.log(reason))
})