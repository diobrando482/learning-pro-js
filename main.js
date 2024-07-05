
//создатель Js Брендан эйх

// console.log('hello world', this)


// person = {
//     name: 'Adilet',
//     age: 16,
//     logInfo: function(){
//         console.log(`hello my name is ${this.name}`);
//         console.log(`hello im ${this.age} years old`);
//     }
// }

// console.log(person.logInfo);



// time to code



// const person = {
//     name: 'adil',
//     age: 16,
//     logInfo: function(job) {
//         console.log(`hello my name is ${this.name}`);
//         console.log(`hello im  ${this.age} years old`);
//         console.log(`hello im  works as a ${job} `);
//     }
// }


// const almaz = {
//     name: 'Almaz',
//     age: 14
// }


// const fnAlmaz = person.logInfo.bind(almaz)()
//bind нужно вызывать

//call сразу вызывает функцию


//apply другой способ передачи параметров[]




// const array = [1,2,3,4,5]


// const func = (arr, n) => { 
//     return arr.map((i)=>{
//         return i * n
//     })
// }

// console.log(func(array,5));


// console.log('hello world');


// const makeFunc =() =>{
//     let name = "Mozilla";
  
//     function displayName() {
//         console.log(name);
//     }
  
//     return displayName;
// }
  
// let myFunc = makeFunc();
// myFunc();
  
//пример замыкания
// const calcFunc = (x) => {
//     return function secFunc(n){
//         console.log(x * n);    
//     };
// }
// const calc1 = calcFunc(19)

// console.log(calc1(10));
//пример замыкания на сыллках
// function urlGen(domain) {
//     return function domainGen(url){
//         console.log(`https://${url}.${domain}`);
//     }
// }


// const callFunc = urlGen('com')

// console.log(callFunc('netflix'));

// console.log('start');



// setTimeout(()=>{
//     console.log('this message will be outputted after 2 seconds ');
// },2000)


// const person = Object.create(
//     {},
//     {
//         name:{
//             value:'Adilet',
//             enumerable:true,// по нему можно проходиться с помощью цикла
//             writable:true, // может сохранить новое значение то есть поле может изменяться
//             configurable:true // говорит о том что мы можем удалять какйо нибудь ключ из обьекта
//         },
//         birthYear:{
//             value:2007,
//             enumerable:false,
//             writable:false,
//             configurable:false
//         },
//         age:{
//             get(){
//                 return new Date().getFullYear() - this.birthYear
//             },
//             set(value){
//                 document.body.style.background = 'blue'
//                 console.log('set age',value);
//             }
//         }
//     }
// )



class Amimal {
    static type  = 'Animal'

    constructor(self){
        this.name = self.name
        this.age = self.age
        this.goingOnFor = self.goingOnFor
    }
    voice(){
        console.log('im animal');
    }
}

// const newAnimal = new Amimal({name:'leopard',age: 10,goingOnFor:true})

// console.log(newAnimal)

class Cat extends Amimal {
    static type = 'CAT'

    constructor(self){
        super(self)
        this.color = self.color
    }
    voice(){
        console.log('mew');
    }
}
const cat = new Cat({
    name:"Catty",
    age:5,
    goingOnFor:true,
    color:'black'
})



//get обращение к знчению 
//set изменение значения