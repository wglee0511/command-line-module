function Person(name) {
	this.name = name
}

const jimin = new Person("jimin")

// 프로토타입으로 교체할 객체
const group = {
	sayHello() {
    console.log("i am " + this.name)
  }
}


// jimin 객체의 프로토타입을 group 객체로 교체
Object.setPrototypeOf(jimin, group)

jimin.sayHello() // i am jimin

export {}