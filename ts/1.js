var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
//private protected readonly
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.isNum = 8;
        this.name = theName;
    }
    Animal.prototype.move = function (distanceMeters) {
        console.log(this.name + "move " + distanceMeters);
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name, tim) {
        var _this = _super.call(this, name) || this;
        _this.tim = tim;
        return _this;
    }
    Snake.prototype.goPop = function () {
        console.log("\u6211\u662F" + this.tim + this.isNum);
    };
    return Snake;
}(Animal));
var snake = new Snake('小明', '打提莫');
snake.move(10);
console.log(snake.goPop());
function printLabel(labelObj) {
    console.log(labelObj.label);
}
var labelObj = { label: '我是label字段', abs: 1 };
printLabel(labelObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
        console.log(newSquare);
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
var p1 = { x: 10, y: 20 };
function squareFn(config) {
    console.log(config, '返回的对象');
    return config;
}
var mySquareObj = squareFn({ colors: "red" });
var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
//基础类型
//boolen类型
var isDone = false;
var cout = 10;
var nameString = '小明';
var list = [1, 2, 3];
var listArr = [1, 2, 3];
var value;
var val1 = value; //true
//   let val2:boolean = value;//err
//Tuple 类型-元组
var tupleType;
tupleType = ['a', true];
console.log(tupleType[0], tupleType[1]);
//viold
var unusable = undefined; //null
//
var someValue = "this is a string";
var strLength = someValue.length;
var someValue1 = "this is a string";
var strLength2 = someValue1.length;
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date: " + emp.startDate);
    }
}
printEmployeeInformation({ name: '小明' });
// 类型守卫
var CarTransmission;
(function (CarTransmission) {
    CarTransmission[CarTransmission["Automatic"] = 200] = "Automatic";
    CarTransmission[CarTransmission["Manual"] = 300] = "Manual";
})(CarTransmission || (CarTransmission = {}));
var EVALUATION_FACTOR = Math.PI;
function evaluatePrice(vehicle) {
    switch (vehicle.vType) {
        case "car":
            return vehicle.transmission * EVALUATION_FACTOR;
        case "truck":
            return vehicle.capacity * EVALUATION_FACTOR;
        case "motorcycle":
            return vehicle.make * EVALUATION_FACTOR;
    }
}
var myTruck = { vType: "truck", capacity: 9.5 };
evaluatePrice(myTruck);
var staff = {
    id: 'E1006',
    age: 33,
    companyId: 'EFT'
};
console.dir(staff);
//参数类型和返回类型
function createUserId1(name, id) {
    return name + id;
}
// 可选参数及默认参数
// 可选参数
function createUserId2(name, id, age) {
    return name + id;
}
// 默认参数
function createUserId3(name, id, age) {
    if (name === void 0) { name = "Semlinker"; }
    return name + id;
}
//剩余  参数
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a = [];
push(a, 1, 2, 3);
//数组解构
var x;
var y;
var z;
var five_array = [0, 1, 2, 3, 4];
x = five_array[0], y = five_array[1], z = five_array[2];
console.log(x, y, z);
//数组展开符
var two_arry = [0, 1];
var five_arry = [two_arry, 2, 3, 4];
console.log(five_arry);
//数组遍历
var colors = ['red', 'green', 'blue'];
for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
    var i = colors_1[_i];
    console.log(i);
}
//对象
var person = {
    name1: "Semlinker",
    gender: "Male"
};
var name1 = person.name1, gender = person.gender;
console.log(name1, gender, '对象解构');
//对象展开符
var person1 = {
    name2: "Semlinker",
    gender: "Male",
    address: "Xiamen"
};
// 组装对象
var personWithAge = __assign(__assign({}, person1), { age: 33 });
console.log(personWithAge, '组装对象');
// 获取除了某些项外的其它项
var name2 = person1.name2, rest = __rest(person1, ["name2"]);
console.log(name2, '其他项');
//类的属性与方法 
var Greeter = /** @class */ (function () {
    //构造函数-执行初始化操作
    function Greeter(message) {
        //成员属性
        this.greeting = '小红';
        this.greeting = message;
    }
    //静态方法
    Greeter.getClassName = function () {
        return 'class name is greeter';
    };
    //成员方法
    Greeter.prototype.greet = function () {
        return 'hello,' + this.greeting;
    };
    //静态属性
    Greeter.cname = 'Greeter';
    return Greeter;
}());
var greeter = new Greeter('world');
// console.log(greeter.greeting,greeter.cname)//静态属性是实例无法访问的
//类的继承
var Animal2 = /** @class */ (function () {
    function Animal2(theName) {
        this.name = theName;
    }
    Animal2.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal2;
}());
var Snake2 = /** @class */ (function (_super) {
    __extends(Snake2, _super);
    function Snake2(name) {
        return _super.call(this, name) || this;
    }
    Snake2.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake2;
}(Animal2));
var sam = new Snake2("Sammy the Python");
sam.move();
