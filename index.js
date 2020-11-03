const hourElement = document.querySelector(".hour")
const minuteElement = document.querySelector(".minute")
const secondElement = document.querySelector(".second")
transferTimeToDeg()

setInterval(() => {
  transferTimeToDeg()
}, 1000)

function transferTimeToDeg() {
  const now = new Date()
  let hour = now.getHours()
  hour = hour >= 12 ? hour - 12 : hour
  const minute = now.getMinutes()
  const second = now.getSeconds()
  const secondDeg = 360 / 60 * second
  const minuteDeg = 360 / 60 * minute + 360 / 60 / 60 * second
  const hourDeg = 360 / 12 * hour + 360 / 12 / 60 * minute - 90

  appendDeg(hourDeg, minuteDeg, secondDeg)
}

function appendDeg(hour, minute, second) {
  hourElement.style.transform = "translate(50%,-50%) rotate(" + hour + "deg)"
  minuteElement.style.transform = "translate(50%,-50%) rotate(" + minute + "deg)"
  secondElement.style.transform = "translate(50%,-50%) rotate(" + second + "deg)"
}

