//A.---------------
console.log(`A.\n`);
//retirementAge=65;

const JohnObject={
  firstName: "John",
  lastName: "Jones",
  birthYear: 1994,
  address: "222-123 45th Ave",
  job:"taxidermist",
  email:"john.j@gmail.com",
  currentYear: 2021,
  retireYear:function(){
    if((this.currentYear-this.birthYear)>=65){
      console.log(`${this.firstName} is retired`)
    }
    else if ((this.currentYear-this.birthYear)<=15) {
      console.log(`${this.firstName} is less than 16 years old`);
    }
    else{
      console.log(`${this.firstName} has ${65-(this.currentYear-this.birthYear)} years left to gradute.`);
        }
      }
  }
JohnObject.retireYear();
console.log(`\n`);

//B.-------------------
console.log(`B.\n`);
//formula_to_Fahrenheit = tempCelsius*9/5+32;

const display4Fahrenheit=function(){
  let celTemp=[];
  celTemp.push(prompt(`Enter a celsius degree: `))
  celTemp.push(prompt(`Enter a celsius degree: `))
  celTemp.push(prompt(`Enter a celsius degree: `))
  celTemp.push(prompt(`Enter a celsius degree: `))
  //console.log(celTemp[0]);

  let convertedTemp=[];
  convertedTemp.push(...celTemp);
  convertedTemp[0]=convertedTemp[0]*9/5+32;
  convertedTemp[1]=convertedTemp[1]*9/5+32;
  convertedTemp[2]=convertedTemp[2]*9/5+32;
  convertedTemp[3]=convertedTemp[3]*9/5+32;
  console.log(`We have converted the temperatures ${celTemp[0]}°C, ${celTemp[1]}°C, ${celTemp[2]}°C and ${celTemp[3]}°C to Fahrenheit upon your request, they are ${convertedTemp[0]}°F, ${convertedTemp[1]}°F, ${convertedTemp[2]}°F and ${convertedTemp[3]}°F`);
}

display4Fahrenheit();
console.log(`\n`);

//C.-----------------
console.log(`C.\n`);
//BMI_formula=mass/height**2
// BMI is less than 18.5,underweight range.
// BMI is 18.5 to 24.9, Healthy Weight range.
// BMI is 25.0 to 29.9, overweight range.
// BMI is 30.0 or higher, obese range.
let MarkObject={
  name:'Mark',
  mass: 92,
  height:1.85,
}

let LucasObject={
  name:'Lucas',
  mass: 78,
  height:1.90,
}

let JonObject={
  name:'Jon',
  mass: 90,
  height:1.69,
}

const checkBMI=(mass,height)=>{
  let bmi=mass/height**2;
  bmi=bmi.toFixed(2);
  return bmi;
}

let storeBMI=[];
storeBMI.push(checkBMI(MarkObject.mass, MarkObject.height));
storeBMI.push(checkBMI(LucasObject.mass, LucasObject.height));
storeBMI.push(checkBMI(JonObject.mass, JonObject.height));

let healthDetail=(name,bmi)=>{
  if (bmi<18.5){
        console.log(`${name} BMI is ${bmi}, and ${bmi} is underweight based the body fat indicator, It is recommended to check more details with a doctor.`);
      }
      else if ((bmi>=18.5)&&(bmi<=24.9)){
      console.log(`${name} BMI is ${bmi}, and Congrats! ${bmi} body weight is ideal.`);
      }
      else if ((bmi>=25)&&(bmi<=29.9)){
        console.log(`${name} BMI is ${bmi}, and ${bmi}is overweight based on our body fat indicator. It is recommended to check more details with a doctor.`);
      }
      else{
        console.log(`${name} BMI is ${bmi}, and ${bmi} is obesity based on our body fat indicator, please try to see a doctor!!`);
      }
}
healthDetail(MarkObject.name,storeBMI[0]);
healthDetail(LucasObject.name,storeBMI[1]);
healthDetail(JonObject.name,storeBMI[2]);
