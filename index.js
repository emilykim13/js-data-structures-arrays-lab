// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    drivers.push(name)
    return drivers
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
    return drivers
}

function destructivelyRemoveLastDriver(name) {
    drivers.pop()
    return drivers
}

function destructivelyRemoveFirstDriver(name) {
    drivers.shift()
    return drivers
}

function appendDriver(name) {
    const newArr = [...drivers, name]
    return newArr
}

function prependDriver(name) {
    const newArr = [name, ...drivers]
    return newArr
}

function removeLastDriver() {
    const newArr = drivers.slice(0, (drivers.length-1))
    return newArr
}

function removeFirstDriver() {
    const newArr = drivers.slice(1)
    return newArr
}