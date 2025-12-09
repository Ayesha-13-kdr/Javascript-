const gameName = new String('Ayeshaa')

console.log(gameName[3])
console.log(gameName.length)
console.log(gameName.toLocaleUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf('a'))

const anotherString = gameName.slice(-0 , 2)
console.log(anotherString)

const newStringOne = "   ayesha   "
console.log(newStringOne)
console.log(newStringOne.trimStart());

const luffy = "The King of the World"
console.log(luffy.replace('World', 'Pirates'))
console.log(luffy.includes('Joyboy'))

console.log(luffy.split("t"))