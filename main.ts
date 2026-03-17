let ballbeimir = false
let spiellaeuft = false
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        ballbeimir = true
        spiellaeuft = true
        basic.showString("ich hab den ball")
        basic.setLedColor(basic.rgb(0, 255, 0))
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    if (spiellaeuft == false) {
        spiellaeuft = true
        ballbeimir = false
        radio.sendNumber(1)
        basic.showString("ich hab aufgeschlagen")
        basic.showIcon(IconNames.ArrowEast)
        basic.pause(800)
        basic.clearScreen()
    }
})
basic.forever(function () {
	
})
