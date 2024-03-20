

setInterval(function(){
const date = new Date()
const days = date.getDate()
const hours = date.getHours()
const minutes = date.getMinutes()
const seconds = date.getSeconds()

const daysElem = document.querySelector('#days')
const hoursElem = document.querySelector('#hours')
const minutesElem = document.querySelector('#minutes')
const secondsElem = document.querySelector('#seconds')

    daysElem.innerHTML = days
    hoursElem.innerHTML = hours
    minutesElem.innerHTML = minutes
    secondsElem.innerHTML = seconds
},1000)

