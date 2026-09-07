function x() {
    var a = 9;
    function y() {
        var bInsideY = 100;
        console.log(a)
    }
    return y
}

var z = x();

//........

z();