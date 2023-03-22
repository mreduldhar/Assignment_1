// Assignment #1:

// Question: Write a program that generates a multiplication table for a given number using a for loop.


function multiplicationTable(num){

    for(var i = 1; i <=10; i++){

        var product = num * i;
        console.log(num + " * " + i + " = " + product) ;
    }
}

multiplicationTable(18);

