// let id: number = 5;
// let myName: string = "Moss";
// let isPublished: boolean = true;
// let x: any = "Hello";

// console.log("ID: " + typeof(id) + " " + id);
// console.log("My name: " + typeof(myName) + " " + myName);
// console.log("isPublished: " + typeof(isPublished) + " " + isPublished);
// console.log("x: " + typeof(x) + " " + x);
// x = 3 < 2;
// console.log("x: " + typeof(x) + " " + x);

// let age: number = 19;
// console.log(`My name is ${myName}. I am ${age} years old.`);

// let ids: number[];
// ids = [1,2,3,4,5];
// console.log(ids);
// let arr: any[];
// arr = [1, "2", true , 3.5];
// console.log(arr);

// let Myfriend: string[];
// Myfriend = ["มอส","น้ำ","แจ็บ","บาส","แทน"];
// console.log(Myfriend);

// ids.forEach(i => {
//      console.log(`ID: ${i}`);
// });

// console.log(`I am ${myName} This is my frind`);
// Myfriend.forEach(i => {
//     console.log(`- ${i}`);
// });

// let salary: number[] = [1000,2000,5000,10000];
// let commission: number[]=[];

// salary.forEach((s)=>{
//     commission.push(s*0.1);
// });

// console.log(commission);

// let bonus: number[] = [];
// salary.forEach((s)=>{
//     if(s<1001){
//         bonus.push(s*2);
//     }else if(s<5001){
//         bonus.push(s*1.5);
//     }else if(s<10001){
//         bonus.push(s*1.2);
//     }else{
//         bonus.push(s*1);
//     }
// });
// console.log(bonus);

//Tuple ---> 1 record
// let prods1: [number,string,string,number];
// prods1 = [1,"Chocolate","pack",10];

// console.log(prods1[0]);
// console.log(prods1[1]);
// console.log(prods1[2]);
// console.log(prods1[3]);

// prods1.forEach(p=>{
//     console.log(p);
// });

// let products: [number,string,string,number][];
// products=[
//     [1,"Strawberry","pcs",20],
//     [2,"Apple","pcs",25],
//     [3,"Banana","pcs",10],
//     [4,"orange","pcs",30],
//     [5,"coconut","pcs",25]
// ];
// console.log(products);

// console.log("all product");
// products.forEach(p=>{
//     console.log(`${p[0]}. ${p[1]} (${p[2]}) : ${p[3]}`);
// });

// let studens: [string,string,number,number,number][];

// studens = [
//     ["1001","มอส",20,50,0],
//     ["1002","น้ำ",18,42,0],
//     ["1003","แจ็บ",20,21,0],
//     ["1004","บาส",15,35,0],
//     ["1005","เจ",17,31,0]
// ];

// students.forEach(s=>{
//     s[4] = s[2] + s[3];
//     console.log(`${s[0]}: ${s[1]}, Total: ${s[4]}`);
// });

// enums Direction1{
//     up = 1,
//     down,
//     left,
//     right
// }
// enums Direction2{
//     up = "up",
//     down = "down",
//     left = "left",
//     right = "right"
// }
// console.log(Direction1);
// console.log(Direction2);


//setPaper(size, orientation)
//0:A3 1:A4 2:A5 3:A6
//1: Portrait 0:Landscape

// enums PaperSize{
//     A4 = 1,
//     A5 = 2,
//     A6 = 3,
// }
// enums Orientation{
//     Portrait = 1,
//     Lanscape = 2
// }

// Defined Type (Object)
// type Students = {
//     id:number,
//     name:string,
//     tel:string,
//     line_id:string
// }

// let Moss: Students = {
//     id:101,name:"Moss",tel:"0987654321",   
// };

// console.log(Moss.id);


// let sid : number | string;
// sid = 101;
// console.log(typeof(sid));

// sid = "201";
// console.log(typeof(sid));

//function
// function addNumber(x:number,y:number):number{
//     return x + y;
// }

// console.log(addNumber(1,3));

// function showLog(m:number|string):void{
//     console.log(m);
// }

// showLog(444);
// showLog("555");


// interface MathFunc{
//     (x:number,y:number):number
// }

// const addNum : MathFunc = (x:number,y:number):number => {return x+y};
// const subNum : MathFunc = (x:number,y:number): number => x-y;

// console.log(addNum(5,7));
// console.log(subNum(5,7));

//interface Human{
//   id:number,
 //   name:string,
 //   age:number,
 //   tel?:string,
 //   move():string
 //   eat():string
//}


//const student : Human = {
      //   id:555,
       //  name:"Moss",
       //  age:30,
        // tel: "0987654321",
        // move:function():string{
       //      return "Walk";
      //  },
       //  eat:function():string{
       //     return "Meat";
      // }
    // }
    







//class Driver implements Human{
//   id: number;
//   name: string;
//  age: number;

  
//    constructor(id:number,name:string,age:number){
//        this.id = id;
//        this.name = name;
//        this.age = age;
//    }

//   move(){
//        return `${this.name} moves by driving`;
//   }

// eat(){
//        return `${this.name} eats by rice.`;
//   }
//}

//const d = new Driver(101,"Anurak",20);
 //console.log(d.move());
 //console.log(d.eat());

 //function getArray<T>(items:T[]): T[]{
// return new Array().concat(items);
//}

//let n1 = [1,2,3,4];
//let n2 = ["a","b","c","d"];

//console.log(getArray([n1,n2]));

