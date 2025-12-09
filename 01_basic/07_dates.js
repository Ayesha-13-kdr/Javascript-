let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())

let nowDate = new Date(2005, 2, 13)
let haveDate = new Date("03-13-2005")
console.log(nowDate.toLocaleString())
console.log(haveDate.toLocaleString())

let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(haveDate.getTime())
console.log(Math.floor(Date.now()/1000))//seconds

let newDate = new Date()
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getFullYear())
console.log(newDate.getMonth())

newDate.toLocaleString('default',{
    weekday: "long"

})
