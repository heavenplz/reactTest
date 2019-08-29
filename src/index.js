import React from 'react' //创建组件、虚拟dom元素、生命周期
import ReactDOM from 'react-dom'  //把创建好的组件和虚拟dom放到页面上展示


import Hello from '@/componets/Hello'

// var h1 = React.createElement('h1',{id:'myh1',title:"this is h1"},'这个是一个h1');
// var div1 = React.createElement('div',{className:"divabc"},h1);


// const html1 = <div><h1>jsx1是js中包含了类似html的语法就是jsx,需要提高英语能力</h1></div>

// ReactDOM.render(html1,document.getElementById('app'));


// let a = 10;
// let str = 'hi,asome'
// let boo = false;
// const h2 =  <h2>abc,sdfwoefj</h2>
// const arr = [
//     <h3>1</h3>,
//     <h3>2.25</h3>
// ]
// const arrstr = ['a','b','c','d']

// const temparr = []
// arrstr.forEach(item => {
//     const temp = <h5 key={item}>{item}</h5>
//     temparr.push(temp);
// })


// const bigarr = arrstr.map(item => {
//     return item + "@";
// })

// console.log(bigarr)

// ReactDOM.render(<div>
//     {a*2}<hr/>{str}<hr/>
//     {boo?'false':'true'}
//     {h2}
//     <hr/>
//     {/* {arr} */}
//     <hr/>
//     {temparr}
//     <hr/>
//     {arrstr.map(item=>{return <h1 key={item}>{item}$</h1>})}
//     </div>,document.getElementById('app'))

// const human = {
//     name:'quan',
//     age:18,
//     gender:'Male'
// }

// // console.log(...human) 不好使

// ReactDOM.render(<div>
//     <Hello name={human.name} age={human.age} gender={human.gender}></Hello>
//     </div>,document.getElementById('app'))

//类和对象的区别是什么
// function ObjectCat (name,age){
//     this.name = name;//通过new得到的实例，其属性叫做实例属性
//     this.age = age;
    
// }


// ObjectCat.info = "通过对象名访问到的属性是静态属性";

// ObjectCat.prototype.meow = function (){
//     console.log('通过prototype定义的方法是实例方法：通过访问静态方法的方式访问不到')
// }

// ObjectCat.Smeow = function(){
//     console.log('通过对象名定义的方法是静态方法:通过访问实例方法的方式访问不到')
// }


// var oc = new ObjectCat('babe',18);


// console.log("@@@"+ObjectCat.Smeow())


// class Cat {
//     constructor(name,age){
//         this.name = name;//通过new得到的实例，其属性叫做实例属性
//         this.age = age;
//     }

//     meow(){
//         console.log("不加static关键字定义的方法是实例方法：不可以通过类名来访问");
//     }

//     static Smeow(){
//         console.log("通过static关键字定义的方法是静态方法：通过实例名访问不到");
//     }
// }
// var cc = new Cat('bb',28);

// console.log(cc.meow())


// class father{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     sayHello(){
//         console.log("大家好");
//     }

// }


// class son extends father{

// }

// class daughter extends father{
//     constructor(a,b){
//         super(a,b);
//     }

// }

// var s = new son('tom',8)

// var d = new daughter('marry',12);

// console.log(d.name,d.age);

const attr ={
    year:2017,
    yh:10.2,
    pl:'2.0t'
}

    

class Car extends React.Component{
    render(){
        return <div>这是由Car继承自React渲染得到{this.props.pl}</div>
    }
    
}

ReactDOM.render(<div>

   <Car {...attr}></Car> 

</div>,document.getElementById('app'))