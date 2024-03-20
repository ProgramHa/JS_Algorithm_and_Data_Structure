// 인터넷 방문기록을 스택으로 구현한다고 가정
var stack = []

stack.push("google")
stack.push("instagram")
stack.push("youtube")

stack.pop() // youtube
stack.pop() // instagram

stack.push("amazon")

stack.pop() // amazon
stack.pop() // google

// 포토샵 작업기록을 구현

var STACK = []

STACK.unshift("create new file")
STACK.unshift("resized file")
STACK.unshift("cloned out wrinkle")

STACK.shift()   // cloned out wirnkle
STACK.shift()   // resized file
STACK.shift()   // create new file

