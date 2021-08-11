function receivesAFunction(fun){
    fun();
}

function returnsANamedFunction(){
    return function fun(){
        console.log('good')
    }
}

function returnsAnAnonymousFunction(){
    return function () {
        console.log('I am anonymous')
    }
}