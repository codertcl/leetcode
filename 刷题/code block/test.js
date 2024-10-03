function f1() {
    var a = 2

    function f2() {
        // var a = 1
        console.log(a);//1
    }

    return f2;
}

var a = 3
var x = f1();
x();
