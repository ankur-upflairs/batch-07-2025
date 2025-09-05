//variable => it is a name of memory location where value stored
// name rules =>1. contains alphabets,digits,_,$
// 2.cant start with no 
//cant use reserve keywords

// datatypes 1.primitive and 2 non primitive
// 1.number 
let a =34;
let b = 2.4
console.log(a,b) 
console.log(typeof a)

//2. string=> collection of characters 
let c ='hello'
let d = "everyone"
console.log(c,typeof c)
//3. undefined => value not assigned
let e;
console.log(typeof e)
//4. null => value is null
let f = null 
console.log(typeof f)
//5. boolean => true / false 
let g = true 
console.log(g, typeof g)
//6.bigInt =>
let h = 343454567567676n;
console.log(typeof h)

//7.symbol => to generate unique string(key)
let s1 = Symbol('a')
let s2 = Symbol('a')
console.log(typeof s1)
console.log(s1)
console.log(s1 == s2)

//non-primitive => 
// Object => key - value pair 
let student = {
    name:'pawan',
    age:34,
    contact:{
        email:'a@b.com'
    },
    marks:[23,45,56]
}
console.log(typeof student)
console.log(student.name)
console.log(student.contact.email)
console.log(student.marks[1])

//array=> it is a type of object
let ages = [23,45,12,6]
console.log(ages[0])



