// Object Oriented Programing (OOP)

class Arithematic
{
    // Characteristics
    No1 : number;
    No2 : number;

    constructor(a : number, b : number)     //Arithematic()
    {
        this.No1 = a;
        this.No2 = b;
    }

    Addition()      //Behaviour
   {
      var Ans : number = 0;
      Ans = this.No1 + this. No2;
      return Ans;
   }

    Substraction()   //Behaviour
   {
      var Ans : number = 0;
      Ans = this.No1 - this. No2;
      return Ans;
   }
}

var obj1 = new Arithematic(10,11);
var obj2 = new Arithematic(20,21);

var Ret : number = 0;

Ret = obj1.Addition();
console.log("Addition is :"+Ret);

Ret = obj1.Substraction();
console.log("Substraction is :"+Ret);






 





