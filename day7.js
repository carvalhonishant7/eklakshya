-----------------------------------------------------------callstud.js---------------------------
var stud1={
    name:"Nishant",
    no:001
}
var stud2={
    name:"Carvalho",
    no:002
}

var m=0;
var showTotal=function(...marks){
        marks.forEach(ele => {
          m=m+ele;
              });
    console.log('I am',this.name,'my roll no is:',this.no,'and my total marks :',m);

 }

 var showHobbies=function(...hobby){
    console.log('I am',this.name,'my roll-no is:',this.no);
    console.log('my hobbies are :');
     hobby.forEach(element => {
      console.log(element);

     });
 }
 showTotal.call(stud1,50,50,50);
 showTotal.call(stud2,60,60,60);
 console.log('----------USING APPLY------------')
 showHobbies.apply(stud1,['sports','reading','trekking']);
 showHobbies.apply(stud2,['dancing','singing','travelling']);
 -----------------------------------------------------------------------------------------------------------------
 -----------------------------------------------nestedfun.js--------------------------------------------------
 function showPro(name,brand,cost){
    return function(discount){
           return console.log("The model is",name,"brand is",brand,"cost is",
           cost,"and discount",discount);
    }
};

var print=showPro('XSPro','IPhone',50000);
print(5000);
-------------------------------------------------------------------------------------------------
-------------------------------------------nestedstud.js----------------------------------
var showTotal=function(...marks){
    var m=0;
    return function(){
        marks.forEach(ele => {
          m=m+ele;
              });
        return m/marks.length;
   }
 }
var avg=showTotal(100,200,300,100,200,300);
console.log('Avg marks of the students is:',avg());
------------------------------------------------------------------------------------------
----------------------------------------area.js---------------------------------------------------------------
function Shape(length,width){
    this.length=length;
    this.width=width;
    this.area= function(){
        console.log('Area')
    }
}
function Rect(length,width){
    Shape.call(this,length,width);
    
    this.area=function(){
        console.log('Area of Rect',length*width);
        console.log('Peri of rect',2*(length+width));
    }
}

function Triangle(length,width){
    Shape.call(this,length,width);
    this.area=function(){
        console.log('Area of triangle',0.5*length*width);
        console.log('Peri of Eq triangle',3*length);    
    }
}
var re= new Rect(20, 10);
re.area();

var tri= new Triangle(2,4);
tri.area();
-------------------------------------------------------END---------------------------------------------
