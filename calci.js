
function add()
{
    var num1=Number($(".num1").val());
    var num2=Number($(".num2").val());
    var res=num1+num2;
    document.querySelector(".result").innerHTML="The result of addition is "+res;
}
function subtract()
{
    var num1=Number($(".num1").val());
    var num2=Number($(".num2").val());
    var res=num1-num2;
    document.querySelector(".result").innerHTML="The result of subtraction is "+res;
}
function multiply()
{
    var num1=Number($(".num1").val());
    var num2=Number($(".num2").val());
    var res=num1*num2;
    document.querySelector(".result").innerHTML="The result of multiplication is "+res;
}
function division()
{
    var num1=Number($(".num1").val());
    var num2=Number($(".num2").val());
    var res=num1/num2;
    document.querySelector(".result").innerHTML="The result of division is "+res;
}
