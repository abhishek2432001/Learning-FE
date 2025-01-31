function x(){
    var i = 1;
    setTimeout(function(){
        console.log(i);;
        
    }, 3000);
    console.log("namaste javascript");
    
}
x(); //Prints "namaste javascript" first and then i

function xwithvar(){
    for(vari=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
            
        }, i*1000)
    }
    console.log("namste javascript");
    
}
xwithvar(); //print 6 every time since var is not block scoped and i value will be 6 we can solve it by using let since that will be bloack scoped

//Without let
function xwithoutlet(){
    for(var i=0;i<=5;i++){
        function close(){
            setTimeout(function(){
                console.log(x);
            }, x*1000);
        }
        close(i);

    }
}

//Function statement
function a(){
    console.log("a is called");
    
}

//Function expression
var b = function(){
    console.log("b called");
    
}

//Function Declaration sames as function expression

//Anonymous function- Used when functions are used as values
// function(){

// }

//Named function expression
var b = function xyz(){

}

xyz() //Not defined error since it's not a function in global scope

//Values passed inside are arguments and variables in function is params


//First class function -  Function passed or returned from function ability

//Arrow function - 


}

