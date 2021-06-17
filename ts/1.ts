//private protected readonly
class Animal {
    private name:string;
    protected tim:string;
    readonly isNum:number = 8;
    constructor(theName:string){
        this.name = theName
    }
    public move(distanceMeters:number){
        console.log(`${this.name}move ${distanceMeters}`)
    }
}
class Snake extends Animal{
    constructor(name:string,tim:string){
        super(name)
        this.tim = tim
    }
    public goPop(){
        console.log(`我是${this.tim}${this.isNum}`)
    }
}

let snake = new Snake('小明','打提莫');
snake.move(10);
console.log(snake.goPop())
//接口
interface LabelledValue{
    label?:string,
    abs:number
}
function printLabel(labelObj:LabelledValue){
    console.log(labelObj.label)
}
let labelObj = {label:'我是label字段',abs:1};
printLabel(labelObj);

interface SquareConfig {
    color?: string;
    width?: number;
  }
  
  function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
      newSquare.color = config.color;
      console.log(newSquare)
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
  }
  
  let mySquare = createSquare({color: "black"});
  //只读属性-对象属性只能在对象刚刚创建的时候修改其值
  interface Point{
      readonly x:number;
      readonly y:number
  }
  let p1:Point = {x:10,y:20};
  //额外的属性检查
  interface Square{
      color?:string,
      width?:string,
      area?:number,
      [propName:string]:any
  }
  function squareFn(config:Square){
      console.log(config,'返回的对象')
    return config
  }
  let mySquareObj = squareFn({colors:"red"})
  //函数类型(接口定义函数类型)
  interface SearchFunc{
      (source:string,subString:string):boolean
  }
  let mySearch:SearchFunc;
  mySearch = function(src:string,sub:string){
      let  result = src.search(sub);
      return result>-1
  }
  //基础类型
  //boolen类型
  let isDone:boolean =  false;
  let cout:number = 10;
  let nameString:string = '小明';
  let list:number[] = [1,2,3];
  let listArr:Array<number> = [1,2,3];
  let value:unknown;
  let val1:any = value;//true
//   let val2:boolean = value;//err
//Tuple 类型-元组
let tupleType:[string,boolean];
tupleType = ['a',true];
console.log(tupleType[0],tupleType[1]);
//viold
let unusable: void = undefined;//null
//
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let someValue1: any = "this is a string";
let strLength2: number = (someValue1 as string).length;
//in关键字
interface Admin {
    name: string;
    privileges?: string[];
  }
  
  interface Employee {
    name: string;
    startDate?: Date;
  }
  
  type UnknownEmployee = Employee | Admin;
  
  function printEmployeeInformation(emp: UnknownEmployee) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
      console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
      console.log("Start Date: " + emp.startDate);
    }
  }
  printEmployeeInformation({name:'小明'});



// 类型守卫
enum CarTransmission {
    Automatic = 200,
    Manual = 300
  }
  
  interface Motorcycle {
    vType: "motorcycle"; // discriminant
    make: number; // year
  }
  
  interface Car {
    vType: "car"; // discriminant
    transmission: CarTransmission
  }
  
  interface Truck {
    vType: "truck"; // discriminant
    capacity: number; // in tons
  }
  type Vehicle = Motorcycle | Car | Truck;
  const EVALUATION_FACTOR = Math.PI; 
  function evaluatePrice(vehicle: Vehicle) {
    switch(vehicle.vType) {
        case "car":
          return vehicle.transmission * EVALUATION_FACTOR;
        case "truck":
          return vehicle.capacity * EVALUATION_FACTOR;
        case "motorcycle":
          return vehicle.make * EVALUATION_FACTOR;
      }
  }
  
  const myTruck: Truck = { vType: "truck", capacity: 9.5 };
  evaluatePrice(myTruck);
  //交叉类型
  interface IPerson {
    id: string;
    age: number;
  }
  
  interface IWorker {
    companyId: string;
  }
  
  type IStaff = IPerson & IWorker;
  
  const staff: IStaff = {
    id: 'E1006',
    age: 33,
    companyId: 'EFT'
  };
  
  console.dir(staff)
  //参数类型和返回类型
  function createUserId1(name: string, id: number): string {
    return name + id;
  }
  // 可选参数及默认参数
  // 可选参数
function createUserId2(name: string, id: number, age?: number): string {
    return name + id;
  }
  
  // 默认参数
  function createUserId3(
    name: string = "Semlinker",
    id: number,
    age?: number
  ): string {
    return name + id;
  }
  //剩余  参数
  function push(array, ...items) {
    items.forEach(function (item) {
      array.push(item);
    });
  }
  
  let a = [];
  push(a, 1, 2, 3);
//数组解构
let x: number; let y: number; let z: number;
let five_array = [0,1,2,3,4];
[x,y,z] = five_array;
console.log(x,y,z);
//数组展开符
let two_arry  = [0,1];
let five_arry = [two_arry,2,3,4];
console.log(five_arry)
//数组遍历
let colors:string[]  = ['red','green','blue'];
for(let i of colors){
    console.log(i)
}
//对象
let person = {
    name1: "Semlinker",
    gender: "Male",
  };
  
  let { name1, gender } = person;
  console.log(name1,gender,'对象解构')
  //对象展开符
  let person1 = {
    name2: "Semlinker",
    gender: "Male",
    address: "Xiamen",
  };
  
  // 组装对象
  let personWithAge = { ...person1, age: 33 };
 console.log(personWithAge,'组装对象')
  // 获取除了某些项外的其它项
 let { name2, ...rest } = person1;
 console.log(name2,'其他项');
 //类的属性与方法 
class Greeter{
    //静态属性
    static cname:string = 'Greeter';
    //成员属性
    greeting:string = '小红';
    //构造函数-执行初始化操作
    constructor(message:string){
        this.greeting = message
    }
    //静态方法
    static getClassName(){
        
        return 'class name is greeter'
    }
    //成员方法
    greet(){
        return 'hello,'+this.greeting
    }
}
let greeter = new Greeter('world');
// console.log(greeter.greeting,greeter.cname)//静态属性是实例无法访问的
//类的继承
class Animal2 {
    name: string;
    
    constructor(theName: string) {
      this.name = theName;
    }
    
    move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
  }
  
  class Snake2 extends Animal2 {
    constructor(name: string) {
      super(name);
    }
    
    move(distanceInMeters = 5) {
      console.log("Slithering...");
      super.move(distanceInMeters);
    }
  }
  
  let sam = new Snake2("Sammy the Python");
  sam.move();
  //私有字段
  class Person {
    #name: string;
  
    constructor(name: string) {
      this.#name = name;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.#name}!`);
    }
  }
  
  let semlinker = new Person("Semlinker");
  
//   semlinker.#name;
  //     ~~~~~
  // Property '#name' is not accessible outside class 'Person'
  // because it has a private identifier.
//   私有字段以 # 字符开头，有时我们称之为私有名称；
// 每个私有字段名称都唯一地限定于其包含的类；
// 不能在私有字段上使用 TypeScript 可访问性修饰符（如 public 或 private）；
// 私有字段不能在包含的类之外访问，甚至不能被检测到。
  
  


  