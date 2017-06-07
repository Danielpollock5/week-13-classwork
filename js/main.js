//random number between 1-20 
//console.log(Math.floor(Math.random()*20)+1)


//var array = ['russell', 'meepins', 'nari', 'becky']
//selects random names from the array above
//var randomNames = array[Math.floor(Math.random()*array.length)]
//console.log(randomNames)

// var today = new Date()
// var year = today.getFullYear()
// var x = document.getElementById('btn')

// x.addEventListener('click', DOMListenerEvent, false)
// function DOMListenerEvent() {

// 	document.getElementById('time').textContent = today
// 
// var array = ['daNNY', 'RoB', 'BeCkY', 'DAvid', 'CHRIs']
// var newArray = []
// //this pushes the new lower case characters into the new array
// for (var i = 0; i < array.length; i++) {
// 	newArray.push(array[i].toLowerCase())
// }
// //console.log(newArray)
// //picks the characters in the names
// for (var i = 0; i < newArray.length; i++) {
// 	console.log(newArray[i].charAt(1,3))
// }
//  var me = 'Danny'
//  var meArray = me.split('')

//  for (var i = 0; i < meArray.length; i++) {
//  	console.log(meArray)
//  }
// for (var i = 0; i < meArray.length; i++) {
// 	console.log(meArray[i].replace('d', 'w'))
// }
// 
//the .value will save the users input


// function DOMListenerEvent(){
// 	var email = document.getElementById('input').value
// 	var regEx = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{0,7}$/
// 	console.log(regEx.test(email))
// 	console.log(email)
// }
// document.getElementById('btn').addEventListener('click' , DOMListenerEvent, false)





// var array = ['ROBErt', 'DanNy', 'RebecCA', 'MeePINS', 'RusseLL']
// var newArray = []
// for (var i = 0; i < array.length; i++) {
// 	console.log(array[i].toLowerCase())
// }

// for (var i = 0; i < array.length; i++) {
// 	console.log(array[i].charAt(0))
// 	console.log(array[i].charAt(4))
// }

// var name = 'danny'
// var nameArray = name.split("")
// var nameJoin = nameArray.join()
// var replace = name.replace('a', 'y')
// for (var i = 0; i < nameArray.length; i++) {
// 	console.log(nameArray[i])
// 	console.log(nameJoin)
// 	console.log(replace)
// }

function domListenerEvent(){
	var userInput = document.getElementById('input').value
	var regEx = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{0,9}$/
	console.log(regEx.test(userInput))
}
document.getElementById('btn').addEventListener('click', domListenerEvent, false)















