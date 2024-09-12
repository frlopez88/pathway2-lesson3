function myMessage(){
    console.log("Hello Developers")
}

myMessage()

function gretting( name, age = 30, carrear ){

    name = "Catera" 
    console.log(`Hello, my name is ${name} I´m ${age} years old! I´m a Happy ${carrear} `)

}

gretting("Fernando", 45)


function perimeterRectangle( sidea, sideb ){

    let area = (2*sidea) + (2*sideb)
    console.log(`The Area is ${area}`)

}

perimeterRectangle(10, 10)

function sum(num1 , num2){
    let area = (h*w)
    return area  
}

let result =  sum(20, 20)

console.log(result)