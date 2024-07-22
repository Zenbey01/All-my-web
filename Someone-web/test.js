// Block scope (let/constant)
// Original คือ การนำ var มาใช้ แต่ปัจจุบันใช้เป็น let/const แทน เนื่องจาก var ทำคำสั่งเกินหน้าที่ที่ตั้งไว้
console.log("----------*----------");
console.log("Block scope (let,const)");
let x = 10;
let y = 50;
// var y = 50;
// ใช้ var แล้วพื้นที่ในการทำงานจะเกินขอบเขตที่วางไว้เช่นปีกกา ทำให้ต้องใช้ let ในการควบคุมการใช้งาน
if (x === 10) {
    let y = 500;
    console.log("y in = " +y);
}
console.log("y out = " +y); // แสดงผลจาก let y = 50
// let z = 100;

// Original (constant)
const a = 50; // ห้ามเปลี่ยนตัวเลขด้านใน เพราะ const ใช้กับค่าคงที่

// let a = 50;
// a = 100;

console.log("a is = " +a)

console.log("----------*----------");

// Arrow function เป็นรูปแบบการเขียน Function ให้มีความกระชับขึ้น
// Original
// function fullname(fname,lname){
//     return fname+lname
// }
// New
// fullname=(fname,lname)=>fname+lname (ไม่ต้องใส่ปีกกา/return ใช้ในกรณีมีคำสั่งไม่เยอะ)

console.log("Arrow function");
console.log("Original");
console.log("Ex.1");
function fullname(fname,lname){
    return fname+lname;
}
console.log(fullname("welcome to ","my world"));

console.log("Ex.2");
function setAge(age){
    return "อายุ "+age ;
}
console.log(setAge(20));

console.log("----------*----------");
console.log("New");
console.log("Ex.1");
fullname=(fname,lname)=>fname+lname 
console.log(fullname("welcome to ","my world"));

console.log("Ex.2");
setAge=(age)=>"อายุ "+age 

console.log(setAge(20));
console.log("----------*----------");
console.log("การทำงานกับ object");
// การทำงานกับ object

// ตัวแปรเก็บข้อมูล
const customerName = "Pae01";
const age = "22";
const address = "my heart";

// const customer {
//     customerName : "Pae02",
//     customerAge: 40,
//     customerAddress: "nope"
// }

const customer = {
    customerName,age,address, 
    showData(){
        console.log("ข้อมูลลูกค้า " + customerName);
    }
}

customer.showData();
console.log("----------*----------");
console.log(customer);
console.log("----------*----------");

console.log("การทำงานร่วมกับ String");

// การทำงานร่วมกับ String
// mulitiline string : สามารถทำงานกับข้อความยาว ๆ ได้ เมื่อขึ้นบรรทัดใหม่แล้วจะไม่มีข้อผิดพลาด โดยใช้ `ข้อความ` ในการแสดง
// interpolation : เป็นการแทรกตัวแปรลงในพืนที่ string โดยใช้ ${ชื่อตัวแปร} ร่วมกับเครื่องหมาย ` ในการแสดง

let ctmName = "Joji";
let sAadress = "Bocchi star";
let tel = "0812345679";

const csAddress = `ชื่อลูกค้า : ${ctmName} 
ที่อยู่ ${sAadress} 
เบอร์ติดต่อ : ${tel}`;

console.log(csAddress);
console.log("----------*----------");

console.log("Spread operator");
// spread operator : ใช้ในการกระจายสมาชิกใน array ออกมาใช้งานโดยเติมเครื่องหมาย ... ด้านหน้าตัวแปร array

const newArr = [100,200,300];
const data = [10,20,...newArr];

console.log(data)

const colors = ["yellow","red","blue","black"];
const allColors = ["darkblue","darkred",...colors];
const newColor = ["skyblue","gold"];

allColors.push(...newColor);

console.log(allColors);

console.log("----------*----------");
console.log("Rest Parameter");
// Rest Parameter : ใช้ในการส่งค่า Parameter เข้าไปทำงานใน Function โดยไม่จำกัดจำนวนโดยใช้เครื่องหมาย ...

summation=(x,y)=>{
    return x+y;
}

console.log(summation(50,100));
console.log(summation(40,15));
console.log(summation(1234,4321));

