// Object Oriented Programing (OOP)
var Arithematic = /** @class */ (function () {
    function Arithematic(a, b) {
        this.No1 = a;
        this.No2 = b;
    }
    Arithematic.prototype.Addition = function () {
        var Ans = 0;
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Arithematic.prototype.Substraction = function () {
        var Ans = 0;
        Ans = this.No1 - this.No2;
        return Ans;
    };
    return Arithematic;
}());
var obj1 = new Arithematic(10, 11);
var obj2 = new Arithematic(20, 21);
var Ret = 0;
Ret = obj1.Addition();
console.log("Addition is :" + Ret);
Ret = obj1.Substraction();
console.log("Substraction is :" + Ret);
