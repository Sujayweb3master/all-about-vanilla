{
    // compund statements (block of code)

    // It is used to write or execute multiple statements in the place where javascript expects single statement. 

}

if (true) {
    // example of usage of compound statement
}

var a = 100;
let b = 222;
{
    // here a shadows above 'a' variable. 
    var a = 10;
    let b = 20;
    const c = 30;
    // b and c are scoped to this block. 
}

{
    let b = 400;
}
